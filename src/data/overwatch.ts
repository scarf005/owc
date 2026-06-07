import data from "./overwatch.json" with { type: "json" }
import type { Hero, Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"

type OverwatchData = {
  heroes: Hero[]
  matchups: Record<string, Matchup[]>
}

const overwatchData = data as OverwatchData

export const heroes = overwatchData.heroes
export const matchups = overwatchData.matchups
