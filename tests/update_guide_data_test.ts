/// <reference lib="deno.ns" />

import { assert, assertEquals } from "@std/assert"

const repository = new URL("../", import.meta.url)
const environment = {
  PATH: Deno.env.get("PATH") ?? "",
  DENO_DIR: Deno.env.get("DENO_DIR") ??
    `${Deno.cwd()}/node_modules/.deno-test-cache`,
  DENO_NO_UPDATE_CHECK: "1",
  GIT_CONFIG_NOSYSTEM: "1",
  GIT_CONFIG_GLOBAL: Deno.build.os === "windows" ? "NUL" : "/dev/null",
  GIT_TERMINAL_PROMPT: "0",
}

const command = async (root: string, executable: string, args: string[]) => {
  const output = await new Deno.Command(executable, {
    args,
    cwd: root,
    clearEnv: true,
    env: environment,
    stdout: "piped",
    stderr: "piped",
  }).output()
  return {
    code: output.code,
    text: new TextDecoder().decode(output.stdout) +
      new TextDecoder().decode(output.stderr),
  }
}

const update = (root: string) =>
  command(root, Deno.execPath(), [
    "run",
    "--allow-read=.",
    "--allow-write=.",
    "--allow-run=git,deno,gio",
    "scripts/update-guide-data.ts",
  ])

const fixture = async (
  options: {
    unchanged?: boolean
    crawlFails?: boolean
    validationFails?: boolean
  } = {},
) => {
  const root = await Deno.makeTempDir({
    dir: Deno.cwd(),
    prefix: ".guide-update-tests-",
  })
  await Deno.mkdir(`${root}/scripts`, { recursive: true })
  await Deno.mkdir(`${root}/src/data`, { recursive: true })
  await Deno.mkdir(`${root}/public/guide-images`, { recursive: true })
  await Deno.mkdir(`${root}/tests/__snapshots__`, { recursive: true })
  await Deno.writeTextFile(
    `${root}/tests/__snapshots__/layout_test.ts.snap`,
    "0",
  )
  await Deno.writeTextFile(
    `${root}/scripts/snapshots.ts`,
    `await Deno.writeTextFile("tests/__snapshots__/layout_test.ts.snap", "${
      options.unchanged ? 0 : 1
    }")\n`,
  )
  await Deno.copyFile(
    new URL("scripts/update-guide-data.ts", repository),
    `${root}/scripts/update-guide-data.ts`,
  )
  await Deno.writeTextFile(
    `${root}/.gitignore`,
    ".guide-update-*/\nsrc/data/*.json\npublic/guide-images/\n",
  )
  await Deno.writeTextFile(
    `${root}/deno.json`,
    JSON.stringify({
      tasks: {
        test: "deno run --allow-write scripts/snapshots.ts",
        validate: "deno run scripts/validate.ts",
      },
      fmt: { semiColons: false },
    }),
  )
  const before = `${JSON.stringify({ revision: 0 }, null, 2)}\n`
  const after = `${
    JSON.stringify({ revision: options.unchanged ? 0 : 1 }, null, 2)
  }\n`
  for (const name of ["guide", "overwatch"]) {
    await Deno.writeTextFile(`${root}/src/data/${name}.json`, before)
  }
  await Deno.writeTextFile(`${root}/public/guide-images/old.svg`, "old")
  await Deno.writeTextFile(
    `${root}/scripts/crawl-guide-data.ts`,
    options.crawlFails ? "Deno.exit(1)\n" : `
await Deno.mkdir("public/guide-images", { recursive: true })
await Deno.writeTextFile("public/guide-images/${
      options.unchanged ? "old" : "new"
    }.svg", ${JSON.stringify(options.unchanged ? "old" : "new")})
for (const name of ["guide", "overwatch"]) await Deno.writeTextFile("src/data/" + name + ".json", ${
      JSON.stringify(after)
    })
`,
  )
  await Deno.writeTextFile(
    `${root}/scripts/validate-guide-data.ts`,
    "// Fixture schema validation.\n",
  )
  await Deno.writeTextFile(
    `${root}/scripts/validate.ts`,
    options.validationFails
      ? "Deno.exit(1)\n"
      : "// Fixture project validation.\n",
  )
  for (
    const args of [
      ["init", "--initial-branch=main"],
      ["config", "user.name", "Fixture"],
      ["config", "user.email", "fixture@example.invalid"],
      ["config", "core.hooksPath", ".git/hooks"],
      ["add", "--force", "."],
      ["commit", "-m", "test: seed fixture"],
    ]
  ) assertEquals((await command(root, "git", args)).code, 0)
  return root
}

