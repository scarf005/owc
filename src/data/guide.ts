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
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3toP1Nzcc1zFBHnuTYAYWHC_gvk7CCKc5JiJ-S9Y3K1shmw7RH23h7hcBRiuElmX1r-8F5xOg6iYo0Z5mQcKA9FHh20BPq5QSsKYYfORCG0JOI-ZaWmDM93-1Kjcu-PGK0Ta9U039BjhOWKnMmXZ0gg.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "네팔",
        "name": "네팔",
        "page":
          "https://namu.wiki/w/%EB%84%A4%ED%8C%94(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3pBNd9f4EwxjwgNTyfhBzayR3RCX6z0Vus2lTbHsV52BKwqnr0gGUojq4WMpcUyHu9nIZYWINzbYUe4tggMEX8loUsjURC_cPvJT0DOPt21z90yU2mWbQ05YYquUxd8TFI_wgF7tpRL0For4Re9DdB4.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "리장-타워",
        "name": "리장 타워",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%9E%A5%20%ED%83%80%EC%9B%8C",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3kIEfYbY_hxanBjDl1LYQ64lW2Weij9kyuTfVMxzi-W0XqBZsbOJdbAhiJ9Sug5mUnWtc2CDEFHDSz18APqVFhliigK6vjM3Lc_FUD4IyTYBFFM-OAVbUb61r3jj1CHsRSZO6qznelELGfHDN63e5ko.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "부산",
        "name": "부산",
        "page":
          "https://namu.wiki/w/%EB%B6%80%EC%82%B0(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3sLO5gHqm84jIZveDXvKYqI2T5k5YA02NCF0bV7W0ZowXsuEVHz5_0DkSZYTLT1UNb9RMnKUAu5B-pWz4DxoH37yh3bB8kAskJ9cN9c6JjMEdD6RXEacrGN-WrjFA-8WKzkg6jPOZFt-pKenb8p5vd0.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "사모아",
        "name": "사모아",
        "page":
          "https://namu.wiki/w/%EC%82%AC%EB%AA%A8%EC%95%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3tOUHiMt3TSRTTY61Qey0G2Ml_Lo9_qAZEtyLVvz4PPePkVgDwDOU3lPSkjWmLaSneUNmjzEjQ-i2-JRIx5cUGQrBFe8ztDzCwyCrMIEblha8-M2bhnLySKL6XXxiGQXfbMYV4npG1_u_RPUwpp5GyU.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "오아시스",
        "name": "오아시스",
        "page":
          "https://namu.wiki/w/%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3gA3YGf31H5gx7vhYm0EZ0MNFLuhSc02KQoobsHJRZbq4kP8PpJzxpnwROkitmhBo84N23jL4u9m7ZfzIAPhF_dN_7916iV5SGuZFAU0Z6yMrtV7Qi_-cvWI26ySntqpL6OQL5LkbJMbNK-CI6caAJw.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "일리오스",
        "name": "일리오스",
        "page": "https://namu.wiki/w/%EC%9D%BC%EB%A6%AC%EC%98%A4%EC%8A%A4",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3txdLWGPdte2K3v5XPNVu0emcCXB1QCELjx6KJYXaBicI-gnJKx_XiCbv8-eo9H_XLgYZg3ry34Z_YUaEda16boqqB1mhIiWhWaIYx39U5EGxvmKqWDvHvchYChRgQgJCuVd7jm3VfB-cvoSucuYLV8.webp",
        "attack": [],
        "defense": [],
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
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3hqmHcXOzXdaW7GegF-BN-5et5CAPp3FuwjuUBKC2VtNRXDBIRbgujuALOSBPTx_-BrryXjbOCKP1M-7_ac_47fumLGHr5UMgMzF4lsNRTLE5gjrUv0VKVyiXq5zFtO_0KjEkMg1evFASwxzwfK2aDc.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "감시-기지-지브롤터",
        "name": "감시 기지: 지브롤터",
        "page":
          "https://namu.wiki/w/%EA%B0%90%EC%8B%9C%20%EA%B8%B0%EC%A7%80:%20%EC%A7%80%EB%B8%8C%EB%A1%A4%ED%84%B0",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3n7Xpz7qUwXjwamjt6x8fs3BqRRIkrJM-SSPtyybervLJW-ZDaw_8ySUecD1jQt3qNRrUPA4B-zwKwxxMWK-9LfUJY7FMQw4v7VmRticiwz7B34G3yIR5C6WCk64kAbZYpZWaolRm7lwft1NDS2nMnY.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "도라도",
        "name": "도라도",
        "page":
          "https://namu.wiki/w/%EB%8F%84%EB%9D%BC%EB%8F%84(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3kqWD9l7VZh4Dsm7XT7CMCfeNTuI3rfY9LM-ICsbHe_2mktYDvhUq2SHMassAlX4jPN-b2jRnl9SWUIjHqr1dMpr5VlSF3TRwpJTkpu_NkaBBXZngbtfaEamOhQU0v9i6ogUzi7GSBGepGmE9jgDILc.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "리알토",
        "name": "리알토",
        "page": "https://namu.wiki/w/%EB%A6%AC%EC%95%8C%ED%86%A0",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3hqbgQDXRXa4QcjDMMJfE2hOaI57Vxzus-YK2cEtUb7HvNvRu9PEnV8h6o2nxm_vkjyX4EPRhBHPPJ7Xe-TijfNuzU-BuDJVRboygoLbOj4tYSmuBDqfE7AM2bTiHDPeKlgPssGV09E02DJinRT6ZBc.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "샴발리-수도원",
        "name": "샴발리 수도원",
        "page":
          "https://namu.wiki/w/%EC%83%B4%EB%B0%9C%EB%A6%AC%20%EC%88%98%EB%8F%84%EC%9B%90",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3lsRylABCwLdfNDX6Qcbi_u_53ZYlelCjtwO97y8VH1yYGwgFj-UFfLU4ppJLHsMMD1gF8rjiDcye5urVtSN-kUmODMkurxs_IWBdZJyC4IE9BHy2bXOGdD7o-55CDM5oA-yEQKe2ksRUCf-fs8jKyg.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "서킷-로얄",
        "name": "서킷 로얄",
        "page": "https://namu.wiki/w/%EC%84%9C%ED%82%B7%20%EB%A1%9C%EC%96%84",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3l__a_SG0jjOjt57vjoKqOdEl4COm6l94tjsyDOX2VNWfBW-ry9_n7HxDDgTKeaQf336VLvQHJyqMzchP6ldA-AM3ReZqxir5rsHeII9n1E3V-dlfcMkDAsedpUJ3OjDtJYrWTHBsRWjcfD8JA0ymqg.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "쓰레기촌",
        "name": "쓰레기촌",
        "page": "https://namu.wiki/w/%EC%93%B0%EB%A0%88%EA%B8%B0%EC%B4%8C",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3gr-0cVZTI98Jk1Wyo3HyEd6shlBXecxR8n4b34obS0DW1uHuZH2Zvm-Nvh-uKastvFjhFrpAJVenMs3kLjFDpA9KXfsJ9lRRSl8MTvLQbg6EE8AfOea-9-XrcL5iDQ_l0fD_WLtl5rPN5bHgI246_M.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "하바나",
        "name": "하바나",
        "page":
          "https://namu.wiki/w/%ED%95%98%EB%B0%94%EB%82%98(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3pGN_yGCzBDcn47Y4E3nFfAm5j1qNwnz5T3oj-q9UVgXtjgNC68uaPFR_RjlcVqHQbtQvvNzO5soDVSWe3Ue0EpPvV2WfC4K3tVHI6fGgW2gJeZE8OJupUkwhjPblovi8llqriSisjHRfcoy9-PJCBE.webp",
        "attack": [],
        "defense": [],
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
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3rRgvTuDtbN2qXCK8w9608BxJ564hfGstjPUhGjfboW7AMrNeLy596pcfM_RIIYpSpVan960qFUbdNNvJMwoa0cV03itiY7OoVoLQh2gYuGGG3_iKHW869IXSrwljLQFnX_h-0zWcJS1ia2iMN-96f4.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "미드타운",
        "name": "미드타운",
        "page": "https://namu.wiki/w/%EB%AF%B8%EB%93%9C%ED%83%80%EC%9A%B4",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3nLrgwPOxfcuYlujKueUTfXGa8COybmKBZj-M3FZZ_6HPDCZdpgdds9iB2G9-WcPOE-1cOPgkxFX62uxi9xzqNXRtWnKEtp8w3vGeSgjt-evqu2V32ENM74wdm9xDZrxrFaGu9dgmt5AlJawg6keAqY.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "블리자드-월드",
        "name": "블리자드 월드",
        "page":
          "https://namu.wiki/w/%EB%B8%94%EB%A6%AC%EC%9E%90%EB%93%9C%20%EC%9B%94%EB%93%9C",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3uqeA-ejU7iCfZcdREytnwsWszCEZ6DhYvhdY-xclK1STUTMysqYXk5-aCdVFSSEGZs8NkKzrmg3VKZcSdYm0adsKMV_QRAo1RraOPHM2Hs-Sq0NqDJq9rww_NJOD5vEBo39BJqMmRFr18bvLC5ALKQ.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "아이헨발데",
        "name": "아이헨발데",
        "page":
          "https://namu.wiki/w/%EC%95%84%EC%9D%B4%ED%97%A8%EB%B0%9C%EB%8D%B0",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3r0Ikn5ZhLmhb6JVNfS16xYTQ0pQ3ArR-STro1fSbMkuNzBFuwvDMcVU9uY-JJvV-UU3k7XFP4HvhpX_WYd98PLygTiddiojP1nBIR4snkyyFRRREJTOrDkkQuc0P_7UOkIZ1XxfaKZ8swy38H_cYok.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "왕의-길",
        "name": "왕의 길",
        "page": "https://namu.wiki/w/%EC%99%95%EC%9D%98%20%EA%B8%B8",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3nkDg9jzRTcT35oBVp3Lt0euNhDFRUag7z9aTpMagN5Kv0K9NvAjxl55t75R0eMX2R1HYGwv7gBReg37mgI_CVjMaNMIZGOUKH_ZuReQ47XPyA6WY3B7b52teQS4DHECIqbAORc_jQioSrtn3PKokj4.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "파라이수",
        "name": "파라이수",
        "page": "https://namu.wiki/w/%ED%8C%8C%EB%9D%BC%EC%9D%B4%EC%88%98",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3u3QwgUlAqHMeUo6r2Mt5ceX3BNo9icqi8GALtG9oGgVaqN0xvrunMPOrJ0F2-FaG4TyNza134FXiMoLCxogM1T0lup_JyPhbEOY7E4a8bSwkww1KXruz2L7O8KiGS0oIUm_gzHI1OpMRbn2qJTelyc.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "할리우드",
        "name": "할리우드",
        "page":
          "https://namu.wiki/w/%ED%95%A0%EB%A6%AC%EC%9A%B0%EB%93%9C(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3vzIjwY2rjDLG4DzLpusnPqdhz_p2zoBtDkmjOIuGAtdzbi-Ejp0SFpgAU0r-wgocXwkxNW7ixNwEW9RQq3qxtmPsbsaiq8LUaET54EQ0EaZDSEtZl3_8pUO12fxx2xFn5Cfa2XMZEU94IhsUw_twNw.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "네온-정션",
        "name": "네온 정션",
        "page": "https://namu.wiki/w/%EB%84%A4%EC%98%A8%20%EC%A0%95%EC%85%98",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3lvazYkQkzCbQHJVXvKe1N0Y-6LJ3UDus5ZKsn0OtPi7kxmYCz3J8ocuYGb-K4BFUcO89hRhPbqkub__b4ZDyy8knd2MnKbg4GoMta4eprBOSOT0kya4DHCTSWrJAYV---gFiuVK4i8-Q2I-Z1PZtm0.svg",
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
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3vW5--qNuPhkbriYZCI1r53PS5T9npje0aSd1tlggoBR_lHZIwleTCIPZYj8gd-gSt4_EbQ1D1BPYuPgUCRjkyLhLSuHvgCpZh-5tI9I5Rb4rCLxARIArdX11YsY1Pe8xMwnJZIAUbcoNZOsDcid4MM.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "이스페란사",
        "name": "이스페란사",
        "page":
          "https://namu.wiki/w/%EC%9D%B4%EC%8A%A4%ED%8E%98%EB%9E%80%EC%82%AC",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3ikooGkAHAKbcGYMPoCnipttvhueqm4e1t5sIy3KuR2BanW5bH1R6NS_y1Z3-IjGolF3_Ev0uSqpYWU_OIBdJA7xHoiUlBxVBV70UFKLxCuuZqt54hptW8M48jUQJWbQdpFzRw9pT9HLOMB2coXdLVs.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "콜로세오",
        "name": "콜로세오",
        "page":
          "https://namu.wiki/w/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%98%A4(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3vVVhmQ9czE8diIb-WzIZCTnlMdbKuCs4TBFIqzxWEteV2D-VIoGVWlBrMI0NUsLW_QdyjPmNvflTHKxAEZ1KF9QtLE2TtN1v8JgOdirYNtFAsOH0biw7jCmZc4_bb3B5HGR2uOKeaAm0c17MyvjXFA.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "루나사피",
        "name": "루나사피",
        "page": "https://namu.wiki/w/%EB%A3%A8%EB%82%98%EC%82%AC%ED%94%BC",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3rpR8RUjkewpflZDDH_oRkKIhuxbYFpMQpHZqgdMiHzI4u7lSjb1BWG3y3hNu8lhtntiSOf2lzFvbETPXNqe4fYvIBl671N87MUaU3Mcgmuj6pw29mepj9K9wiYjMKN0Hn2Gg62rL2Mv5sfNjm210Fw.webp",
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
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3reQvRR_I6pz-LJryH6xKoT3LP3NCK0rQKLQQwvQNtO7u3byOb9ViPX3KbqIL-j_tCWlwm-8IjT5zjom6aAq0ekXyzvaf3BvfP_xXEoGsPZjioufQX4BdKiAM8XCOpnoYeIx6aW7YQXi6SvqvipNqrs.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "수라바사",
        "name": "수라바사",
        "page": "https://namu.wiki/w/%EC%88%98%EB%9D%BC%EB%B0%94%EC%82%AC",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3o-TVtYlr9we0iF75YiI3UqKZ5I58ondxG27gG6FfyMBDjsbZIBB6F2DNsMP9UDaZMK3i8s5fSo2crmDGKTK86j11AXvPEJ-T18ng8paxEoNa8gOO0h6g0vWbNY3bPdnbo3gF1seePAF9gDTAiJUw1c.webp",
        "attack": [],
        "defense": [],
      },
      {
        "id": "아틀리스",
        "name": "아틀리스",
        "page": "https://namu.wiki/w/%EC%95%84%ED%8B%80%EB%A6%AC%EC%8A%A4",
        "image":
          "https://i.namu.wiki/i/IHIvCqxn_br3XHU3tcMg3t_lFKEYfTlIFE_xaUHutJMlLPl40-hsXoOO1x9cOpREFzh_TEr4DenpDqGsaGdsghUwqcM9NNomGv2NpjW3FEvRIkruDvBSAxlfcnupWSVH5nvrVZWuk5gmgJh3jpIF0gxMp7UEk3MDSrgpAx0JiEc.webp",
        "attack": [],
        "defense": [],
      },
    ],
  },
]
