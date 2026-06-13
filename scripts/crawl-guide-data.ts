/// <reference lib="deno.ns" />

import { heroes } from "../src/data/heroes.ts"
import type { Role } from "../src/data/schema.ts"

type Hero = typeof heroes[number]
type Rating = "veryGood" | "good" | "neutral" | "bad" | "veryBad"

type RatedHero = {
  target: string
  rating: Rating
  body?: string
  note?: string
}

type MapMode = {
  id: string
  label: string
  color: string
  maps: MapInfo[]
}

type MapRecommendation = {
  id: string
  note?: string
}

type MapInfo = {
  id: string
  name: string
  page: string
  image: string
  updatedAt?: string
  attack: MapRecommendation[]
  defense: MapRecommendation[]
}

type DataSource = {
  name: string
  url: string
  updatedAt: string
}

const namuOrigin = "https://namu.wiki"
const mapsUrl = `${namuOrigin}/w/${encodeURIComponent("오버워치/전장")}`
const imageRoot = "public/guide-images"
const imageTempRoot = "public/guide-images.tmp"
const publicImageBase = "./guide-images"
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
const sourceModifiedTimes: string[] = []
const sourceModifiedTimeByUrl = new Map<string, string>()

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

const namuUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
const namuHeaders = {
  "user-agent": namuUserAgent,
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
}

const readNamuWithCurl = async (url: string) => {
  const command = new Deno.Command("curl", {
    args: [
      "--fail",
      "--location",
      "--silent",
      "--show-error",
      "--compressed",
      "--user-agent",
      namuUserAgent,
      "--header",
      `Accept: ${namuHeaders.accept}`,
      "--header",
      `Accept-Language: ${namuHeaders["accept-language"]}`,
      url,
    ],
    stdout: "piped",
    stderr: "piped",
  })
  const output = await command.output()
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr).trim())
  }
  return new TextDecoder().decode(output.stdout)
}

const assertReadableNamu = (html: string, url: string) => {
  if (!html.includes("최근 수정 시각")) {
    throw new Error(`blocked or unreadable Namu response: ${url}`)
  }
}

const fetchNamu = async (url: string) => {
  const response = await fetch(url, { headers: namuHeaders })
  const html = response.ok ? await response.text() : await readNamuWithCurl(url)
  assertReadableNamu(html, url)
  const modifiedAt = html.match(
    /최근 수정 시각:\s*<time datetime=["']([^"']+)["']/,
  )
    ?.[1]
  if (modifiedAt) {
    sourceModifiedTimes.push(modifiedAt)
    sourceModifiedTimeByUrl.set(url, modifiedAt)
  }
  return html
}

const pageUpdatedAt = (url: string) => sourceModifiedTimeByUrl.get(url)

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
    .replace(/[\u00a0 \t\f\v]+/g, " ")
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

const removeIfExists = async (path: string) => {
  try {
    await Deno.remove(path, { recursive: true })
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) throw error
  }
}

let imageStoreReady = false
const prepareImageStore = async () => {
  if (imageStoreReady) return
  await removeIfExists(imageTempRoot)
  await Deno.mkdir(imageTempRoot, { recursive: true })
  imageStoreReady = true
}

const imageExtension = (url: string, contentType: string | null) => {
  const pathExtension = new URL(url).pathname.match(
    /\.(avif|gif|jpe?g|png|svg|webp)$/i,
  )?.[1]
  if (pathExtension) return pathExtension.toLowerCase().replace("jpeg", "jpg")

  const mimeType = contentType?.split(";")[0]?.trim().toLowerCase()
  if (mimeType === "image/jpeg") return "jpg"
  if (mimeType === "image/svg+xml") return "svg"
  const mimeExtension = mimeType?.match(/^image\/(avif|gif|png|webp)$/)?.[1]
  if (mimeExtension) return mimeExtension

  throw new Error(`unknown image type for ${url}: ${contentType ?? "missing"}`)
}

const downloadGuideImage = async (
  options: {
    id: string
    kind: "heroes" | "maps"
    referer: string
    url: string
  },
) => {
  if (!options.url) return ""
  await prepareImageStore()

  const url = absoluteUrl(options.url)
  const response = await fetch(url, {
    headers: { ...namuHeaders, referer: options.referer },
  })
  if (!response.ok) {
    throw new Error(`image download failed ${response.status}: ${url}`)
  }
  const extension = imageExtension(url, response.headers.get("content-type"))
  const relativePath = `${options.kind}/${options.id}.${extension}`
  await Deno.mkdir(`${imageTempRoot}/${options.kind}`, { recursive: true })
  await Deno.writeFile(
    `${imageTempRoot}/${relativePath}`,
    new Uint8Array(await response.arrayBuffer()),
  )
  return `${publicImageBase}/${relativePath}`
}

const publishGuideImages = async () => {
  if (!imageStoreReady) return
  await removeIfExists(imageRoot)
  await Deno.rename(imageTempRoot, imageRoot)
}

