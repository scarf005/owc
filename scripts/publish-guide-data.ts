/// <reference lib="deno.ns" />

const TAG_PREFIX = "guide-data-"
const ASSET = "guide-data.tar.gz"
const DATA_FILES = ["src/data/guide.json", "src/data/overwatch.json"]
const root = new URL("..", import.meta.url).pathname

const run = async (
  options: { command: string; args: string[]; cwd?: string; capture?: boolean },
) => {
  const output = await new Deno.Command(options.command, {
    args: options.args,
    cwd: options.cwd,
    stdout: options.capture ? "piped" : "inherit",
    stderr: "inherit",
  }).output()
  if (!output.success) {
    throw new Error(`${options.command} ${options.args.join(" ")} failed`)
  }
  return options.capture ? new TextDecoder().decode(output.stdout).trim() : ""
}

const latestTag = async () => {
  const releases: { tagName: string }[] = JSON.parse(
    await run({
      command: "gh",
      args: ["release", "list", "--json", "tagName", "--limit", "50"],
      capture: true,
    }),
  )
  return releases.map((release) => release.tagName)
    .filter((tag) => tag.startsWith(TAG_PREFIX))
    .sort().at(-1)
}

const sameData = async (left: string, right: string) => {
  for (const path of DATA_FILES) {
    const [a, b] = await Promise.all([
      Deno.readTextFile(`${left}/${path}`),
      Deno.readTextFile(`${right}/${path}`),
    ])
    if (a !== b) return false
  }
  return true
}

const publish = async (dir: string) => {
  const fresh = `${dir}/fresh`
  await Deno.mkdir(`${fresh}/src/data`, { recursive: true })
  await run({
    command: Deno.execPath(),
    args: [
      "run",
      "--allow-net",
      "--allow-read",
      "--allow-write=public,src/data",
      "--allow-run=curl",
      `${root}scripts/crawl-guide-data.ts`,
    ],
    cwd: fresh,
  })
  await run({
    command: Deno.execPath(),
    args: [
      "run",
      "--allow-read",
      `${root}scripts/validate-guide-data.ts`,
      `${fresh}/src/data`,
    ],
  })

  const tag = await latestTag()
  if (tag) {
    const previous = `${dir}/previous`
    await run({
      command: "gh",
      args: ["release", "download", tag, "--pattern", ASSET, "--dir", previous],
    })
    await run({
      command: "tar",
      args: ["xzf", `${previous}/${ASSET}`, "-C", previous],
    })
    if (await sameData(fresh, previous)) {
      console.log(`Unchanged since ${tag}`)
      return
    }
  }

  const archive = `${dir}/${ASSET}`
  await run({
    command: "tar",
    args: ["czf", archive, "-C", fresh, ...DATA_FILES, "public/guide-images"],
  })
  const date = new Date().toISOString().slice(0, 10)
  await run({
    command: "gh",
    args: [
      "release",
      "create",
      `${TAG_PREFIX}${date}`,
      archive,
      "--title",
      `Guide data ${date}`,
      "--notes",
      "Crawled from namu.wiki",
      "--latest=false",
    ],
  })
}

const main = async () => {
  // gio trash cannot handle /tmp, so keep scratch space in the XDG cache.
  const cache = `${
    Deno.env.get("XDG_CACHE_HOME") ?? `${Deno.env.get("HOME")}/.cache`
  }/owc`
  await Deno.mkdir(cache, { recursive: true })
  const dir = await Deno.makeTempDir({ dir: cache, prefix: "publish-" })
  try {
    await publish(dir)
  } finally {
    await run({ command: "gio", args: ["trash", dir] })
  }
}

if (import.meta.main) {
  await main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error))
    Deno.exit(1)
  })
}
