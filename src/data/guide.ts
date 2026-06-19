import data from "./guide.json" with { type: "json" }
import { heroes as seedHeroes } from "./heroes.ts"
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
const guideImageVersion = "portrait-20260612"

const versionedGuideImage = (path: string) =>
  path.includes("?") ? path : `${path}?v=${guideImageVersion}`

const mapOverrides: Record<
  string,
  { image: string; name: string; page: string }
> = Object.fromEntries(
  ["네온-교차로", "네온-정션"].map((id) => [
    id,
    {
      image: "./guide-images/maps/네온-교차로.jpg",
      name: "네온 교차로",
      page: "https://namu.wiki/w/네온%20교차로",
    },
  ]),
)

const localMapImage = (mode: MapMode): MapMode => ({
  ...mode,
  maps: mode.maps.map((map) => {
    const override = mapOverrides[map.id]
    return {
      ...map,
      ...override,
      image: versionedGuideImage(
        override?.image ??
          (map.image.startsWith("./guide-images/")
            ? map.image
            : `./guide-images/maps/${map.id}.webp`),
      ),
    }
  }),
})

export const source = guideData.source ?? {
  name: "Namu Wiki",
  url: "https://namu.wiki",
  updatedAt: "unknown",
}
export const synergyRatings = guideData.synergyRatings
export const heroSynergies = Object.fromEntries(
  seedHeroes.map((hero) => [
    hero.id,
    guideData.heroSynergies[hero.id] ?? [],
  ]),
)
export const mapModes = guideData.mapModes.map(localMapImage)