const ogImage = (html: string) =>
  html.match(
    /<meta\b[^>]*property=['"]og:image['"][^>]*content=['"]([^'"]+)['"][^>]*>/,
  )?.[1] ??
    html.match(
      /<meta\b[^>]*content=['"]([^'"]+)['"][^>]*property=['"]og:image['"][^>]*>/,
    )?.[1]

const normalizedImageLabel = (value: string) =>
  value.toLowerCase().replace(
    /overwatch2|오버워치2|초상화?|[\s:.'’…\.]+/g,
    "",
  )

const heroPortraitAliases: Record<string, string[]> = {
  "d-va": ["디바"],
  "soldier-76": ["솔저76"],
}

const heroPortraitImage = (html: string, hero: Hero) => {
  const labels = [hero.name, ...(heroPortraitAliases[hero.id] ?? [])].map(
    normalizedImageLabel,
  )

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const alt = attr(match[0], "alt") ?? ""
    if (!alt.includes("초")) continue
    const image = attr(match[0], "data-src") ?? attr(match[0], "src")
    if (
      image && labels.some((label) => normalizedImageLabel(alt).includes(label))
    ) return absoluteUrl(image)
  }

  return undefined
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

const parseRatedHeroSections = (
  html: string,
  sectionId: "상성" | "궁합",
  classify: (text: string) => Rating,
) => {
  const block = sectionByHeading(html, 2, sectionId)
  const result: Record<Role, RatedHero[]> = {
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
      const notes = parseNoteTitles(listItem[0])
      const body = bodyWithNotes(listItemBody(listItem[0]), notes)
      const note = notes.join("\n")
      result[role].push({
        target,
        rating: classify(cleanText(listItem[0])),
        ...(body ? { body } : {}),
        ...(note ? { note } : {}),
      })
    }
  }

  return result
}

const classifyMatchup = (text: string): Rating => {
  const firstLine = text.split("\n")[0] ?? text
  const primary = firstLine.match(
    /매우\s*유리|매우\s*불리|약간\s*유리|약간\s*불리|유리|불리|중립|비슷|동등|최악/,
  )?.[0]

  if (primary) {
    if (/매우\s*유리/.test(primary)) return "veryGood"
    if (/매우\s*불리|최악/.test(primary)) return "veryBad"
    if (/약간\s*유리|유리/.test(primary)) return "good"
    if (/약간\s*불리|불리/.test(primary)) return "bad"
    return "neutral"
  }

  if (/쉽|카운터|유리|까다롭|우위/.test(text)) return "good"
  if (/불리|어렵|힘들|약하다|취약|최악/.test(text)) return "bad"
  return "neutral"
}

const classifySynergy = (text: string): Rating => {
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

const slugify = (text: string) =>
  text.toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "")

const parseNoteTitles = (html: string) =>
  [...html.matchAll(/<a\b[^>]*href=['"]#fn-[^'"]+['"][^>]*>/g)]
    .map((match) => attr(match[0], "title"))
    .filter((note): note is string => Boolean(note))
    .map((note) => cleanText(note))

const withoutFootnoteAnchors = (html: string) =>
  html.replace(/<a\b[^>]*href=['"]#fn-[^'"]+['"][\s\S]*?<\/a>/g, "")

const listItemBody = (html: string) => {
  const bodyMatch = html.match(/<br\b[^>]*>([\s\S]*)<\/li>\s*$/)
  return cleanText(withoutFootnoteAnchors(bodyMatch?.[1] ?? html))
}

const bodyWithNotes = (body: string, notes: string[]) =>
  [body, notes.length > 0 ? `주석\n${notes.join("\n")}` : ""]
    .filter(Boolean)
    .join("\n\n")

const parseMapRecommendationCell = (html: string) => {
  const anchors = [...html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)]
    .map((match) => ({ html: match[0], index: match.index ?? 0 }))
  const heroAnchors: { html: string; index: number; heroId: string }[] = []
  for (const anchor of anchors) {
    const heroId = heroIdFromAnchor(anchor.html)
    if (heroId) heroAnchors.push({ ...anchor, heroId })
  }
  const recommendations: MapRecommendation[] = []

  for (const [index, anchor] of heroAnchors.entries()) {
    if (recommendations.some((entry) => entry.id === anchor.heroId)) continue
    const noteHtml = html.slice(
      anchor.index + anchor.html.length,
      heroAnchors[index + 1]?.index ?? html.length,
    )
    const note = parseNoteTitles(noteHtml).join("\n")
    recommendations.push({ id: anchor.heroId, ...(note ? { note } : {}) })
  }

  return recommendations
}

const parseMapRecommendations = (html: string) => {
  const result: { attack: MapRecommendation[]; defense: MapRecommendation[] } =
    {
      attack: [],
      defense: [],
    }

  for (const row of html.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)) {
    const cells = [...row[0].matchAll(/<td\b[^>]*>[\s\S]*?<\/td>/g)].map((
      cell,
    ) => cell[0])
    if (cells.length < 2) continue
    const label = cleanText(cells[0])
    if (label.includes("공격 추천")) {
      result.attack = parseMapRecommendationCell(cells[1])
    } else if (label.includes("방어 추천") || label.includes("수비 추천")) {
      result.defense = parseMapRecommendationCell(cells[1])
    }
  }

  return result
}

const mapDetailsCache = new Map<
  string,
  {
    image: string
    updatedAt?: string
    attack: MapRecommendation[]
    defense: MapRecommendation[]
  }
>()

const fetchMapDetails = async (page: string, fallback: string) => {
  const cached = mapDetailsCache.get(page)
  if (cached) return cached
  try {
    const html = await fetchNamu(page)
    const image = ogImage(html)
    const details = {
      image: image ? absoluteUrl(image) : fallback,
      ...(pageUpdatedAt(page) ? { updatedAt: pageUpdatedAt(page) } : {}),
      ...parseMapRecommendations(html),
    }
    mapDetailsCache.set(page, details)
    await new Promise((resolve) => setTimeout(resolve, 80))
    return details
  } catch {
    const details: {
      image: string
      updatedAt?: string
      attack: MapRecommendation[]
      defense: MapRecommendation[]
    } = { image: fallback, attack: [], defense: [] }
    mapDetailsCache.set(page, details)
    return details
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
      const details = await fetchMapDetails(
        page,
        fallbackImage ? absoluteUrl(fallbackImage) : "",
      )
      const id = slugify(name)
      const image = await downloadGuideImage({
        id,
        kind: "maps",
        referer: page,
        url: details.image,
      })
      maps.push({
        id,
        name,
        page,
        image,
        ...(details.updatedAt ? { updatedAt: details.updatedAt } : {}),
        attack: details.attack,
        defense: details.defense,
      })
    }

    modes.push({ id: slugify(label), label, color: modeColors[label], maps })
  }

  return modes
}

