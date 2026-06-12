import data from "./overwatch.json" with { type: "json" }
import { heroes as seedHeroes } from "./heroes.ts"
import type { Hero, Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"

type OverwatchData = {
  heroes?: Hero[]
  matchups: Record<string, Matchup[]>
}

const overwatchData = data as OverwatchData

export const heroes = overwatchData.heroes ?? seedHeroes
export const matchups = overwatchData.matchups
