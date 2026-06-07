import { loadJsonc } from "./load-jsonc.ts"
import type {
  HeroId,
  MapMode,
  MapRecommendation,
  SynergyEntry,
  SynergyRating,
} from "./schema.ts"

export type {
  HeroId,
  MapInfo,
  MapMode,
  MapRecommendation,
  SynergyEntry,
  SynergyRating,
} from "./schema.ts"

type GuideData = {
  synergyRatings: { key: SynergyRating; label: string }[]
  heroSynergies: Record<HeroId, SynergyEntry[]>
  mapModes: MapMode[]
}

const data = await loadJsonc<GuideData>(
  "./guide.jsonc",
  new URL("./guide.jsonc", import.meta.url),
)

export const synergyRatings = data.synergyRatings
export const heroSynergies = data.heroSynergies
export const mapModes = data.mapModes