const uniqueEntries = (entries: RatedHero[]) => {
  const seen = new Set<string>()
  return entries.filter((entry) => {
    if (seen.has(entry.target)) return false
    seen.add(entry.target)
    return true
  })
}

const matchups: Record<string, RatedHero[]> = {}
const heroSynergies: Record<string, RatedHero[]> = {}
const crawledHeroes: Hero[] = []
for (const [index, hero] of heroes.entries()) {
  console.error(`[${index + 1}/${heroes.length}] ${hero.name}`)
  const html = await fetchNamu(hero.page)
  const avatar = await downloadGuideImage({
    id: hero.id,
    kind: "heroes",
    referer: hero.page,
    url: heroPortraitImage(html, hero) ?? absoluteUrl(hero.avatar),
  })
  crawledHeroes.push({
    ...hero,
    avatar,
    ...(pageUpdatedAt(hero.page)
      ? { updatedAt: pageUpdatedAt(hero.page) }
      : {}),
  })
  const matchupGroups = parseRatedHeroSections(html, "상성", classifyMatchup)
  const synergyGroups = parseRatedHeroSections(html, "궁합", classifySynergy)
  matchups[hero.id] = uniqueEntries([
    ...matchupGroups.tank,
    ...matchupGroups.damage,
    ...matchupGroups.support,
  ])
  heroSynergies[hero.id] = uniqueEntries([
    ...synergyGroups.tank,
    ...synergyGroups.damage,
    ...synergyGroups.support,
  ])
  await new Promise((resolve) => setTimeout(resolve, 120))
}

const mapModes = await parseMapModes(await fetchNamu(mapsUrl))
await publishGuideImages()

const sourceUpdatedAt = () =>
  sourceModifiedTimes
    .map((value) => new Date(value))
    .filter((date) => !Number.isNaN(date.getTime()))
    .sort((a, b) => b.getTime() - a.getTime())[0]
    ?.toISOString()
    .slice(0, 10) ?? "unknown"

const dataSource = (): DataSource => ({
  name: "Namu Wiki",
  url: namuOrigin,
  updatedAt: sourceUpdatedAt(),
})

const writeJson = (path: string, value: unknown) =>
  Deno.writeTextFile(path, `${JSON.stringify(value, null, 2)}\n`)

await writeJson(
  "src/data/overwatch.json",
  { heroes: crawledHeroes, matchups },
)
await writeJson(
  "src/data/guide.json",
  {
    source: dataSource(),
    synergyRatings: [
      { key: "veryGood", label: "매우 좋음" },
      { key: "good", label: "좋음" },
      { key: "neutral", label: "보통" },
      { key: "bad", label: "나쁨" },
      { key: "veryBad", label: "매우 나쁨" },
    ],
    heroSynergies,
    mapModes,
  },
)
console.error(
  `wrote ${Object.keys(matchups).length} matchup sets, ${
    Object.keys(heroSynergies).length
  } synergy sets, and ${mapModes.length} map modes`,
)
