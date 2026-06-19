import data from "./overwatch.json" with { type: "json" }
import { heroes as seedHeroes } from "./heroes.ts"
import { matchupOverrides } from "./guide-overrides.ts"
import type { Hero, Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"

type OverwatchData = {
  heroes?: Hero[]
  matchups: Record<string, Matchup[]>
}

const overwatchData = data as OverwatchData
const guideImageVersion = "portrait-20260612"
const seedHeroById = new Map(seedHeroes.map((hero) => [hero.id, hero]))
const crawledHeroById = new Map(
  (overwatchData.heroes ?? []).map((hero) => [hero.id, hero]),
)

const versionedGuideImage = (path: string) =>
  path.includes("?") ? path : `${path}?v=${guideImageVersion}`

const localHeroImage = (hero: Hero) => ({
  ...hero,
  avatar: versionedGuideImage(
    hero.avatar.startsWith("./guide-images/")
      ? hero.avatar
      : `./guide-images/heroes/${hero.id}.webp`,
  ),
})

const mergedHeroes = [
  ...seedHeroes.map((hero) => crawledHeroById.get(hero.id) ?? hero),
  ...(overwatchData.heroes ?? []).filter((hero) => !seedHeroById.has(hero.id)),
]

const withOverrideBodies = (
  entries: Matchup[] = [],
  overrides: Matchup[] = [],
) => {
  const entryTargets = new Set(entries.map((entry) => entry.target))
  const overrideByTarget = new Map(
    overrides.map((entry) => [entry.target, entry]),
  )
  return [
    ...entries.map((entry) => ({
      ...overrideByTarget.get(entry.target),
      ...entry,
      body: entry.body ?? overrideByTarget.get(entry.target)?.body,
      note: entry.note ?? overrideByTarget.get(entry.target)?.note,
    })),
    ...overrides.filter((entry) => !entryTargets.has(entry.target)),
  ]
}

export const heroes = mergedHeroes.map(localHeroImage)
export const matchups = Object.fromEntries(
  heroes.map((hero) => [
    hero.id,
    withOverrideBodies(
      overwatchData.matchups[hero.id],
      matchupOverrides[hero.id],
    ),
  ]),
)
