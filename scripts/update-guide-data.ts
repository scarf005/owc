/// <reference lib="deno.ns" />

const artifacts = [
  "src/data/guide.json",
  "src/data/overwatch.json",
  "public/guide-images",
  "tests/__snapshots__/layout_test.ts.snap",
]

const run = async (
  options: {
    command: string
    args: string[]
    cwd?: string
    capture?: boolean
    successCodes?: number[]
  },
) => {
  const output = await new Deno.Command(options.command, {
    args: options.args,
    cwd: options.cwd,
    stdout: options.capture ? "piped" : "inherit",
    stderr: "inherit",
  }).output()
  if (!(options.successCodes ?? [0]).includes(output.code)) {
    throw new Error(
      `${options.command} ${options.args.join(" ")} failed (${output.code})`,
    )
  }
  return {
    code: output.code,
    text: options.capture ? new TextDecoder().decode(output.stdout).trim() : "",
  }
}

const git = (args: string[], successCodes = [0]) =>
  run({ command: "git", args, capture: true, successCodes })

const assertClean = async () => {
  if ((await git(["status", "--porcelain"])).text) {
    throw new Error(
      "Commit or move existing changes before updating guide data.",
    )
  }
}

export const updateGuideData = async () => {
  const root = await Deno.realPath(Deno.cwd())
  if ((await git(["rev-parse", "--show-toplevel"])).text !== root) {
    throw new Error("Run from the repository root.")
  }
  await assertClean()
  const scratch = await Deno.makeTempDir({
    dir: root,
    prefix: ".guide-update-",
  })
  try {
    await Deno.mkdir(`${scratch}/src/data`, { recursive: true })
    await run({
      command: Deno.execPath(),
      args: [
        "run",
        "--allow-net",
        "--allow-read",
        "--allow-write=public,src/data",
        "--allow-run=curl",
        `${root}/scripts/crawl-guide-data.ts`,
      ],
      cwd: scratch,
    })
    await run({
      command: Deno.execPath(),
      args: [
        "run",
        "--allow-read",
        "scripts/validate-guide-data.ts",
        `${scratch}/src/data`,
      ],
    })
    await run({
      command: Deno.execPath(),
      args: [
        "fmt",
        ...artifacts.slice(0, 2).map((path) => `${scratch}/${path}`),
      ],
    })
    await assertClean()
    await run({ command: "gio", args: ["trash", "public/guide-images"] })
    await Deno.rename(`${scratch}/public/guide-images`, "public/guide-images")
    for (const path of artifacts.slice(0, 2)) {
      await Deno.copyFile(`${scratch}/${path}`, path)
    }
    await run({
      command: Deno.execPath(),
      args: [
        "task",
        "test",
        "--filter=/screenshots stay stable/",
        "--",
        "--update",
      ],
    })
    await run({ command: Deno.execPath(), args: ["task", "validate"] })
    if ((await git(["diff", "--cached", "--name-only"])).text) {
      throw new Error(
        "The index changed during the update; nothing was staged by this script.",
      )
    }
    const paths = [
      ...(await git(["diff", "--name-only", "-z"])).text.split("\0"),
      ...(await git(["ls-files", "--others", "--exclude-standard", "-z"])).text
        .split("\0"),
    ].filter(Boolean)
    if (
      paths.some((path) =>
        !artifacts.some((artifact) =>
          path === artifact || path.startsWith(`${artifact}/`)
        )
      )
    ) {
      throw new Error(
        "Unrelated files changed during the update; nothing was staged by this script.",
      )
    }
    await git(["add", "--force", "--", ...artifacts])
    if ((await git(["diff", "--cached", "--quiet"], [0, 1])).code === 0) {
      console.log("Guide data is unchanged; no commit created.")
      return
    }
    await run({
      command: "git",
      args: ["commit", "-m", "feat: refresh Namu hero and map guide data"],
    })
  } finally {
    await run({ command: "gio", args: ["trash", scratch] })
  }
}

if (import.meta.main) {
  await updateGuideData().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error))
    Deno.exit(1)
  })
}
