import { loadJsonc } from "./load-jsonc.ts"
import type { Hero, Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"

type OverwatchData = {
  heroes: Hero[]
  matchups: Record<string, Matchup[]>
}

const data = await loadJsonc<OverwatchData>(
  "./overwatch.jsonc",
  new URL("./overwatch.jsonc", import.meta.url),
)

export const heroes = data.heroes
export const matchups = data.matchups
