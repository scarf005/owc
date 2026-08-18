import { heroes } from "../src/data/heroes.ts"

type GuideData = {
  heroSynergies?: Record<string, unknown>
}

type OverwatchData = {
  heroes?: { id: string }[]
  matchups?: Record<string, unknown>
}

const dataDirectory = Deno.args[0] ?? "src/data"
const readJson = async <T>(name: string) =>
  JSON.parse(await Deno.readTextFile(`${dataDirectory}/${name}`)) as T

const overwatch = await readJson<OverwatchData>("overwatch.json")
const guide = await readJson<GuideData>("guide.json")
const heroIds = heroes.map((hero) => hero.id)
const missingHeroes = heroIds.filter(
  (id) => !overwatch.heroes?.some((hero) => hero.id === id),
)
const missingMatchups = heroIds.filter(
  (id) => !Array.isArray(overwatch.matchups?.[id]),
)
const missingSynergies = heroIds.filter(
  (id) => !Array.isArray(guide.heroSynergies?.[id]),
)

const errors = [
  missingHeroes.length > 0
    ? `heroes missing: ${missingHeroes.join(", ")}`
    : undefined,
  missingMatchups.length > 0
    ? `matchups missing: ${missingMatchups.join(", ")}`
    : undefined,
  missingSynergies.length > 0
    ? `synergies missing: ${missingSynergies.join(", ")}`
    : undefined,
].filter((error): error is string => Boolean(error))

if (errors.length > 0) {
  console.error(`Incomplete guide data in ${dataDirectory}:`)
  for (const error of errors) console.error(`- ${error}`)
  Deno.exit(1)
}

console.log(`Guide data is complete for ${heroIds.length} heroes.`)
