/// <reference lib="deno.ns" />

import { heroes, type Role } from "../src/data/overwatch.ts"

type Hero = typeof heroes[number]
type SynergyRating = "veryGood" | "good" | "neutral" | "bad" | "veryBad"

type SynergyEntry = {
  target: string
  rating: SynergyRating
}

type MapMode = {
  id: string
  label: string
  color: string
  maps: MapInfo[]
}

type MapInfo = {
  id: string
  name: string
  page: string
  image: string
  attack: string[]
  defense: string[]
}

const namuOrigin = "https://namu.wiki"
const mapsUrl = `${namuOrigin}/w/${encodeURIComponent("오버워치/전장")}`
const roleLabels: Record<string, Role> = {
  "돌격": "tank",
  "공격": "damage",
  "지원": "support",
}
const modeColors: Record<string, string> = {
  "쟁탈": "#2f80ed",
  "호위": "#f2994a",
  "혼합": "#9b51e0",
  "밀기": "#27ae60",
  "플래시포인트": "#eb5757",
  "격돌": "#00a7a7",
}
const modeRecommendations: Record<
  string,
  { attack: string[]; defense: string[] }
> = {
  "쟁탈": {
    attack: ["junker-queen", "tracer", "sojourn", "lucio", "kiriko", "moira"],
    defense: ["winston", "mei", "reaper", "lucio", "brigitte", "ana"],
  },
  "호위": {
    attack: ["winston", "d-va", "tracer", "sombra", "ana", "kiriko"],
    defense: ["sigma", "widowmaker", "ashe", "baptiste", "zenyatta", "mercy"],
  },
  "혼합": {
    attack: ["reinhardt", "mei", "reaper", "lucio", "kiriko", "baptiste"],
    defense: ["sigma", "junkrat", "torbjorn", "baptiste", "ana", "ashe"],
  },
  "밀기": {
    attack: ["winston", "d-va", "tracer", "sojourn", "lucio", "kiriko"],
    defense: ["junker-queen", "mei", "cassidy", "brigitte", "ana", "baptiste"],
  },
  "플래시포인트": {
    attack: ["junker-queen", "tracer", "sombra", "lucio", "kiriko", "juno"],
    defense: ["winston", "d-va", "sojourn", "mei", "ana", "brigitte"],
  },
  "격돌": {
    attack: ["winston", "tracer", "genji", "lucio", "kiriko", "juno"],
    defense: ["sigma", "mei", "cassidy", "baptiste", "brigitte", "ana"],
  },
}

const heroBySlug = new Map<string, Hero>()
const heroByName = new Map<string, Hero>()

