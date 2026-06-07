export type HeroId = string

export type SynergyRating = "veryGood" | "good" | "neutral" | "bad" | "veryBad"

export type SynergyEntry = {
  target: HeroId
  rating: SynergyRating
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

export const synergyRatings: { key: SynergyRating; label: string }[] = [
  { key: "veryGood", label: "매우 좋음" },
  { key: "good", label: "좋음" },
  { key: "neutral", label: "보통" },
  { key: "bad", label: "나쁨" },
  { key: "veryBad", label: "매우 나쁨" },
]

// 궁합 등급은 나무위키 궁합 본문을 수집한 뒤 키워드로 자동 분류합니다.
export const heroSynergies: Record<HeroId, SynergyEntry[]> = {
  "d-va": [
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryGood",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "doomfist": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "veryBad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "veryBad",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "veryGood",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "wrecking-ball": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "veryBad",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "veryBad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "winston": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "hazard": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryGood",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "roadhog": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "veryGood",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "mauga": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "orisa": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "veryGood",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryGood",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "zarya": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "anran",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "veryGood",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "veryGood",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "domina": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "ramattra": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "veryBad",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "reinhardt": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "sigma": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "junker-queen": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "mei": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "bastion": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "veryGood",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "veryGood",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "soldier-76": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "symmetra": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "emre": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "junkrat": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "veryGood",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "torbjorn": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "sombra": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "sierra": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "echo": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "pharah": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "bad",
    },
    {
      "target": "torbjorn",
      "rating": "veryGood",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "freja": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "veryGood",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "genji": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "veryBad",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "veryGood",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryGood",
    },
    {
      "target": "emre",
      "rating": "bad",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "reaper": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryBad",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "veryBad",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "vendetta": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryGood",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "venture": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "anran": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "tracer": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "sojourn": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "ashe": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "neutral",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "widowmaker": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryBad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "veryGood",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "veryGood",
    },
    {
      "target": "jetpack-cat",
      "rating": "veryBad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "cassidy": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "veryGood",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "hanzo": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "neutral",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "neutral",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "neutral",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "lucio": [
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "baptiste": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "neutral",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryBad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "bad",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "ana": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "veryGood",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "bad",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "good",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "jetpack-cat": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "veryGood",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "veryGood",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "veryBad",
    },
    {
      "target": "mei",
      "rating": "veryBad",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "veryGood",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "veryBad",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "veryGood",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "veryBad",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "veryBad",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "neutral",
    },
    {
      "target": "lucio",
      "rating": "neutral",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "veryBad",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "neutral",
    },
  ],
  "zenyatta": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "veryBad",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "bad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryBad",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "veryGood",
    },
    {
      "target": "soldier-76",
      "rating": "veryGood",
    },
    {
      "target": "sombra",
      "rating": "veryGood",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryBad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "lifeweaver": [
    {
      "target": "d-va",
      "rating": "veryGood",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "veryBad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "good",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryGood",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "veryGood",
    },
    {
      "target": "vendetta",
      "rating": "bad",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "veryBad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "bad",
    },
    {
      "target": "baptiste",
      "rating": "bad",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "mercy": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "good",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "bad",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "veryBad",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "bad",
    },
    {
      "target": "genji",
      "rating": "neutral",
    },
    {
      "target": "reaper",
      "rating": "bad",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "good",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "veryGood",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "veryBad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "anran",
      "rating": "veryGood",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "good",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "veryBad",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryGood",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "veryBad",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "good",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "bad",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "moira": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "good",
    },
    {
      "target": "reinhardt",
      "rating": "bad",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "veryBad",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "veryBad",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "veryBad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "veryBad",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "bad",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "bad",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "neutral",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryBad",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "kiriko": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryGood",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "veryGood",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryBad",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "good",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "veryGood",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "bad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "bad",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "bad",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "veryGood",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryGood",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "wuyang",
      "rating": "veryGood",
    },
    {
      "target": "illari",
      "rating": "veryBad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "good",
    },
  ],
  "mizuki": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "neutral",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "neutral",
    },
    {
      "target": "orisa",
      "rating": "neutral",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "neutral",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "neutral",
    },
    {
      "target": "bastion",
      "rating": "neutral",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "neutral",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "neutral",
    },
    {
      "target": "sombra",
      "rating": "neutral",
    },
    {
      "target": "symmetra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "neutral",
    },
    {
      "target": "echo",
      "rating": "neutral",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "neutral",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "neutral",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "good",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "neutral",
    },
    {
      "target": "ana",
      "rating": "good",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "veryGood",
    },
    {
      "target": "juno",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "good",
    },
  ],
  "brigitte": [
    {
      "target": "d-va",
      "rating": "good",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "good",
    },
    {
      "target": "ramattra",
      "rating": "neutral",
    },
    {
      "target": "reinhardt",
      "rating": "neutral",
    },
    {
      "target": "wrecking-ball",
      "rating": "neutral",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "bad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "neutral",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "neutral",
    },
    {
      "target": "hazard",
      "rating": "neutral",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "bad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "bad",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "good",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "neutral",
    },
    {
      "target": "junkrat",
      "rating": "bad",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "neutral",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "good",
    },
    {
      "target": "lifeweaver",
      "rating": "good",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "neutral",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "good",
    },
    {
      "target": "illari",
      "rating": "bad",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "neutral",
    },
    {
      "target": "juno",
      "rating": "veryGood",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "wuyang": [
    {
      "target": "d-va",
      "rating": "veryBad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "bad",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "bad",
    },
    {
      "target": "roadhog",
      "rating": "veryGood",
    },
    {
      "target": "mauga",
      "rating": "bad",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "winston",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "bad",
    },
    {
      "target": "hazard",
      "rating": "veryBad",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "neutral",
    },
    {
      "target": "mei",
      "rating": "bad",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "neutral",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "good",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "good",
    },
    {
      "target": "ashe",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "bad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "good",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "veryGood",
    },
    {
      "target": "pharah",
      "rating": "good",
    },
    {
      "target": "freja",
      "rating": "bad",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "veryGood",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "bad",
    },
    {
      "target": "moira",
      "rating": "bad",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "good",
    },
    {
      "target": "brigitte",
      "rating": "good",
    },
    {
      "target": "ana",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "good",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "juno",
      "rating": "bad",
    },
    {
      "target": "kiriko",
      "rating": "veryGood",
    },
  ],
  "illari": [
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "d-va",
      "rating": "neutral",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "good",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "good",
    },
    {
      "target": "orisa",
      "rating": "veryGood",
    },
    {
      "target": "zarya",
      "rating": "good",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "genji",
      "rating": "bad",
    },
    {
      "target": "reaper",
      "rating": "good",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "good",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "soldier-76",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "bad",
    },
    {
      "target": "ashe",
      "rating": "good",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "widowmaker",
      "rating": "veryGood",
    },
    {
      "target": "junkrat",
      "rating": "neutral",
    },
    {
      "target": "cassidy",
      "rating": "good",
    },
    {
      "target": "torbjorn",
      "rating": "bad",
    },
    {
      "target": "tracer",
      "rating": "veryBad",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "good",
    },
    {
      "target": "hanzo",
      "rating": "bad",
    },
    {
      "target": "lifeweaver",
      "rating": "veryGood",
    },
    {
      "target": "lucio",
      "rating": "veryBad",
    },
    {
      "target": "mercy",
      "rating": "good",
    },
    {
      "target": "moira",
      "rating": "veryBad",
    },
    {
      "target": "baptiste",
      "rating": "veryGood",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "veryGood",
    },
    {
      "target": "wuyang",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "bad",
    },
    {
      "target": "juno",
      "rating": "veryBad",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
  "juno": [
    {
      "target": "d-va",
      "rating": "bad",
    },
    {
      "target": "domina",
      "rating": "neutral",
    },
    {
      "target": "doomfist",
      "rating": "veryBad",
    },
    {
      "target": "ramattra",
      "rating": "veryGood",
    },
    {
      "target": "reinhardt",
      "rating": "good",
    },
    {
      "target": "wrecking-ball",
      "rating": "good",
    },
    {
      "target": "roadhog",
      "rating": "bad",
    },
    {
      "target": "mauga",
      "rating": "good",
    },
    {
      "target": "sigma",
      "rating": "veryBad",
    },
    {
      "target": "orisa",
      "rating": "bad",
    },
    {
      "target": "winston",
      "rating": "good",
    },
    {
      "target": "zarya",
      "rating": "bad",
    },
    {
      "target": "junker-queen",
      "rating": "veryGood",
    },
    {
      "target": "hazard",
      "rating": "good",
    },
    {
      "target": "genji",
      "rating": "good",
    },
    {
      "target": "reaper",
      "rating": "veryGood",
    },
    {
      "target": "mei",
      "rating": "good",
    },
    {
      "target": "bastion",
      "rating": "veryBad",
    },
    {
      "target": "vendetta",
      "rating": "neutral",
    },
    {
      "target": "venture",
      "rating": "good",
    },
    {
      "target": "sojourn",
      "rating": "good",
    },
    {
      "target": "sombra",
      "rating": "bad",
    },
    {
      "target": "symmetra",
      "rating": "good",
    },
    {
      "target": "sierra",
      "rating": "neutral",
    },
    {
      "target": "anran",
      "rating": "neutral",
    },
    {
      "target": "ashe",
      "rating": "veryBad",
    },
    {
      "target": "echo",
      "rating": "veryBad",
    },
    {
      "target": "emre",
      "rating": "neutral",
    },
    {
      "target": "widowmaker",
      "rating": "good",
    },
    {
      "target": "junkrat",
      "rating": "veryBad",
    },
    {
      "target": "cassidy",
      "rating": "veryGood",
    },
    {
      "target": "torbjorn",
      "rating": "good",
    },
    {
      "target": "tracer",
      "rating": "good",
    },
    {
      "target": "pharah",
      "rating": "veryBad",
    },
    {
      "target": "freja",
      "rating": "neutral",
    },
    {
      "target": "hanzo",
      "rating": "veryBad",
    },
    {
      "target": "lifeweaver",
      "rating": "veryBad",
    },
    {
      "target": "lucio",
      "rating": "bad",
    },
    {
      "target": "mercy",
      "rating": "neutral",
    },
    {
      "target": "moira",
      "rating": "good",
    },
    {
      "target": "mizuki",
      "rating": "neutral",
    },
    {
      "target": "baptiste",
      "rating": "veryBad",
    },
    {
      "target": "brigitte",
      "rating": "bad",
    },
    {
      "target": "ana",
      "rating": "veryBad",
    },
    {
      "target": "wuyang",
      "rating": "bad",
    },
    {
      "target": "illari",
      "rating": "neutral",
    },
    {
      "target": "jetpack-cat",
      "rating": "neutral",
    },
    {
      "target": "zenyatta",
      "rating": "good",
    },
    {
      "target": "kiriko",
      "rating": "bad",
    },
  ],
}

// 나무위키 전장 문서에 추천 영웅 표기가 없는 전장은 빈 배열로 둡니다.
export const mapModes: MapMode[] = [
  {
    "id": "쟁탈",
    "label": "쟁탈",
    "color": "#2f80ed",
    "maps": [
      {
        "id": "남극-반도",
        "name": "남극 반도",
        "page":
          "https://namu.wiki/w/%EB%82%A8%EA%B7%B9%20%EB%B0%98%EB%8F%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/Gi2kI0V8ixAUpP5nAnx5hb-Hcecfv6kR15vejRbJrrbCJyEuvrkGSMyghhME-LmVfz3dY5v4-vwSkWSayMUVd-zs02cytXtEUkax3DY_Jhk42aOOlhHvsagx2kTmvwHfiEn4plC3XOJh76TQkApM7w.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "네팔",
        "name": "네팔",
        "page":
          "https://namu.wiki/w/%EB%84%A4%ED%8C%94(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/-2uqHsirtIcWKdlumzYFt3-EPM9pG1ufdd3o3kMh1_ImMf53L66BNcMrQDllHL7fz02eVxtGHvytnwFl3ueDLH_4isckGSn_hUfZs8VA7p36GhLNNjT9JQhrip-jOaDSpxdI85rBm4dMASVLAWwOSg.webp",
        "attack": [
          {
            "id": "roadhog",
            "note":
              "성소 구역 한정으로 낙사각이 많이 나와서 갈고리 스턴 기술과 돼재앙으로 낙사 시켜서 로드호그가 대활약할 수 있다.",
          },
          {
            "id": "pharah",
          },
          {
            "id": "winston",
          },
          {
            "id": "reaper",
            "note": "성소 구역의 경우 나머지 두 구역에 비해 운용하기 힘들다.",
          },
          {
            "id": "soldier-76",
          },
        ],
        "defense": [
          {
            "id": "cassidy",
          },
          {
            "id": "tracer",
          },
          {
            "id": "zenyatta",
          },
          {
            "id": "zarya",
          },
          {
            "id": "lucio",
          },
          {
            "id": "orisa",
            "note": "성소 한정",
          },
        ],
      },
      {
        "id": "리장-타워",
        "name": "리장 타워",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%9E%A5%20%ED%83%80%EC%9B%8C",
        "image":
          "https://i.namu.wiki/i/g-BoYIVbCzLOJLjVX4yB2EMFIWuY2y92jscKc7PAYptEBrsChpzxWfH_Y4VIEYIMpul1uNHt6h3YwVvXiPNwQbJvYxNriYm4k5mLCakmqIlb88Kyj7mTx7ZRfK_2BRrjW5y9942J3Ezr1u7g6LDJ4g.webp",
        "attack": [
          {
            "id": "winston",
            "note": "정원, 야시장 한정",
          },
          {
            "id": "reinhardt",
            "note": "관제센터 한정",
          },
          {
            "id": "reaper",
          },
          {
            "id": "junkrat",
            "note":
              "가장 상성 좋은 맵은 관제센터. 관제센터의 힘싸움은 대개 정면 1.5층에서 딜교를 하는데, 이때 정크랫이 나온다면 방벽싸움 필승 확정이다.",
          },
        ],
        "defense": [
          {
            "id": "lucio",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "zarya",
          },
          {
            "id": "pharah",
            "note": "정원 맵에서는 필수픽 수준의 위상을 보인다.",
          },
          {
            "id": "mei",
          },
        ],
      },
      {
        "id": "부산",
        "name": "부산",
        "page":
          "https://namu.wiki/w/%EB%B6%80%EC%82%B0(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/OkJFKP5NtG9vyhDRYfqogPZvoTbgo3YpmVBTqKrQzOe6VbM9WixBO5_JOPDru4-E46GSUUv2S3fHtcjxcoKBhwVIbhb9j_OFL7JXS9bq2lcIdQxrOFFp7JIed-DGxbsT2ACTBp112i6WfwUjJsEQrw.webp",
        "attack": [
          {
            "id": "doomfist",
          },
          {
            "id": "symmetra",
            "note":
              "사찰맵 한정, 사각으로 된 북에 포탑을 붙이면 적팀 입장에선 부수기 까다로워질 뿐더러, 상대팀쪽 벽쪽에 포탑을 깔면 돌연사 시킬 수 있다.",
          },
          {
            "id": "ana",
            "note":
              "시내맵과 기지맵 한정, 거점 위로 형성된 높은 지대에서 힐밴을 넣거나 아군을 치유하기에 좋다.",
          },
          {
            "id": "widowmaker",
            "note":
              "특히 기지맵은 지면 간 고저차가 특히 심하다보니, 위도우메이커를 잡으러 가는데 시간이 많이 걸려 견제가 까다롭다. 이건 시내맵도 마찬가지.",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "ashe",
            "note":
              "저격하기 쉬운 고지대가 있는 시내맵이나 기지 구간은 애쉬가 지원 사격을 수월하게 할 수 있는 전장이며, 특히 부산 기지 거점은 탁 트인 구간이라 각만 잘 맞추면 궁극기인 밥이 말뚝딜로 견제가 수월한 구간이기도 하다.",
          },
        ],
        "defense": [
          {
            "id": "junkrat",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "lucio",
            "note":
              "거점이 좁다보니, 루시우의 힐케어가 상당히 용이하며 밀쳐내기를 통한 견제도 효과가 크다. 그리고 사찰맵을 제외한 나머지 맵들은 거점과 낙사구간이 멀지 않아, 어그로를 끈 다음 적군을 낙사시킬 수 있는 전략도 가능해 보인다.",
          },
          {
            "id": "wrecking-ball",
          },
          {
            "id": "brigitte",
          },
          {
            "id": "ana",
          },
        ],
      },
      {
        "id": "사모아",
        "name": "사모아",
        "page":
          "https://namu.wiki/w/%EC%82%AC%EB%AA%A8%EC%95%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/_YSgWOG7Uz9QZ-H4JmJbS07Hb5fu8Nl6t7gjFtGhcYUuiqlAw0g7ePZDYP2KHgJynau_Pk4YJCyvJYfCtK7N0O17jpTtDjw-Uw-WPRaWHfuQW0BtWVVqs7AMiMq4qRotSbcxMiseGlR8RA1I16wVVQ.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "오아시스",
        "name": "오아시스",
        "page":
          "https://namu.wiki/w/%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/JfWL2cZ6Pdp7vWIsNnuM3Qe2hxHER3Fn-O92z1LrvAZXteWF5cmPllQyzYoePNSDTU_dSNZukzAZuKsP4UENc0Yf2RA3fq5aYO7-59Ch7tGMm_QFsRSN6MApo-pNjgWpIL2M2ycCRhDZW_DhgH0Sxw.webp",
        "attack": [
          {
            "id": "winston",
          },
          {
            "id": "d-va",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "genji",
          },
          {
            "id": "tracer",
          },
          {
            "id": "pharah",
          },
          {
            "id": "mercy",
            "note":
              "특히 도심 맵은 평소 파르시를 기용하지 않는 팀이라도 양쪽 모두 파르시 조합이 나올 정도로 강세를 보인다.",
          },
        ],
        "defense": [
          {
            "id": "zarya",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "cassidy",
            "note": "좁은 진입로가 많아서 여기저기 튀어나와 끊어먹기 좋다.",
          },
          {
            "id": "reaper",
          },
        ],
      },
      {
        "id": "일리오스",
        "name": "일리오스",
        "page": "https://namu.wiki/w/%EC%9D%BC%EB%A6%AC%EC%98%A4%EC%8A%A4",
        "image":
          "https://i.namu.wiki/i/_GAQoHCmY_MqKVq0OXgV25bu4WxLo8L4Ul2q9HNqLaA8nNzppL0_tXIYaxmK4fkead6CxMclwdQ8DBkwn_xns0vfZgs9IWwENXzZLy9Wc3s45TIOGYoUDCn57CeSsYkqVN0JHilmbXQzFDLPPM5wjQ.webp",
        "attack": [
          {
            "id": "pharah",
          },
          {
            "id": "reaper",
          },
          {
            "id": "winston",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "d-va",
            "note":
              "폐허맵과 우물맵은 거점이 넓어서 궁 대박을 기대할 수 있는데다가, 우물은 우회로와 고지대가 많아서 디바가 활약하기 좋다. 등대에선 특별한 궁대박을 기대하기는 어려우나 거점 개싸움시 빛을 발한다. 부스터 넉백으로 낙사대박을 기대할 수 있고, 거점이 폐쇄되어있어서 동료만 받쳐준다면 혼자서 무쌍을 찍을 수 있다.",
          },
          {
            "id": "orisa",
          },
        ],
        "defense": [
          {
            "id": "tracer",
            "note":
              "특히 가장 활약하는 맵은 폐허. 다른 두 맵에 비해서 적진으로 가는 길이 매우 개방적이기 때문에 거점을 점령한 뒤 적진 깊숙히 쳐들어가서 거점을 점령하러 오는 적들이 거점으로 가는 것을 방해하기 좋다.",
          },
          {
            "id": "winston",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "soldier-76",
            "note": "우물맵 한정",
          },
          {
            "id": "lucio",
            "note":
              "우물과 등대에서 거점으로 오는 적들을 낙사하기 좋아서 여기서만큼은 루시우를 하는 사람도 있고, 폐허도 두 맵만큼은 아니지만 거점 바깥쪽 대형 힐팩에서 낙사를 노려볼 수 있고, 기둥이 많아 벽타기를 현란하게 펼칠 수 있어서 좋다.",
          },
          {
            "id": "orisa",
          },
        ],
      },
    ],
  },
  {
    "id": "호위",
    "label": "호위",
    "color": "#f2994a",
    "maps": [
      {
        "id": "66번-국도",
        "name": "66번 국도",
        "page": "https://namu.wiki/w/66%EB%B2%88%20%EA%B5%AD%EB%8F%84",
        "image":
          "https://i.namu.wiki/i/r6LSCgBZZAcDiG34fOcZr5g0c3dJpEw4C0DsHqtouZaStd_yMCsaM7kVd5roiDG5aQJ78zbLpyq3m608MNrcdt31sHVayLt4DG3yareAyD7w2bq58k-GjBb-r8HvxVsGsxECXcLkRihYDlkTuM951Q.webp",
        "attack": [
          {
            "id": "pharah",
            "note": "3차 경유지 제외.",
          },
          {
            "id": "d-va",
            "note":
              "주유소같은 2층 포지션을 잡고 싸우면 딜교가 편해지고, 3차 경유지 이후로 디바궁은 정말로 피하기 힘들다.",
          },
          {
            "id": "sombra",
            "note":
              "힐팩 위치가 적절하여 해킹을 통해 얻을 수 있는 이익이 상당하다.",
          },
          {
            "id": "zarya",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "brigitte",
          },
          {
            "id": "junkrat",
            "note":
              "정크랫은 상대보다 위에 있거나 좁은 통로에서 유리한데, 초반 컨테이너 지역을 제외하면 공격군은 올라가 있는 지형이 많기 때문이다. 옆 통로로 새어나가 화물 목적지에서 기다리고 있는 수비군을 위에서 족칠 수 있다.",
          },
        ],
        "defense": [
          {
            "id": "cassidy",
            "note":
              "맵 자체와의 조합뿐만 아니라 안티 딜러로서 우회로를 통해 습격하는 공격군을 상대하기 좋다.",
          },
          {
            "id": "ashe",
            "note":
              "캐서디와 비슷한 이유지만 이쪽은 주유소나 캐년 지형 2층에 자리잡고 지정사수로서 역할이 유용하다.",
          },
          {
            "id": "mei",
          },
          {
            "id": "bastion",
          },
          {
            "id": "moira",
          },
          {
            "id": "zenyatta",
          },
          {
            "id": "doomfist",
            "note": "첫번째 경유지 한정",
          },
          {
            "id": "torbjorn",
          },
          {
            "id": "junkrat",
            "note":
              "1경유지 지점 기찻길 올라가는곳에 위치해있으면 피해도 없으면서 딜은 잘 들어가는 최고의 자리이다.",
          },
        ],
      },
      {
        "id": "감시-기지-지브롤터",
        "name": "감시 기지: 지브롤터",
        "page":
          "https://namu.wiki/w/%EA%B0%90%EC%8B%9C%20%EA%B8%B0%EC%A7%80:%20%EC%A7%80%EB%B8%8C%EB%A1%A4%ED%84%B0",
        "image":
          "https://i.namu.wiki/i/ydUd_ncMzdGUylBIdrDL7HwjVit24R5d4Hz7m_QanqS23wxA1cIbsLNAvbP3hFzrixTluN_61kb5KMgevx3sszzI1VVh5Ik8JfC_-YRCsEfbVl4Yo9HS4nbMG_jU4S0DbhkESXwFpfpEeIfDpd8C1A.webp",
        "attack": [
          {
            "id": "winston",
            "note":
              "2층이 많아 꼭 돌진 조합이 아니더라도 웬만하면 윈스턴이 기용되는 맵이다. 수비 때도 마찬가지",
          },
          {
            "id": "genji",
            "note":
              "2층구간이 많기 때문에 비슷한 암살 우회 영웅인 트레이서보다 쏠쏠하다. 하지만 그렇다고 이 맵에서 트레이서가 꼭 쓸만하지 않다는 것은 아니다.",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "d-va",
            "note":
              "엄폐물이 적기 때문에 적 입장에선 자폭을 피하기 어렵다. 특히 3번째 경유지 구간. 물론 자폭이라는 궁극기가 킬을 노리고 쓰는 궁극기는 아니긴 하지만 말이다.",
          },
          {
            "id": "baptiste",
          },
        ],
        "defense": [
          {
            "id": "sigma",
            "note": "최종 경유지에서 우주방어가 가능하다.",
          },
          {
            "id": "winston",
          },
          {
            "id": "widowmaker",
            "note":
              "저격할만한 2층 포인트가 많으며 여차하면 도망갈만한 곳이 많다.",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "junkrat",
            "note":
              "좁은 우회로가 많아 돌아오려는 적을 쉽게 한명씩 잡을 수 있다. 특히 시작 지점 근처의 커브길과 2번째 경유지 구간. 하지만 실내구간을 통과하고 나서 마지막 구간의 언덕길을 올라온 후라면 빨리 바꿔주는 게 낫다.",
          },
        ],
      },
      {
        "id": "도라도",
        "name": "도라도",
        "page":
          "https://namu.wiki/w/%EB%8F%84%EB%9D%BC%EB%8F%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/_obcPRiM5IYb7MvegnQOSm7gyhZRSV0D5tQCs4NOPLzfn0vB7rykz_zR70Rv3Az4NFIdV1uZFF_bBT3kIbrhrRCoKYIGmt9U5wSnNJXsdibLyOT37qok4zigmRKT_PLxeV5Qn3O-YaiZF3HG_YIKHA.webp",
        "attack": [
          {
            "id": "junkrat",
          },
          {
            "id": "reaper",
          },
          {
            "id": "lucio",
          },
          {
            "id": "winston",
            "note": "2경유지까지",
          },
          {
            "id": "reinhardt",
            "note": "3경유지 이후",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "d-va",
            "note":
              "최종 목적지 근처는 엄폐물이 정말 적어서 메카가 시작부터 날라오는 것을 발견한 게 아닌 이상 자폭을 거의 피하기 힘들다.",
          },
          {
            "id": "sombra",
          },
          {
            "id": "bastion",
            "note": "2차 경유지 전까지. 화물 위 한정.",
          },
          {
            "id": "hanzo",
            "note": "최종 경유지 공격 한정",
          },
        ],
        "defense": [
          {
            "id": "roadhog",
          },
          {
            "id": "junkrat",
          },
          {
            "id": "pharah",
          },
          {
            "id": "mei",
          },
          {
            "id": "doomfist",
          },
          {
            "id": "bastion",
          },
          {
            "id": "mercy",
          },
          {
            "id": "genji",
          },
          {
            "id": "moira",
          },
          {
            "id": "hanzo",
            "note":
              "공격팀 입구 앞 건물에서 음파 화살로 적들을 볼 수 있고, 게임이 시작되면 위에서 견제할 수도 있다.. 꽤 밀렸을 때에도, 2차 경유지 옆 2층 에서 다가오는 화물을 견제할 수도 있다.",
          },
        ],
      },
      {
        "id": "리알토",
        "name": "리알토",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%95%8C%ED%86%A0",
        "image":
          "https://i.namu.wiki/i/NwdtYwq6pr83_MyMK0wowneNsqkFEicx1iU4LeviBsnXS6EsZ23rjJ5rUSezVejmSulWkhREFNRxHeI04W71eXhaxwR-MbrDamW8IyszCnAG5oHCcPz6VTSwM2t6_MGVHTpxUq9Yo7a9cjp2wNZs8Q.webp",
        "attack": [
          {
            "id": "cassidy",
          },
          {
            "id": "reinhardt",
          },
          {
            "id": "orisa",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "brigitte",
          },
          {
            "id": "lucio",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "pharah",
            "note":
              "1, 2 경유지 한정. 건물들과 낙사 지점들이 많아 엄습하기에 좋다.",
          },
        ],
        "defense": [
          {
            "id": "junkrat",
          },
          {
            "id": "zarya",
          },
          {
            "id": "orisa",
            "note":
              "오리사의 특성 상 버티기에 능한 터라 왕의 길만큼은 아니어도 골목 구간 등 좁은 곳이 제법 있는 터라 오리사가 수비하기에는 유리한 곳이 많다.",
          },
          {
            "id": "reaper",
          },
          {
            "id": "mercy",
          },
          {
            "id": "moira",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "ana",
          },
          {
            "id": "sigma",
          },
          {
            "id": "genji",
          },
        ],
      },
      {
        "id": "샴발리-수도원",
        "name": "샴발리 수도원",
        "page":
          "https://namu.wiki/w/%EC%83%B4%EB%B0%9C%EB%A6%AC%20%EC%88%98%EB%8F%84%EC%9B%90",
        "image":
          "https://i.namu.wiki/i/bCZIBmxQXykJHWUurpDqc8BXKlcoSK70-c1c2PyJOfChYKdHtEYyqbpr9g3z8-rdQ-YgxuPgmrv2wbRtKa3OiNBOZsR1mjuxxPM_zuOuCO4l98Ax1xv9G1Dh-jdUmZOGEwM9QhO-hgtoe6tuL7WzUw.webp",
        "attack": [
          {
            "id": "sigma",
          },
          {
            "id": "winston",
          },
          {
            "id": "d-va",
          },
          {
            "id": "genji",
          },
          {
            "id": "doomfist",
          },
        ],
        "defense": [
          {
            "id": "sigma",
          },
          {
            "id": "orisa",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "d-va",
          },
          {
            "id": "sombra",
          },
          {
            "id": "hanzo",
          },
        ],
      },
      {
        "id": "서킷-로얄",
        "name": "서킷 로얄",
        "page": "https://namu.wiki/w/%EC%84%9C%ED%82%B7%20%EB%A1%9C%EC%96%84",
        "image":
          "https://i.namu.wiki/i/GSf560vF_JXAlYuL08i1Pe5TfHjMh1-eX4IW6kbjapuAZDA0WT8PxUombBLhKSlf5LBeTLi-CPJb57Y-ibvO-QOMaQxzdiSENpyrQk9_HlxxVpoo-Hk7ntymWxBSNZD6GChS7sbffeWUZnmtE91sFw.webp",
        "attack": [
          {
            "id": "sigma",
          },
          {
            "id": "genji",
          },
          {
            "id": "pharah",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "d-va",
            "note":
              "2층 또는 그 이상의 다층 구조인 구간이 많은 데다가, 좁은 구조가 많아서 매트릭스로 활약하기도 좋고, 무엇보다 이 맵 단골인 위도우메이커 등의 저격수들 견제용으로 유용하다. 2경유지 헤어핀 구간은 고저차가 커서 자폭을 쓰기도 용이하다. 다만 실내로 진입하는 최종 목적지 구간은 입구를 제외하면 길이 좁아서 역으로 자폭과의 상성이 최악이다.",
          },
          {
            "id": "juno",
            "note":
              "그동안 프로 경기에서 서킷 로얄은 위도우와 파라, 시그마를 이용한 포킹 조합이 초강세를 보였다. 하지만 주노 출시 이후로는 라마트라+메이+주노를 활용한 러쉬 조합이 대세를 이뤘다.",
          },
        ],
        "defense": [
          {
            "id": "sigma",
          },
          {
            "id": "genji",
          },
          {
            "id": "pharah",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "juno",
            "note":
              "그동안 프로 경기에서 서킷 로얄은 위도우와 파라, 시그마를 이용한 포킹 조합이 초강세를 보였다. 하지만 주노 출시 이후로는 라마트라+메이+주노를 활용한 러쉬 조합이 대세를 이뤘다.",
          },
        ],
      },
      {
        "id": "쓰레기촌",
        "name": "쓰레기촌",
        "page": "https://namu.wiki/w/%EC%93%B0%EB%A0%88%EA%B8%B0%EC%B4%8C",
        "image":
          "https://i.namu.wiki/i/O-MhEMTPFWQjqT8eUI8UQIRF-NLwSKiie1sVDXbUvwpp3aALdyUhir2kaf954SDUOEzOR0tktAWgmpDr4ZEy-jBWDtrv379pE6IxJ7a2THF-FQMLncmtlznhULr574bde5cAT1u7wb2e5FM5jJuasw.webp",
        "attack": [
          {
            "id": "d-va",
          },
          {
            "id": "sigma",
          },
          {
            "id": "ashe",
          },
          {
            "id": "pharah",
          },
          {
            "id": "widowmaker",
          },
        ],
        "defense": [
          {
            "id": "widowmaker",
          },
          {
            "id": "sigma",
          },
        ],
      },
      {
        "id": "하바나",
        "name": "하바나",
        "page":
          "https://namu.wiki/w/%ED%95%98%EB%B0%94%EB%82%98(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/qyQh75lfvv34yiKAFpQiGqUu-bLXn_ShIpTf5Zm2VcsDQXnaBUEN0CtXCriyXYy4cUXnWez8B7J13m7mdJJ6qlTUhhiYvyoSzbZWvx547cjGFWEKuljzVHE0RBOYuBZmhFuDJlhBBVlzYJuU9KVIsw.webp",
        "attack": [
          {
            "id": "sombra",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "sigma",
          },
          {
            "id": "wrecking-ball",
            "note":
              "화물 이동 경로는 증류소 내부를 제외하면 대부분 넓게 펼쳐져 있고, 주변에는 샛길이 많아 레킹볼이 활개를 치며 적진을 흩어놓기 좋다. 증류소 역시 샛길이 많은 편이라 야외 지역보단 아니더라도 치고 빠지기가 어렵지 않다.",
          },
        ],
        "defense": [
          {
            "id": "widowmaker",
            "note":
              "2층구간이 여럿 존재하고, 이들 대부분이 엄폐물과 벽을 동반하고 있는, 말 그대로 위도우메이커에게 정말 최적의 환경을 지닌 맵이라 봐도 무방한 맵이다. 잘하는 위도우메이커를 막지 못하면 화물을 얼마 밀지도 못하고 게임이 터질 수도 있다.",
          },
          {
            "id": "sigma",
          },
          {
            "id": "wrecking-ball",
          },
        ],
      },
    ],
  },
  {
    "id": "혼합",
    "label": "혼합",
    "color": "#9b51e0",
    "maps": [
      {
        "id": "눔바니",
        "name": "눔바니",
        "page": "https://namu.wiki/w/%EB%88%94%EB%B0%94%EB%8B%88",
        "image":
          "https://i.namu.wiki/i/3Chf4FGBiJnjjn00vuPNMeaeoB-bySrOR0W2xDSeQFjH38OI22GBRdCd2LfbmPT2ycdfLfBOKplZt0QoBRgL6uoztfNPpdfPbyL0a07kTxMDjB7cSeTrmRDzQGK3OCdCEzxXw9TsDQPhrdZ6DvUNHA.webp",
        "attack": [
          {
            "id": "moira",
          },
          {
            "id": "genji",
          },
          {
            "id": "zarya",
          },
          {
            "id": "reaper",
          },
          {
            "id": "d-va",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "reinhardt",
          },
          {
            "id": "brigitte",
          },
          {
            "id": "ashe",
          },
          {
            "id": "sombra",
          },
        ],
        "defense": [
          {
            "id": "torbjorn",
            "note":
              "대회에서도 자주 등장할 정도로 토르비욘이 활약하기 좋은 맵이다.",
          },
          {
            "id": "bastion",
          },
          {
            "id": "mei",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "junkrat",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "symmetra",
          },
          {
            "id": "sigma",
            "note":
              "A거점 지하나 2층의 좁은 길로 들어올 경우 평타로 궁게이지를 쏠쏠하게 채울 수 있다.",
          },
          {
            "id": "d-va",
          },
          {
            "id": "orisa",
          },
        ],
      },
      {
        "id": "미드타운",
        "name": "미드타운",
        "page": "https://namu.wiki/w/%EB%AF%B8%EB%93%9C%ED%83%80%EC%9A%B4",
        "image":
          "https://i.namu.wiki/i/ixhcSlVsLgQvVVhhCTYoEweVHsD2A1dBACC3yZ-eoB_2_L-QUjVRIHWoKcE10rZe_MJYdWEaC05uhZ0xNzcuYDuO2r7h1vTgHAl-Xy3HrgvKSQ7o08wvYgnGGQocqrWSFjlqh3nCrhW-GevkrlRYKQ.webp",
        "attack": [
          {
            "id": "tracer",
          },
          {
            "id": "sojourn",
          },
          {
            "id": "winston",
          },
          {
            "id": "orisa",
          },
        ],
        "defense": [
          {
            "id": "d-va",
          },
          {
            "id": "doomfist",
          },
          {
            "id": "torbjorn",
          },
          {
            "id": "genji",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "cassidy",
          },
        ],
      },
      {
        "id": "블리자드-월드",
        "name": "블리자드 월드",
        "page":
          "https://namu.wiki/w/%EB%B8%94%EB%A6%AC%EC%9E%90%EB%93%9C%20%EC%9B%94%EB%93%9C",
        "image":
          "https://i.namu.wiki/i/TuFoV5EFYNVIrESeptkNkDi3hLZKmfAt6SeAxLEvON8wPVNS4lAYIPkZ29Q2JX4_M2-UxF4623ltR-H3j9EM_M7JvzJW-H6dltZIHIFJxufrghuyp8t7BGsNj076AMQaF04GszUDJLGG_mSabI7d6w.webp",
        "attack": [
          {
            "id": "d-va",
          },
          {
            "id": "mercy",
          },
          {
            "id": "zarya",
          },
          {
            "id": "wrecking-ball",
          },
        ],
        "defense": [
          {
            "id": "bastion",
          },
          {
            "id": "pharah",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "junkrat",
          },
        ],
      },
      {
        "id": "아이헨발데",
        "name": "아이헨발데",
        "page":
          "https://namu.wiki/w/%EC%95%84%EC%9D%B4%ED%97%A8%EB%B0%9C%EB%8D%B0",
        "image":
          "https://i.namu.wiki/i/Hla-iQKeKxIJMpHsJnk2SErrDN8eCiZfGk9CeK2eqUVlOxxXk2896HnzzLMjq-WdaMGutmD71Xcyp9KOHOUN_BpOxX6l6hlAbse4rnG1b7YRL06LT4nyi3EmZgDlLYja6fGyaHfYVzKHNxf7pa6O6w.webp",
        "attack": [
          {
            "id": "reinhardt",
          },
          {
            "id": "lucio",
          },
          {
            "id": "pharah",
          },
          {
            "id": "sombra",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "wrecking-ball",
          },
          {
            "id": "d-va",
            "note":
              "A거점 수비시 2층을 장악하여 싸우는 플레이로 상대의 집중을 분산시킬 수 있고, 바로 거점으로 넘어가는 어그로성 플레이도 가능하며, 궁도 생각보다 피하기 어렵다. 그 이후 성을 끼고 싸우는 플레이는 동료 하나만 받쳐준다면 디바의 세상. 마지막 경유지 이후 디바 궁은 정말로 피하기 어렵다.",
          },
          {
            "id": "zarya",
            "note":
              "A거점 까지 한정. 특히 제1경유지 부터는 도라도와 더불어 자리야를 절대로 쓰면 안되는 맵의 대표 주자로 뽑힌다. 전형적인 2층 맵이기 때문에 여기서 자리야를 하면 2층에서 프리딜하는 적 영웅들에게 아군이 하나씩 털려나가다가 자리야 혼자만 남은후 마저 죽는 그림이 계속 연출된다.웃긴건 자리야 자체는 생존이 나쁘지 않은 맵이기 때문에 난 잘하는데 팀원이 자꾸 죽네? 라고 착각하면서 서서히 말라 죽는 맵이다.",
          },
          {
            "id": "brigitte",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "winston",
          },
        ],
        "defense": [
          {
            "id": "torbjorn",
          },
          {
            "id": "doomfist",
            "note":
              "안그래도 아이헨발데는 둠피스트가 언제든지 도망칠 수 있는 고지대와 엄폐물, 힐팩이 많은 편이라 둠피스트가 좋은데, 만약 플레이어가 둠피스트 로켓펀치 슈퍼점프를 능숙하게 할 줄 알거나 지붕을 탈 줄 아는 경우, 정말 둠피스트가 날아다닌다. 단순히 둠피스트가 좋다는 뜻이 아니라 진짜로 날아다닌다. 맵에 둠피스트가 탈 수 있는 지붕이 매우 많기 때문.",
          },
          {
            "id": "hanzo",
            "note":
              "충차로 문을 부수는 경유지 앞 돌다리의 구간이 좌우폭이 좁고 길며 곧이어 이어지는 성 내부가 좁고 엄폐물이 많아 용의 일격을 피하기 힘들기 때문에 음파화살과 갈래화살의 성능을 제대로 살릴 수 있다. 공격팀의 문과 거점 앞 굴다리까지의 길의 꺾여지는 부분에 화살을 뿌려놔도 꽤나 쏠쏠한 이득을 볼 수 있다. 정크랫과 비슷한 이치.",
          },
          {
            "id": "ana",
          },
          {
            "id": "symmetra",
            "note":
              "우선 기본적으로 아이헨발데는 좁은 입구가 많아 포탑을 몰아서 짓기 좋은 자리가 많고, 고지대 역시 많아서 고지대에 순간이동기를 설치하면 순간이동기를 부수러 오는 것도 쉽지 않으며, 유저들의 발길이 잘 닿지 않는 은밀한 장소도 많아서 찾기조차 어렵다. 특히 순간이동기를 높은 곳에 깔면 탄 아군은 고지대로 단숨에 올 수 있는데, 이럴 경우 파라나 위도우메이커 같이 고지대에서 전투하는 영웅은 리스폰 되자마자 이동 스킬을 뺄 필요도 없이 임무를 수행할 수 있고, 겐지나 리퍼처럼 기습을 하는 영웅은 리스폰 되자마자 고지대에서 떨어지며 기습을 할 수 있다. 만약 아군들이 떼죽음을 당했다면 10초 뒤 하늘에서 아군이 빗발치는 광경을 보게 될 것이다.",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "pharah",
          },
          {
            "id": "junkrat",
            "note":
              "정크랫이 상위 티어에서 픽되는 것은 무지 드물다지만 이 맵에서는 그렇지 않을 정도다. 좁은 입구가 많다 보니 유탄 스패밍으로 견제하기 딱 좋고, 널려있는 고지대들 덕분에 죽이는 타이어를 쓰기에 최적이다. 스패밍의 효과가 엄청나서 궁극기도 빨리 찬다. 이 맵에서 제일 먼저 궁극기를 쓰는 캐릭터는 거의 정크랫. 폭탄 받아라를 정말 질리도록 들을 수 있다. 또한 B와 C 사이에 보이는 수많은 덤불 안에 정크렛의 감정표현 '느긋하게'를 사용해 숨어서 화물을 막을 수도 있다.",
          },
          {
            "id": "roadhog",
          },
          {
            "id": "mercy",
          },
          {
            "id": "zenyatta",
          },
          {
            "id": "reaper",
          },
          {
            "id": "tracer",
          },
          {
            "id": "genji",
          },
          {
            "id": "bastion",
          },
          {
            "id": "orisa",
            "note": "A에서는 별로 쓸모없고, B와 C에서 위력이 발휘된다.",
          },
          {
            "id": "mei",
            "note":
              "A거점에 길이 추가로 생기는 패치 이전에는 성문을 넘어온 적을 빙벽으로 끊어먹는 것으로 악명높았으며, 마지막 경유지 이후 빙벽으로 하나하나 끊어먹기가 매우 좋다.",
          },
        ],
      },
      {
        "id": "왕의-길",
        "name": "왕의 길",
        "page": "https://namu.wiki/w/%EC%99%95%EC%9D%98%20%EA%B8%B8",
        "image":
          "https://i.namu.wiki/i/4E7eb1Ky8kuxJkcey-DVy9V7p2dQXG-cbuHW7gcljTA3P3H6FsbfXPQca1-CPzRQ_Cd2OyKQsqRQh8TLCUNv_zrcdl7tbWwwTc7IG49lqbHkkY4qSTQ4rCldIWQFKU6oxW36UQOZvq0dU29PRrOAeg.webp",
        "attack": [
          {
            "id": "reinhardt",
          },
          {
            "id": "zarya",
          },
          {
            "id": "d-va",
            "note":
              "부스터를 통한 기동력이 좋고, 좁은 곳에서의 화력 집중과 교전이 잦은 맵 특성 상 방어 매트릭스가 빛을 발하는 구간이 많다. 게다가 샛길들이 많다 보니 그 쪽 루트로 돌아서 부스터에 이은 기습 융합포+마이크로 미사일 콤보로 한 명을 잘라내는 정도는 누워서 껌 먹는 수준으로 쉬운 편. 다만 A거점이나 마지막 화물 운송 거점처럼 드넓은 구간 몇 군데를 제외하면 가뜩이나 협소한 지형이 이 맵의 80~90%를 차지하기 때문에 그로 인해 궁각이 잘 나오지 않아 궁과의 상성은 최악이라는 것을 유의해야 한다. 디바의 궁은 개활지에서 빛을 발하는데, 디바의 궁을 포착하는 순간 샛길이나 기타 도피하기 좋은 구간으로 돌아서 피하는 경우가 많은 터라.",
          },
          {
            "id": "hanzo",
            "note":
              "샛길이 많고 골목이 좁아 중거리 저격, 음파화살을 효과적으로 쓸 수 있다.",
          },
          {
            "id": "pharah",
          },
          {
            "id": "winston",
          },
          {
            "id": "ana",
            "note":
              "맵이 직선형이라 저격을 하기에 좋고, 나노강화제를 받는 영웅들도 시너지가 매우 좋다. 특히 아나를 주픽으로 쓰는 류제홍의 활약이 두드러지는 전장이라 '제홍의 길'이라는 별명까지 있을 정도.",
          },
          {
            "id": "bastion",
            "note":
              "화물 막바지 구간을 뚫을 때 깜짝 공바스로 강력한 후방 화력 지원에 도움이 된다.",
          },
          {
            "id": "widowmaker",
            "note":
              "가히 위도우메이커와 최고의 상성을 자랑하는 맵이다. A거점 점령전에서는 리스폰 지역 내부의 2층 고지대에서 반격 당할 걱정도 없이 마음껏 저격을 할 수 있고, 그 후에도 숨어서 저격을 하기 좋은 고지대가 널려 있다. 그러나 당연한 이야기지만 에임 실력 없이 맵 상성만 믿고 픽해서는 안된다.",
          },
          {
            "id": "moira",
            "note": "길이 좁고 샛길이 많아 힐구슬각 대박내기 딱좋다.",
          },
          {
            "id": "wrecking-ball",
            "note":
              "딜러중에 위도우맵이라면 탱커중엔 레킹볼맵이다. 맵 시작부터 끝까지 좁고 높은건물에 샛길 투성이라 갈고리각이 엄청 많다. A거점만 해도 몬다타 동상앞에서 대치할 때가 많은데 레킹볼이 억지로 밀고 들어가서 셋길로 빠져 뒷라인부터 부셔주면 레킹볼 하나만으로 순식간에 밀려버린다. 화물 이동 루트도 좁은 길목이라 지뢰한번만 깔아줘도 최소 2~3명은 터져나간다.",
          },
          {
            "id": "junker-queen",
            "note":
              "잦은 교전에 유리한 정커퀸에게 좋은 맵이다. 좁은 공간도 많아 스킬샷을 다수에게 맞추기도 좋은 편. 특히 궁극기의 경우 한번 쓱 긁어주면 2~3명은 궁극기에 당해 있는 경우가 많다.",
          },
          {
            "id": "cassidy",
            "note":
              "화물 나오는 곳 위쪽 2층에서 궁극기를 쓰면 최소 3인궁 이상은 한다.",
          },
        ],
        "defense": [
          {
            "id": "widowmaker",
            "note":
              "고지대로 이동하는 스킬이 없으면 아예 올라올 수 없는 구간이 많아 견제 받지 않고 활약하기 좋다.",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "tracer",
          },
          {
            "id": "doomfist",
          },
          {
            "id": "reaper",
          },
          {
            "id": "junkrat",
            "note":
              "화물 맵 중에서는 정크랫과 가히 최고의 상성을 자랑한다. 화물이 지나는 길 자체가 전체적으로 좁은 편이고 더군다나 좁은 샛길과 골목길, 쥐구멍이 많아 유탄과 덫이 최고의 효율을 발휘한다. 충격 지뢰로 올라가서 유탄 프리딜을 넣기 좋은 고지대도 많다. 2017 오버워치 월드컵 예선에서 황연오 선수가 정크랫으로 그 효용성을 보여주었다.",
          },
          {
            "id": "bastion",
            "note":
              "들키지 않고 적에게 화력을 투사할 수 있도록 실내와 바깥이 연결된 지점 및 창문이 많다. 그리고 최종 거점 화물 비비기에서 의외로 상당한 효용을 보인다.",
          },
          {
            "id": "torbjorn",
            "note":
              "A거점 한정. 위도우가 높은 확률로 나오는 맵이니 거점 옆, 뒤쪽에 포탑을 짓는 것이 좋다",
          },
          {
            "id": "wrecking-ball",
            "note":
              "공격때보단 제한되는 게 많지만 그래도 끝내주는 맵상성은 어디안가서 수비 때는 무리해서 뛰쳐나가지만 않는다면 웬만해선 완막하거나 화물 나오고 얼마 안 되는 지점에서 막아낸다.",
          },
        ],
      },
      {
        "id": "파라이수",
        "name": "파라이수",
        "page": "https://namu.wiki/w/%ED%8C%8C%EB%9D%BC%EC%9D%B4%EC%88%98",
        "image":
          "https://i.namu.wiki/i/nhXNcEpyIC22w1zHjXF-qzu8xOP_Rz5X0y5-I7JkfRTonVwL6Jj1NWJQkTQ6Juwb_2IqRAnrTBALQuuVCytkIbQO7JCJ8afDPxP31LU4uFmNOjFatHrJCDUpv7iyENn1Al1jnv7kGe_L0AJbY8IpjA.webp",
        "attack": [
          {
            "id": "winston",
          },
          {
            "id": "d-va",
          },
          {
            "id": "tracer",
          },
        ],
        "defense": [
          {
            "id": "ana",
          },
          {
            "id": "reaper",
          },
          {
            "id": "brigitte",
          },
        ],
      },
      {
        "id": "할리우드",
        "name": "할리우드",
        "page":
          "https://namu.wiki/w/%ED%95%A0%EB%A6%AC%EC%9A%B0%EB%93%9C(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/nV12TkVVQ8hCGuyZ4i35ZEO0Pa3TSgXRACgBk_wgDShcoUGpolRN6RgJzRKeE7u8fd6yWcBLZsMfXvrhP0xMh0-_FikFMECbHTOQb4A2I6g00Sz2PILsmc98AhCOXoqGiLFQhrSwezIfXJ3FBvDOWg.webp",
        "attack": [
          {
            "id": "d-va",
            "note":
              "말 그대로 디바를 위한 맵이다. A거점 공격 시 부스터로 2층을 장악하여 싸우면 동료들의 진입이 쉬워지고, 거점이 넓어서 궁을 피하기 까다롭다. A거점과 첫 번째 경유지를 잇는 촬영세트장에서 싸우면 고지대를 점령하여 상대 딜러나 라인의 뒤를 노리자. 마지막 경유지까지는 2층과 옆길을 마크하고, 화물이 다다를 때쯤 궁을 날리면 승리로 끝나있을 것이다.",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "genji",
            "note":
              "거점과 실내 촬영장을 잇는 운송로가 매우 좁고 뒤치기하기 적합한 환경이라 용검 대박을 노리기 좋다.",
          },
          {
            "id": "reinhardt",
          },
          {
            "id": "winston",
          },
          {
            "id": "soldier-76",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "sombra",
          },
        ],
        "defense": [
          {
            "id": "torbjorn",
          },
          {
            "id": "d-va",
          },
          {
            "id": "hanzo",
            "note":
              "어중간한 고지대가 많아 위치선점에 용이한 데다가 좁고 긴 통로가 많아 용의 일격을 효율적으로 쓸 수 있다.",
          },
          {
            "id": "junkrat",
          },
          {
            "id": "reaper",
          },
          {
            "id": "symmetra",
          },
          {
            "id": "doomfist",
          },
          {
            "id": "orisa",
          },
          {
            "id": "ana",
            "note":
              "2층 건물이 많은 만큼 원거리 힐에 적합하며, 나노 강화제에 호되게 당하기 쉬운 구조라 수비에 아나를 사용하여 적에게도 아나를 강제시키는 플레이도 가능하다.",
          },
        ],
      },
      {
        "id": "네온-정션",
        "name": "네온 정션",
        "page": "https://namu.wiki/w/%EB%84%A4%EC%98%A8%20%EC%A0%95%EC%85%98",
        "image":
          "https://i.namu.wiki/i/om8GJL-5rZ0wLIlBLZXyD-nBsXomZN31PNx1VnF81w_fNW-6Tro7lKdk8Tne-wxmgLUdTq97jiwFZ-xUxCQIwirQfZ5i5NPs-hnI-BTkyIX12vU_KES1-3ZYySAcRFtd7WtoQOnDFQnyklfBigPcag.svg",
        "attack": [],
        "defense": [],
      },
    ],
  },
  {
    "id": "밀기",
    "label": "밀기",
    "color": "#27ae60",
    "maps": [
      {
        "id": "뉴-퀸-스트리트",
        "name": "뉴 퀸 스트리트",
        "page":
          "https://namu.wiki/w/%EB%89%B4%20%ED%80%B8%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8",
        "image":
          "https://i.namu.wiki/i/2zb-JAz4EziPDcnRZdrYFGKoyB7m_fsnGNbgTKI-ireqa-8m2GT-IEbRxmKPLHCpbchLmCcplSVkq55J75TTqp4600sKre9H6UzgCw2gUf6KQfB-Mbo2cDF7M6UMAlaY8gJtdWq8deOuHVIxGMFoCQ.webp",
        "attack": [
          {
            "id": "sombra",
            "note":
              "힐팩 위치가 비비고 합류하기 좋은 곳에 있으며, 특히 중앙 헤어핀 구간에는 대형 힐팩 바로 뒤 카운터에 위치변환기 파괴가 불가능한 수준의 숨기기 좋은 곳도 있다.",
          },
          {
            "id": "d-va",
            "note":
              "건물 창문이 크게 뚫린 2층 건물이 많고, 육교와 고저차가 있는 언덕 등 D.Va가 활약하기 좋은 구간이 많다.",
          },
          {
            "id": "tracer",
          },
          {
            "id": "ramattra",
          },
          {
            "id": "sojourn",
          },
          {
            "id": "soldier-76",
          },
        ],
        "defense": [
          {
            "id": "d-va",
          },
          {
            "id": "ramattra",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "sombra",
          },
          {
            "id": "sigma",
          },
        ],
      },
      {
        "id": "이스페란사",
        "name": "이스페란사",
        "page":
          "https://namu.wiki/w/%EC%9D%B4%EC%8A%A4%ED%8E%98%EB%9E%80%EC%82%AC",
        "image":
          "https://i.namu.wiki/i/9XOeFxOAIV_Nmx67QT7KgUqHwQJ-xUOqfH_z1UL6JdA6zfqWY6-RCjjqVYzhhHiCHqK5D03NetHEiivDHdYk1Uy2mEuW5eXUWAEWE7J-Z7613sP3wWvmBlJs7SsqeDf-Z3aCNTfSNnZ7JhYINEhTuQ.webp",
        "attack": [
          {
            "id": "sombra",
          },
          {
            "id": "d-va",
            "note":
              "D.Va를 위한 맵이라고 봐도 과언이 아니다. 맵 전체적으로 약간의 고저차가 존재하면서 높은 구조물과 2층 육교나 건물 등이 대거 배치되어 있어서 저격수 견제, 자폭 등 모든 면에서 활약 가능하다.",
          },
          {
            "id": "wrecking-ball",
          },
          {
            "id": "orisa",
          },
          {
            "id": "reaper",
          },
        ],
        "defense": [
          {
            "id": "d-va",
          },
          {
            "id": "hanzo",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "ashe",
          },
          {
            "id": "cassidy",
          },
          {
            "id": "orisa",
          },
          {
            "id": "junkrat",
          },
        ],
      },
      {
        "id": "콜로세오",
        "name": "콜로세오",
        "page":
          "https://namu.wiki/w/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%98%A4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/-lH3UCiqDPWm47Xjp0ws3muNN9aGcgARiZ7c7Z25Biyw9EMYdO3JPeCJVKjtKWzetEgusXoUihWg34qea_h03-Y4RajW2_DLRLpUzRpgaiGdiyD74_EUe63zsS4G-Jz31xLCWPwQ4QybBEp6OfhrmA.webp",
        "attack": [
          {
            "id": "ramattra",
            "note":
              "콜로세움 구간 한정 패왕이다. 1층 싸움이 강제되는 데다가 우회로도 적고 엄폐물도 없는 구간이기 때문.",
          },
          {
            "id": "d-va",
            "note":
              "콜로세움 구간 밖 한정. 바깥 로마 도심은 2층과 육교 구조이며, 고저차도 있어서 활약하기 좋다. 반대로 콜로세움 구간은 단층 평지에 우회로도 없어서 자폭 말고는 기대할 곳이 없다. 다만 최종 목적지 근처 판테온은 자폭을 피하는 게 매우 힘들다.",
          },
          {
            "id": "genji",
          },
          {
            "id": "doomfist",
          },
        ],
        "defense": [
          {
            "id": "ramattra",
          },
          {
            "id": "widowmaker",
          },
          {
            "id": "ashe",
          },
        ],
      },
      {
        "id": "루나사피",
        "name": "루나사피",
        "page": "https://namu.wiki/w/%EB%A3%A8%EB%82%98%EC%82%AC%ED%94%BC",
        "image":
          "https://i.namu.wiki/i/gZdsDqJ3uBXwGIw-8qa6unSXlUy_EKSx07Kl3bIi9UdGpeKdvydVarEpdO0ecpFfzU_hVAia219Z7SUC9cYNOgt5VzmxwXS0Z8TaoEMBU0UaksQR6bqb00LXNTL2IO5rPAcc3Rw8Rv43LMOgI3M3Ig.webp",
        "attack": [],
        "defense": [],
      },
    ],
  },
  {
    "id": "플래시포인트",
    "label": "플래시포인트",
    "color": "#eb5757",
    "maps": [
      {
        "id": "뉴-정크-시티",
        "name": "뉴 정크 시티",
        "page":
          "https://namu.wiki/w/%EB%89%B4%20%EC%A0%95%ED%81%AC%20%EC%8B%9C%ED%8B%B0",
        "image":
          "https://i.namu.wiki/i/if8lKZwi4XFIB3ZFUEmrKDCk53yksjH5YB0ZpKA3jSGvNJNuachk_fjnlX47vdvSllGtaNBLZE-Glmz6rQbDTfI8bw8SJIBNNelkVh1gFC6SM2hcqvSoUHfKDhZjrYkeQMs_YapS-3Ku8lBwoYg4HA.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "수라바사",
        "name": "수라바사",
        "page": "https://namu.wiki/w/%EC%88%98%EB%9D%BC%EB%B0%94%EC%82%AC",
        "image":
          "https://i.namu.wiki/i/JtEM6rRAMhYYvSZ_ti8zsZBQJhd42rR2gyt43mV1KjRBUC8z0lANQB83hSfEnqt3am_E5YBv_tOuLLeuDJ-Y-MeV5JPhO8L9pOVSoEq6EkBTI_4qAb36Q37TERU8OgdFkAcF-LJ7-3ILiwIkljwI6A.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "아틀리스",
        "name": "아틀리스",
        "page": "https://namu.wiki/w/%EC%95%84%ED%8B%80%EB%A6%AC%EC%8A%A4",
        "image":
          "https://i.namu.wiki/i/gepjsC_v4mJaA8vYLU8pRa4aw3-g5ll_-fXgXF1oxgrj_v3-GHfRFnLCX5mqXlhBEBlCltT8Rm9JdZ_w5tn49H90dy37Xd5ekq5ZapMI-4RApN6-Ty3zGq7WWdKhaez0Cbtcld2gg9OSFfmj-eWHGw.webp",
        "attack": [],
        "defense": [],
      },
    ],
  },
]
