import data from "./overwatch.json" with { type: "json" }
import type { Matchup } from "./schema.ts"

export type { Hero, Matchup, Rating, Role } from "./schema.ts"
export { heroes } from "./heroes.ts"

type OverwatchData = {
  matchups: Record<string, Matchup[]>
}

const overwatchData = data as OverwatchData

export const matchups = overwatchData.matchups
