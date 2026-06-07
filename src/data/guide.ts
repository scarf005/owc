export type HeroId = string

export type SynergyRating = "veryGood" | "good" | "neutral" | "bad" | "veryBad"

export type SynergyEntry = {
  target: HeroId
  rating: SynergyRating
}

export type MapInfo = {
  id: string
  name: string
  page: string
  image: string
  attack: HeroId[]
  defense: HeroId[]
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
          "roadhog",
          "pharah",
          "winston",
          "reaper",
          "soldier-76",
        ],
        "defense": [
          "cassidy",
          "tracer",
          "zenyatta",
          "zarya",
          "lucio",
          "orisa",
        ],
      },
      {
        "id": "리장-타워",
        "name": "리장 타워",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%9E%A5%20%ED%83%80%EC%9B%8C",
        "image":
          "https://i.namu.wiki/i/g-BoYIVbCzLOJLjVX4yB2EMFIWuY2y92jscKc7PAYptEBrsChpzxWfH_Y4VIEYIMpul1uNHt6h3YwVvXiPNwQbJvYxNriYm4k5mLCakmqIlb88Kyj7mTx7ZRfK_2BRrjW5y9942J3Ezr1u7g6LDJ4g.webp",
        "attack": [
          "winston",
          "reinhardt",
          "reaper",
          "junkrat",
        ],
        "defense": [
          "lucio",
          "roadhog",
          "zarya",
          "pharah",
          "mei",
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
          "doomfist",
          "symmetra",
          "ana",
          "widowmaker",
          "cassidy",
          "ashe",
        ],
        "defense": [
          "junkrat",
          "roadhog",
          "lucio",
          "wrecking-ball",
          "brigitte",
          "ana",
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
          "winston",
          "d-va",
          "roadhog",
          "genji",
          "tracer",
          "pharah",
          "mercy",
        ],
        "defense": [
          "zarya",
          "roadhog",
          "soldier-76",
          "cassidy",
          "reaper",
        ],
      },
      {
        "id": "일리오스",
        "name": "일리오스",
        "page": "https://namu.wiki/w/%EC%9D%BC%EB%A6%AC%EC%98%A4%EC%8A%A4",
        "image":
          "https://i.namu.wiki/i/_GAQoHCmY_MqKVq0OXgV25bu4WxLo8L4Ul2q9HNqLaA8nNzppL0_tXIYaxmK4fkead6CxMclwdQ8DBkwn_xns0vfZgs9IWwENXzZLy9Wc3s45TIOGYoUDCn57CeSsYkqVN0JHilmbXQzFDLPPM5wjQ.webp",
        "attack": [
          "pharah",
          "reaper",
          "winston",
          "roadhog",
          "d-va",
          "orisa",
        ],
        "defense": [
          "tracer",
          "winston",
          "roadhog",
          "soldier-76",
          "lucio",
          "orisa",
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
          "pharah",
          "d-va",
          "sombra",
          "zarya",
          "cassidy",
          "brigitte",
          "junkrat",
        ],
        "defense": [
          "cassidy",
          "ashe",
          "mei",
          "bastion",
          "moira",
          "zenyatta",
          "doomfist",
          "torbjorn",
          "junkrat",
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
          "winston",
          "genji",
          "cassidy",
          "d-va",
          "baptiste",
        ],
        "defense": [
          "sigma",
          "winston",
          "widowmaker",
          "soldier-76",
          "junkrat",
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
          "junkrat",
          "reaper",
          "lucio",
          "winston",
          "reinhardt",
          "cassidy",
          "d-va",
          "sombra",
          "bastion",
          "hanzo",
        ],
        "defense": [
          "roadhog",
          "junkrat",
          "pharah",
          "mei",
          "doomfist",
          "bastion",
          "mercy",
          "genji",
          "moira",
          "hanzo",
        ],
      },
      {
        "id": "리알토",
        "name": "리알토",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%95%8C%ED%86%A0",
        "image":
          "https://i.namu.wiki/i/NwdtYwq6pr83_MyMK0wowneNsqkFEicx1iU4LeviBsnXS6EsZ23rjJ5rUSezVejmSulWkhREFNRxHeI04W71eXhaxwR-MbrDamW8IyszCnAG5oHCcPz6VTSwM2t6_MGVHTpxUq9Yo7a9cjp2wNZs8Q.webp",
        "attack": [
          "cassidy",
          "reinhardt",
          "orisa",
          "roadhog",
          "brigitte",
          "lucio",
          "hanzo",
          "pharah",
        ],
        "defense": [
          "junkrat",
          "zarya",
          "orisa",
          "reaper",
          "mercy",
          "moira",
          "roadhog",
          "ana",
          "sigma",
          "genji",
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
          "sigma",
          "winston",
          "d-va",
          "genji",
          "doomfist",
        ],
        "defense": [
          "sigma",
          "orisa",
          "widowmaker",
          "d-va",
          "sombra",
          "hanzo",
        ],
      },
      {
        "id": "서킷-로얄",
        "name": "서킷 로얄",
        "page": "https://namu.wiki/w/%EC%84%9C%ED%82%B7%20%EB%A1%9C%EC%96%84",
        "image":
          "https://i.namu.wiki/i/GSf560vF_JXAlYuL08i1Pe5TfHjMh1-eX4IW6kbjapuAZDA0WT8PxUombBLhKSlf5LBeTLi-CPJb57Y-ibvO-QOMaQxzdiSENpyrQk9_HlxxVpoo-Hk7ntymWxBSNZD6GChS7sbffeWUZnmtE91sFw.webp",
        "attack": [
          "sigma",
          "genji",
          "pharah",
          "widowmaker",
          "hanzo",
          "d-va",
          "juno",
        ],
        "defense": [
          "sigma",
          "genji",
          "pharah",
          "widowmaker",
          "juno",
        ],
      },
      {
        "id": "쓰레기촌",
        "name": "쓰레기촌",
        "page": "https://namu.wiki/w/%EC%93%B0%EB%A0%88%EA%B8%B0%EC%B4%8C",
        "image":
          "https://i.namu.wiki/i/O-MhEMTPFWQjqT8eUI8UQIRF-NLwSKiie1sVDXbUvwpp3aALdyUhir2kaf954SDUOEzOR0tktAWgmpDr4ZEy-jBWDtrv379pE6IxJ7a2THF-FQMLncmtlznhULr574bde5cAT1u7wb2e5FM5jJuasw.webp",
        "attack": [
          "d-va",
          "sigma",
          "ashe",
          "pharah",
          "widowmaker",
        ],
        "defense": [
          "widowmaker",
          "sigma",
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
          "sombra",
          "widowmaker",
          "sigma",
          "wrecking-ball",
        ],
        "defense": [
          "widowmaker",
          "sigma",
          "wrecking-ball",
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
          "moira",
          "genji",
          "zarya",
          "reaper",
          "d-va",
          "roadhog",
          "soldier-76",
          "reinhardt",
          "brigitte",
          "ashe",
          "sombra",
        ],
        "defense": [
          "torbjorn",
          "bastion",
          "mei",
          "widowmaker",
          "hanzo",
          "junkrat",
          "cassidy",
          "soldier-76",
          "symmetra",
          "sigma",
          "d-va",
          "orisa",
        ],
      },
      {
        "id": "미드타운",
        "name": "미드타운",
        "page": "https://namu.wiki/w/%EB%AF%B8%EB%93%9C%ED%83%80%EC%9A%B4",
        "image":
          "https://i.namu.wiki/i/ixhcSlVsLgQvVVhhCTYoEweVHsD2A1dBACC3yZ-eoB_2_L-QUjVRIHWoKcE10rZe_MJYdWEaC05uhZ0xNzcuYDuO2r7h1vTgHAl-Xy3HrgvKSQ7o08wvYgnGGQocqrWSFjlqh3nCrhW-GevkrlRYKQ.webp",
        "attack": [
          "tracer",
          "sojourn",
          "winston",
          "orisa",
        ],
        "defense": [
          "d-va",
          "doomfist",
          "torbjorn",
          "genji",
          "hanzo",
          "cassidy",
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
          "d-va",
          "mercy",
          "zarya",
          "wrecking-ball",
        ],
        "defense": [
          "bastion",
          "pharah",
          "widowmaker",
          "junkrat",
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
          "reinhardt",
          "lucio",
          "pharah",
          "sombra",
          "cassidy",
          "wrecking-ball",
          "d-va",
          "zarya",
          "brigitte",
          "soldier-76",
          "winston",
        ],
        "defense": [
          "torbjorn",
          "doomfist",
          "hanzo",
          "ana",
          "symmetra",
          "cassidy",
          "pharah",
          "junkrat",
          "roadhog",
          "mercy",
          "zenyatta",
          "reaper",
          "tracer",
          "genji",
          "bastion",
          "orisa",
          "mei",
        ],
      },
      {
        "id": "왕의-길",
        "name": "왕의 길",
        "page": "https://namu.wiki/w/%EC%99%95%EC%9D%98%20%EA%B8%B8",
        "image":
          "https://i.namu.wiki/i/4E7eb1Ky8kuxJkcey-DVy9V7p2dQXG-cbuHW7gcljTA3P3H6FsbfXPQca1-CPzRQ_Cd2OyKQsqRQh8TLCUNv_zrcdl7tbWwwTc7IG49lqbHkkY4qSTQ4rCldIWQFKU6oxW36UQOZvq0dU29PRrOAeg.webp",
        "attack": [
          "reinhardt",
          "zarya",
          "d-va",
          "hanzo",
          "pharah",
          "winston",
          "ana",
          "bastion",
          "widowmaker",
          "moira",
          "wrecking-ball",
          "junker-queen",
          "cassidy",
        ],
        "defense": [
          "widowmaker",
          "cassidy",
          "tracer",
          "doomfist",
          "reaper",
          "junkrat",
          "bastion",
          "torbjorn",
          "wrecking-ball",
        ],
      },
      {
        "id": "파라이수",
        "name": "파라이수",
        "page": "https://namu.wiki/w/%ED%8C%8C%EB%9D%BC%EC%9D%B4%EC%88%98",
        "image":
          "https://i.namu.wiki/i/nhXNcEpyIC22w1zHjXF-qzu8xOP_Rz5X0y5-I7JkfRTonVwL6Jj1NWJQkTQ6Juwb_2IqRAnrTBALQuuVCytkIbQO7JCJ8afDPxP31LU4uFmNOjFatHrJCDUpv7iyENn1Al1jnv7kGe_L0AJbY8IpjA.webp",
        "attack": [
          "winston",
          "d-va",
          "tracer",
        ],
        "defense": [
          "ana",
          "reaper",
          "brigitte",
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
          "d-va",
          "cassidy",
          "genji",
          "reinhardt",
          "winston",
          "soldier-76",
          "hanzo",
          "sombra",
        ],
        "defense": [
          "torbjorn",
          "d-va",
          "hanzo",
          "junkrat",
          "reaper",
          "symmetra",
          "doomfist",
          "orisa",
          "ana",
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
          "sombra",
          "d-va",
          "tracer",
          "ramattra",
          "sojourn",
          "soldier-76",
        ],
        "defense": [
          "d-va",
          "ramattra",
          "widowmaker",
          "sombra",
          "sigma",
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
          "sombra",
          "d-va",
          "wrecking-ball",
          "orisa",
          "reaper",
        ],
        "defense": [
          "d-va",
          "hanzo",
          "widowmaker",
          "ashe",
          "cassidy",
          "orisa",
          "junkrat",
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
          "ramattra",
          "d-va",
          "genji",
          "doomfist",
        ],
        "defense": [
          "ramattra",
          "widowmaker",
          "ashe",
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