const withFixture = async (
  options: Parameters<typeof fixture>[0],
  test: (root: string) => Promise<void>,
) => {
  const root = await fixture(options)
  try {
    await test(root)
  } finally {
    assertEquals((await command(Deno.cwd(), "gio", ["trash", root])).code, 0)
  }
}

Deno.test("just update-db commits only generated data and includes new ignored images", () =>
  withFixture({}, async (root) => {
    const result = await update(root)
    assertEquals(result.code, 0, result.text)
    const files = (await command(root, "git", [
      "diff-tree",
      "--no-commit-id",
      "--name-only",
      "-r",
      "HEAD",
    ])).text.trim().split("\n").sort()
    assertEquals(files, [
      "public/guide-images/new.svg",
      "public/guide-images/old.svg",
      "src/data/guide.json",
      "src/data/overwatch.json",
      "tests/__snapshots__/layout_test.ts.snap",
    ])
    assertEquals(
      (await command(root, "git", ["status", "--porcelain"])).text,
      "",
    )
  }))

Deno.test("just update-db creates no commit when data is unchanged", () =>
  withFixture({ unchanged: true }, async (root) => {
    const result = await update(root)
    assertEquals(result.code, 0, result.text)
    assert(result.text.includes("no commit created"))
    assertEquals(
      (await command(root, "git", ["rev-list", "--count", "HEAD"])).text.trim(),
      "1",
    )
  }))

Deno.test("just update-db rejects existing unstaged and staged changes", () =>
  withFixture({}, async (root) => {
    await Deno.writeTextFile(`${root}/personal.txt`, "user-owned")
    for (const staged of [false, true]) {
      if (staged) await command(root, "git", ["add", "personal.txt"])
      const result = await update(root)
      assert(result.code !== 0)
      assert(result.text.includes("existing changes"))
      assertEquals(
        JSON.parse(await Deno.readTextFile(`${root}/src/data/guide.json`)),
        { revision: 0 },
      )
      assertEquals(
        await Deno.readTextFile(`${root}/personal.txt`),
        "user-owned",
      )
    }
  }))

Deno.test("just update-db leaves original data intact when crawling fails", () =>
  withFixture({ crawlFails: true }, async (root) => {
    assert((await update(root)).code !== 0)
    assertEquals(
      (await command(root, "git", ["status", "--porcelain"])).text,
      "",
    )
    assertEquals(
      await Deno.readTextFile(`${root}/public/guide-images/old.svg`),
      "old",
    )
  }))

Deno.test("just update-db does not stage or commit data when validation fails", () =>
  withFixture({ validationFails: true }, async (root) => {
    assert((await update(root)).code !== 0)
    assertEquals(
      (await command(root, "git", ["diff", "--cached", "--name-only"])).text,
      "",
    )
    assertEquals(
      (await command(root, "git", ["rev-list", "--count", "HEAD"])).text.trim(),
      "1",
    )
    assertEquals(
      JSON.parse(await Deno.readTextFile(`${root}/src/data/guide.json`)),
      { revision: 1 },
    )
  }))

Deno.test("update recipe permissions reject reads outside its repository", () =>
  withFixture({}, async (root) => {
    const outside = await Deno.realPath(new URL("README.md", repository))
    await Deno.writeTextFile(
      `${root}/scripts/read-outside.ts`,
      `await Deno.readTextFile(${JSON.stringify(outside)})\n`,
    )
    const result = await command(root, Deno.execPath(), [
      "run",
      "--allow-read=.",
      "--allow-write=.",
      "--allow-run=git,deno,gio",
      "scripts/read-outside.ts",
    ])
    assert(result.code !== 0)
    assert(result.text.includes("Requires read access"), result.text)
  }))

Deno.test("just update-db respects a rejecting commit hook", () =>
  withFixture({}, async (root) => {
    await Deno.writeTextFile(
      `${root}/.git/hooks/pre-commit`,
      "#!/usr/bin/env -S deno run\nDeno.exit(1)\n",
    )
    await Deno.chmod(`${root}/.git/hooks/pre-commit`, 0o755)
    const result = await update(root)
    assert(result.code !== 0, result.text)
    assertEquals(
      (await command(root, "git", ["rev-list", "--count", "HEAD"])).text.trim(),
      "1",
    )
    assert(
      (await command(root, "git", ["diff", "--cached", "--name-only"])).text
        .includes("guide.json"),
    )
  }))