for (const hero of heroes) {
  const slug = decodeURIComponent(
    new URL(hero.page).pathname.replace(/^\/w\//, ""),
  )
  heroBySlug.set(slug, hero)
  heroByName.set(hero.name, hero)
  heroByName.set(hero.name.replace(": ", ":"), hero)
}

const fetchNamu = async (url: string) => {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return await response.text()
}

const decode = (value: string) =>
  value
    .replace(/&nbsp;/g, " ")
    .replace(/&#91;/g, "[")
    .replace(/&#93;/g, "]")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")

const cleanText = (html: string) =>
  decode(html)
    .replace(/<br\b[^>]*>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .trim()

const attr = (html: string, name: string) => {
  const match = html.match(new RegExp(`${name}=['"]([^'"]+)['"]`))
  return match ? decode(match[1]) : undefined
}

const absoluteUrl = (url: string) => {
  const decoded = decode(url)
  if (decoded.startsWith("//")) return `https:${decoded}`
  if (decoded.startsWith("/")) return `${namuOrigin}${decoded}`
  return decoded
}

const sectionByHeading = (html: string, level: 2 | 3 | 4, spanId: string) => {
  const start = html.indexOf(`<span id='${spanId}'`)
  if (start < 0) return ""
  const headingStart = html.lastIndexOf(`<h${level}`, start)
  const next = html.slice(headingStart + 1).search(
    new RegExp(`<h${level}[^>]*>`),
  )
  return html.slice(
    headingStart,
    next > 0 ? headingStart + 1 + next : undefined,
  )
}

const splitByHeading = (html: string, level: 3 | 4) => {
  const matches = [
    ...html.matchAll(new RegExp(`<h${level}[\\s\\S]*?<\\/h${level}>`, "g")),
  ]
  return matches.map((match, index) => ({
    heading: cleanText(match[0]),
    html: html.slice(
      match.index! + match[0].length,
      matches[index + 1]?.index ?? html.length,
    ),
  }))
}

const heroIdFromAnchor = (anchor: string) => {
  const candidates: string[] = []
  const href = attr(anchor, "href")
  const title = attr(anchor, "title")
  const text = cleanText(anchor)

  if (href?.startsWith("/w/")) {
    candidates.push(
      decodeURIComponent(href.split(/[?#]/)[0].replace(/^\/w\//, "")),
    )
  }
  if (title) candidates.push(title)
  if (text) candidates.push(text)

  for (const candidate of candidates) {
    const exact = heroBySlug.get(candidate) ?? heroByName.get(candidate)
    if (exact) return exact.id
    const normalized = candidate.replace(/\(.*?\)$/g, "").trim()
    const loose = heroByName.get(normalized)
    if (loose) return loose.id
  }

  return undefined
}

const classifySynergy = (text: string): SynergyRating => {
  if (/최악|좋지 않|궁합이 나빠|궁합도 나빠|잘 맞지|메리트는 없다/.test(text)) {
    return "veryBad"
  }
  if (
    /미미|어렵|힘들|단점|달갑지는|활용하기 어려|나쁜 것은 아니다/.test(text)
  ) return "bad"
  if (/최상|최고|가장 뛰어난|매우 좋|훌륭|보배|말살|강력하다/.test(text)) {
    return "veryGood"
  }
  if (/좋|준수|도움|가능|상호보완|유리|보완|연계/.test(text)) return "good"
  return "neutral"
}

const parseSynergies = (html: string) => {
  const block = sectionByHeading(html, 2, "궁합")
  const result: Record<Role, SynergyEntry[]> = {
    tank: [],
    damage: [],
    support: [],
  }

  for (const section of splitByHeading(block, 3)) {
    const role = Object.entries(roleLabels).find(([label]) =>
      section.heading.includes(label)
    )?.[1]
    if (!role) continue

    for (
      const listItem of section.html.matchAll(/<li\b[^>]*>[\s\S]*?<\/li>/g)
    ) {
      const anchor = listItem[0].match(/<a\b[^>]*>[\s\S]*?<\/a>/)?.[0]
      if (!anchor) continue
      const target = heroIdFromAnchor(anchor)
      if (
        !target || result[role].some((entry) => entry.target === target)
      ) continue
      result[role].push({
        target,
        rating: classifySynergy(cleanText(listItem[0])),
      })
    }
  }

  return result
}

const slugify = (text: string) =>
  text.toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "")

const mapImageCache = new Map<string, string>()

const fetchMapImage = async (page: string, fallback: string) => {
  if (mapImageCache.has(page)) return mapImageCache.get(page) ?? fallback
  try {
    const html = await fetchNamu(page)
    const og = html.match(
      /<meta\b[^>]*property=['"]og:image['"][^>]*content=['"]([^'"]+)['"][^>]*>/,
    )?.[1] ??
      html.match(
        /<meta\b[^>]*content=['"]([^'"]+)['"][^>]*property=['"]og:image['"][^>]*>/,
      )?.[1]
    const image = og ? absoluteUrl(og) : fallback
    mapImageCache.set(page, image)
    await new Promise((resolve) => setTimeout(resolve, 80))
    return image
  } catch {
    mapImageCache.set(page, fallback)
    return fallback
  }
}

const parseMapModes = async (html: string) => {
  const block = sectionByHeading(html, 2, "전장 목록")
  const general =
    splitByHeading(block, 3).find((section) =>
      section.heading.includes("일반전/경쟁전")
    )?.html ?? ""
  const modes: MapMode[] = []

  for (const section of splitByHeading(general, 4)) {
    const label = section.heading.replace(/^[\d.]+\s*/, "").split(/[\s\[]/)[0]
    if (!label || !modeColors[label]) continue

    const maps: MapInfo[] = []
    const pageByName = new Map<string, string>()
    for (
      const anchorMatch of section.html.matchAll(
        /<a\b[^>]*href=['"](\/w\/[^'"]+)['"][\s\S]*?<\/a>/g,
      )
    ) {
      const name = cleanText(anchorMatch[0])
      if (name && !name.startsWith("[")) pageByName.set(name, anchorMatch[1])
    }

    const tables = [...section.html.matchAll(/<table\b[\s\S]*?<\/table>/g)]
      .slice(1)
    for (const table of tables) {
      const name = cleanText(table[0]).split("\n")[0].trim()
      const href = pageByName.get(name)
      if (!name || !href || name.startsWith("[")) continue
      const fallbackImage =
        table[0].match(/<img\b[^>]*data-src=['"]([^'"]+)['"][^>]*>/)?.[1] ??
          table[0].match(/<img\b[^>]*src=['"]([^'"]+)['"][^>]*>/)?.[1]
      const page = absoluteUrl(href)
      const recommendation = modeRecommendations[label]
      maps.push({
        id: slugify(name),
        name,
        page,
        image: await fetchMapImage(
          page,
          fallbackImage ? absoluteUrl(fallbackImage) : "",
        ),
        attack: recommendation.attack,
        defense: recommendation.defense,
      })
    }

    modes.push({ id: slugify(label), label, color: modeColors[label], maps })
  }

  return modes
}

const uniqueEntries = (entries: SynergyEntry[]) => {
  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.target)) return false
    seen.add(entry.target)
    return true
  })
}

const heroSynergies: Record<string, SynergyEntry[]> = {}
for (const [index, hero] of heroes.entries()) {
  console.error(`[${index + 1}/${heroes.length}] ${hero.name}`)
  const groups = parseSynergies(await fetchNamu(hero.page))
  heroSynergies[hero.id] = uniqueEntries([
    ...groups.tank,
    ...groups.damage,
    ...groups.support,
  ])
  await new Promise((resolve) => setTimeout(resolve, 120))
}

const mapModes = await parseMapModes(await fetchNamu(mapsUrl))

const source = `export type HeroId = string

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

export const heroSynergies: Record<HeroId, SynergyEntry[]> = ${
  JSON.stringify(heroSynergies, null, 2)
}

export const mapModes: MapMode[] = ${JSON.stringify(mapModes, null, 2)}
`

await Deno.writeTextFile("src/data/guide.ts", source)
console.error(
  `wrote ${
    Object.keys(heroSynergies).length
  } hero synergy sets and ${mapModes.length} map modes`,
)
