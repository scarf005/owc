export type HeroId = string

export type SynergyGroup = {
  label: string
  heroes: HeroId[]
}

export type MapRecommendation = {
  id: string
  name: string
  attack: HeroId[]
  defense: HeroId[]
}

const dive = [
  "winston",
  "d-va",
  "doomfist",
  "tracer",
  "genji",
  "sombra",
  "echo",
  "lucio",
  "kiriko",
  "juno",
  "ana",
]

const poke = [
  "sigma",
  "orisa",
  "ramattra",
  "widowmaker",
  "ashe",
  "hanzo",
  "soldier-76",
  "baptiste",
  "zenyatta",
  "mercy",
  "illari",
]

const brawl = [
  "reinhardt",
  "zarya",
  "junker-queen",
  "mauga",
  "roadhog",
  "reaper",
  "mei",
  "bastion",
  "junkrat",
  "lucio",
  "moira",
  "brigitte",
  "kiriko",
]

const fallback = {
  tank: [
    "ana",
    "kiriko",
    "lucio",
    "baptiste",
    "juno",
    "tracer",
    "sojourn",
    "reaper",
  ],
  damage: [
    "winston",
    "d-va",
    "sigma",
    "ana",
    "mercy",
    "kiriko",
    "lucio",
    "zenyatta",
  ],
  support: [
    "winston",
    "sigma",
    "reinhardt",
    "tracer",
    "sojourn",
    "ashe",
    "genji",
    "reaper",
  ],
}

const groupsByHero: Record<HeroId, HeroId[][]> = Object.fromEntries(
  [
    ...dive.map((id) => [id, dive]),
    ...poke.map((id) => [id, poke]),
    ...brawl.map((id) => [id, brawl]),
  ].map(([id, group]) => [id, [group as HeroId[]]]),
)

groupsByHero.kiriko = [dive, brawl]
groupsByHero.lucio = [dive, brawl]
groupsByHero.ana = [dive, poke]
groupsByHero.baptiste = [poke, brawl]

export const getSynergyGroups = (
  heroId: HeroId,
  role: keyof typeof fallback,
) => {
  const [primary = fallback[role], secondary = fallback[role]] =
    groupsByHero[heroId] ?? []
  const unique = (
    items: HeroId[],
  ) => [...new Set(items.filter((id) => id !== heroId))]

  return [
    { label: "최고 궁합", heroes: unique(primary).slice(0, 10) },
    {
      label: "좋은 궁합",
      heroes: unique([...secondary, ...fallback[role]]).slice(0, 10),
    },
  ] satisfies SynergyGroup[]
}

export const mapRecommendations: MapRecommendation[] = [
  {
    id: "kings-row",
    name: "왕의 길",
    attack: ["reinhardt", "mei", "reaper", "lucio", "kiriko", "baptiste"],
    defense: ["sigma", "junkrat", "torbjorn", "baptiste", "ana", "ashe"],
  },
  {
    id: "eichenwalde",
    name: "아이헨발데",
    attack: ["reinhardt", "junker-queen", "mei", "reaper", "lucio", "moira"],
    defense: [
      "sigma",
      "bastion",
      "junkrat",
      "torbjorn",
      "baptiste",
      "brigitte",
    ],
  },
  {
    id: "numbani",
    name: "눔바니",
    attack: ["winston", "d-va", "tracer", "sombra", "ana", "juno"],
    defense: ["sigma", "ashe", "widowmaker", "baptiste", "zenyatta", "mercy"],
  },
  {
    id: "dorado",
    name: "도라도",
    attack: ["winston", "d-va", "genji", "tracer", "ana", "kiriko"],
    defense: ["sigma", "widowmaker", "hanzo", "ashe", "zenyatta", "mercy"],
  },
  {
    id: "gibraltar",
    name: "감시 기지: 지브롤터",
    attack: ["winston", "d-va", "tracer", "sombra", "ana", "juno"],
    defense: ["sigma", "widowmaker", "ashe", "baptiste", "zenyatta", "mercy"],
  },
  {
    id: "circuit-royal",
    name: "서킷 로얄",
    attack: ["sigma", "widowmaker", "ashe", "hanzo", "baptiste", "mercy"],
    defense: ["sigma", "widowmaker", "ashe", "baptiste", "zenyatta", "illari"],
  },
  {
    id: "rialto",
    name: "리알토",
    attack: ["sigma", "winston", "tracer", "sojourn", "ana", "kiriko"],
    defense: [
      "sigma",
      "widowmaker",
      "hanzo",
      "torbjorn",
      "baptiste",
      "zenyatta",
    ],
  },
  {
    id: "midtown",
    name: "미드타운",
    attack: ["winston", "d-va", "sojourn", "tracer", "ana", "kiriko"],
    defense: ["sigma", "mei", "bastion", "ashe", "baptiste", "brigitte"],
  },
]
