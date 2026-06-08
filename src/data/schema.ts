export type Role = "tank" | "damage" | "support"

export type Rating = "veryBad" | "bad" | "neutral" | "good" | "veryGood"

export type HeroId = string

export type DataSource = {
  name: string
  url: string
  updatedAt: string
}

export type Hero = {
  id: HeroId
  name: string
  role: Role
  avatar: string
  page: string
}

export type Matchup = {
  target: HeroId
  rating: Rating
  note?: string
}

export type SynergyRating = "veryGood" | "good" | "neutral" | "bad" | "veryBad"

export type SynergyEntry = {
  target: HeroId
  rating: SynergyRating
  note?: string
}

export type MapRecommendation = {
  id: HeroId
  note?: string
}

export type MapInfo = {
  id: string
  name: string
  page: string
  image: string
  attack: MapRecommendation[]
  defense: MapRecommendation[]
}

export type MapMode = {
  id: string
  label: string
  color: string
  maps: MapInfo[]
}
