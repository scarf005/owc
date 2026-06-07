import data from "./guide.json" with { type: "json" }
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

const guideData = data as GuideData

export const synergyRatings = guideData.synergyRatings
export const heroSynergies = guideData.heroSynergies
export const mapModes = guideData.mapModes
