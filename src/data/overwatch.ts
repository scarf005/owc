import data from "./overwatch.json" with { type: "json" }
import { heroes as seedHeroes } from "./heroes.ts"
import type { Hero, Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"

type OverwatchData = {
  heroes?: Hero[]
  matchups: Record<string, Matchup[]>
}

const overwatchData = data as OverwatchData
const guideImageVersion = "portrait-20260612"

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

export const heroes = (overwatchData.heroes ?? seedHeroes).map(localHeroImage)
export const matchups = overwatchData.matchups
