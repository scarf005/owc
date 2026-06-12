import data from "./guide.json" with { type: "json" }
import type {
  DataSource,
  HeroId,
  MapMode,
  SynergyEntry,
  SynergyRating,
} from "./schema.ts"

export type {
  DataSource,
  HeroId,
  MapInfo,
  MapMode,
  MapRecommendation,
  SynergyEntry,
  SynergyRating,
} from "./schema.ts"

type GuideData = {
  source?: DataSource
  synergyRatings: { key: SynergyRating; label: string }[]
  heroSynergies: Record<HeroId, SynergyEntry[]>
  mapModes: MapMode[]
}

const guideData = data as GuideData

const mapImageExtensions: Record<string, string> = { "네온-정션": "svg" }

const localMapImage = (mode: MapMode): MapMode => ({
  ...mode,
  maps: mode.maps.map((map) => ({
    ...map,
    image: map.image.startsWith("./guide-images/")
      ? map.image
      : `./guide-images/maps/${map.id}.${mapImageExtensions[map.id] ?? "webp"}`,
  })),
})

export const source = guideData.source ?? {
  name: "Namu Wiki",
  url: "https://namu.wiki",
  updatedAt: "unknown",
}
export const synergyRatings = guideData.synergyRatings
export const heroSynergies = guideData.heroSynergies
export const mapModes = guideData.mapModes.map(localMapImage)
