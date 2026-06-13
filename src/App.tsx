import "./App.css"
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { createStore } from "solid-js/store"
import {
  heroSynergies,
  mapModes,
  type MapRecommendation,
  source as guideSource,
  synergyRatings,
} from "./data/guide.ts"
import {
  type Hero,
  heroes,
  matchups,
  type Rating,
  type Role,
} from "./data/overwatch.ts"

type View = "matchups" | "synergies" | "maps"
type HeroRowItem = { hero: Hero; body?: string; note?: string }
type TooltipState = { left: number; note: string; top: number; width: number }

const roles: { key: Role; label: string; color: string }[] = [
  { key: "tank", label: "돌격", color: "#2f80ed" },
  { key: "damage", label: "공격", color: "#eb5757" },
  { key: "support", label: "지원", color: "#27ae60" },
]

const views: { key: View; label: string }[] = [
  { key: "matchups", label: "상성" },
  { key: "synergies", label: "궁합" },
  { key: "maps", label: "맵별 추천 영웅" },
]

const ratingOrder: { key: Rating; label: string }[] = [
  { key: "veryBad", label: "매우 불리" },
  { key: "bad", label: "불리" },
  { key: "neutral", label: "중립" },
  { key: "good", label: "유리" },
  { key: "veryGood", label: "매우 유리" },
]

const heroById = new Map(heroes.map((hero) => [hero.id, hero]))
const roleRank = new Map(roles.map((role, index) => [role.key, index]))
const allMaps = mapModes.flatMap((mode) =>
  mode.maps.map((map) => ({ ...map, mode }))
)
const hasMapRecommendations = (
  map: { attack: MapRecommendation[]; defense: MapRecommendation[] },
) => map.attack.length > 0 || map.defense.length > 0
const hasAnyMapRecommendations = allMaps.some(hasMapRecommendations)
const firstRecommendedMap = allMaps.find(hasMapRecommendations) ?? allMaps[0]
const defaultHeroId = heroes[0]?.id ?? ""
const defaultMapId = firstRecommendedMap?.id ?? ""
const viewKeys = new Set<View>(views.map((view) => view.key))

const validView = (value: string | null): View | undefined =>
  value && viewKeys.has(value as View) ? value as View : undefined

const twoDigits = (value: number) => value.toString().padStart(2, "0")

const formattedUpdatedAt = (value?: string) => {
  if (!value) return undefined
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return undefined

  const parts = new Intl.DateTimeFormat("ko-KR", {
    day: "2-digit",
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric",
  }).formatToParts(date)
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((entry) => entry.type === type)?.value ?? ""

  return `${part("year")}-${part("month")}-${part("day")} ${
    part("dayPeriod")
  } ${part("hour")}:${twoDigits(Number(part("minute")))}`
}

const readQueryState = () => {
  const params = new URLSearchParams(globalThis.location?.search ?? "")
  const view = validView(params.get("view")) ?? "matchups"
  const heroId = heroById.has(params.get("hero") ?? "")
    ? params.get("hero")!
    : defaultHeroId
  const mapId =
    allMaps.find((map) =>
      map.id === params.get("map") && hasMapRecommendations(map)
    )?.id ?? defaultMapId

  return {
    view: view === "maps" && !hasAnyMapRecommendations ? "matchups" : view,
    heroId,
    mapId,
  }
}

const writeQueryState = (
  state: { view: View; heroId: string; mapId: string },
) => {
  const params = new URLSearchParams(globalThis.location.search)
  params.set("view", state.view)
  params.set("hero", state.heroId)
  params.set("map", state.mapId)
  const search = `?${params.toString()}`
  const nextUrl =
    `${globalThis.location.pathname}${search}${globalThis.location.hash}`
  if (
    nextUrl !==
      `${globalThis.location.pathname}${globalThis.location.search}${globalThis.location.hash}`
  ) {
    globalThis.history.replaceState(null, "", nextUrl)
  }
}

const heroItemsFromEntries = (
  entries: { body?: string; id: string; note?: string }[],
): HeroRowItem[] =>
  entries.flatMap((entry) => {
    const hero = heroById.get(entry.id)
    return hero
      ? [{
        hero,
        ...(entry.body ? { body: entry.body } : {}),
        ...(entry.note ? { note: entry.note } : {}),
      }]
      : []
  }).sort((a, b) =>
    (roleRank.get(a.hero.role) ?? 0) - (roleRank.get(b.hero.role) ?? 0)
  )

const heroGroupsByRating = (
  ratings: { key: string; label: string }[],
  entries: { body?: string; target: string; rating: string; note?: string }[] =
    [],
) =>
  ratings.map((rating) => ({
    ...rating,
    heroes: heroItemsFromEntries(
      entries
        .filter((entry) => entry.rating === rating.key)
        .map((entry) => ({
          body: entry.body,
          id: entry.target,
          note: entry.note,
        })),
    ),
  }))

function HeroButton(
  props: { hero: Hero; note?: string; selected?: boolean; onClick: () => void },
) {
  const [tooltip, setTooltip] = createSignal<TooltipState>()
  let noteRef: HTMLSpanElement | undefined
  let tooltipRef: HTMLSpanElement | undefined
  let tooltipFrame = 0
  const placeTooltip = (note: string, height = 0) => {
    if (!noteRef) return
    const margin = 8
    const gap = 4
    const rect = noteRef.getBoundingClientRect()
    const width = Math.min(
      240,
      Math.max(0, globalThis.innerWidth - margin * 2),
    )
    const left = Math.min(
      Math.max(rect.right - width, margin),
      globalThis.innerWidth - width - margin,
    )
    const lowerTop = rect.bottom + gap
    const upperTop = rect.top - height - gap
    const top =
      height > 0 && lowerTop + height > globalThis.innerHeight - margin
        ? Math.max(margin, upperTop)
        : lowerTop
    setTooltip({ left, note, top, width })
  }
  const showTooltip = () => {
    const note = props.note
    if (!note) return
    cancelAnimationFrame(tooltipFrame)
    placeTooltip(note)
    tooltipFrame = requestAnimationFrame(() => {
      const height = tooltipRef?.getBoundingClientRect().height ?? 0
      placeTooltip(note, height)
    })
  }
  const hideTooltip = () => {
    cancelAnimationFrame(tooltipFrame)
    setTooltip()
  }
  onCleanup(() => cancelAnimationFrame(tooltipFrame))

  return (
    <button
      class="hero-button"
      classList={{
        "is-selected": props.selected,
        [`role-${props.hero.role}`]: true,
      }}
      onBlur={hideTooltip}
      onClick={props.onClick}
      onFocus={showTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      title={props.hero.name}
      type="button"
    >
      <img
        alt={props.hero.name}
        loading="lazy"
        referrerpolicy="no-referrer"
        src={props.hero.avatar}
      />
      <span>{props.hero.name}</span>
      <Show when={props.note}>
        {(note) => (
          <span
            aria-label={`추천 주석: ${note()}`}
            class="info-note"
            data-note={note()}
            ref={noteRef}
          >
            i
            <Show when={tooltip()}>
              {(tip) => (
                <span
                  class="tooltip"
                  ref={tooltipRef}
                  role="tooltip"
                  style={{
                    left: `${tip().left}px`,
                    top: `${tip().top}px`,
                    width: `${tip().width}px`,
                  }}
                >
                  {tip().note}
                </span>
              )}
            </Show>
          </span>
        )}
      </Show>
    </button>
  )
}

function HeroPicker(
  props: { selectedId: string; onSelect: (id: string) => void },
) {
  return (
    <section class="pick" aria-label="영웅 선택">
      <For each={roles}>
        {(role) => (
          <div class="role hero-role" style={{ "--role-color": role.color }}>
            <div class="label">{role.label}</div>
            <div class="grid">
              <For
                each={heroes.filter((hero) =>
                  hero.role === role.key
                )}
              >
                {(hero) => (
                  <HeroButton
                    hero={hero}
                    onClick={() => props.onSelect(hero.id)}
                    selected={props.selectedId === hero.id}
                  />
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </section>
  )
}

function MapPicker(
  props: { selectedId: string; onSelect: (id: string) => void },
) {
  return (
    <section class="pick" aria-label="맵 선택">
      <For each={mapModes}>
        {(mode) => (
          <div class="role map-mode" style={{ "--mode-color": mode.color }}>
            <div class="label">{mode.label}</div>
            <div class="map-list">
              <For each={mode.maps}>
                {(map) => (
                  <button
                    class="map-button"
                    classList={{ "is-selected": props.selectedId === map.id }}
                    disabled={!hasMapRecommendations(map)}
                    onClick={() => props.onSelect(map.id)}
                    style={{ "--mode-color": mode.color }}
                    title={hasMapRecommendations(map)
                      ? map.name
                      : "추천 영웅 데이터 없음"}
                    type="button"
                  >
                    <img
                      alt={map.name}
                      loading="lazy"
                      referrerpolicy="no-referrer"
                      src={map.image}
                    />
                    <span>{map.name}</span>
                  </button>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </section>
  )
}

function HeroRows(
  props: {
    groups: { key?: string; label: string; heroes: HeroRowItem[] }[]
    onSelect?: (entry: HeroRowItem) => void
    selectedId?: string
    showNotes?: boolean
  },
) {
  return (
    <For each={props.groups}>
      {(group) => (
        <Show when={group.heroes.length > 0}>
          <div class={`row ${group.key ?? ""}`}>
            <div class="label">{group.label}</div>
            <div class="grid small">
              <For each={group.heroes}>
                {(entry) => (
                  <HeroButton
                    hero={entry.hero}
                    note={props.showNotes ? entry.note : undefined}
                    onClick={() => props.onSelect?.(entry)}
                    selected={props.selectedId === entry.hero.id}
                  />
                )}
              </For>
            </div>
          </div>
        </Show>
      )}
    </For>
  )
}

function NamuTitle(props: { href: string; name: string; updatedAt?: string }) {
  const updatedAt = createMemo(() => formattedUpdatedAt(props.updatedAt))

  return (
    <a
      class="selected-title"
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      <strong>{props.name}</strong>
      <span class="selected-title-meta">
        <span aria-hidden="true" class="selected-title-icon" />
        <Show when={updatedAt()}>
          {(value) => <span>마지막 업데이트: {value()}</span>}
        </Show>
      </span>
    </a>
  )
}

function GuideDetail(props: { entry: HeroRowItem }) {
  const paragraphs = createMemo(() =>
    props.entry.body?.split(/\n{2,}/).filter(Boolean) ?? []
  )

  return (
    <article class="guide-detail">
      <div class="guide-detail-title">
        <img
          alt={props.entry.hero.name}
          referrerpolicy="no-referrer"
          src={props.entry.hero.avatar}
        />
        <NamuTitle
          href={props.entry.hero.page}
          name={props.entry.hero.name}
          updatedAt={props.entry.hero.updatedAt}
        />
      </div>
      <div class="guide-detail-body">
        <For each={paragraphs()}>
          {(paragraph) => <p>{paragraph}</p>}
        </For>
      </div>
    </article>
  )
}

function GuideDetailPanel(props: { entry: HeroRowItem }) {
  return (
    <section class="pick guide-detail-panel" aria-label="영웅 문서 본문">
      <GuideDetail entry={props.entry} />
    </section>
  )
}

function GuidePanel(props: {
  hero: Hero | undefined
  groups: { key?: string; label: string; heroes: HeroRowItem[] }[]
  onSelect: (entry: HeroRowItem) => void
  selectedDetailId: string | undefined
}) {
  return (
    <Show when={props.hero}>
      {(hero) => (
        <>
          <div class="selected-hero">
            <img
              alt={hero().name}
              referrerpolicy="no-referrer"
              src={hero().avatar}
            />
            <NamuTitle
              href={hero().page}
              name={hero().name}
              updatedAt={hero().updatedAt}
            />
          </div>
          <HeroRows
            groups={props.groups}
            onSelect={props.onSelect}
            selectedId={props.selectedDetailId}
          />
        </>
      )}
    </Show>
  )
}

function MapPanel(props: { mapId: string }) {
  const selectedMap = createMemo(() =>
    allMaps.find((map) => map.id === props.mapId) ?? allMaps[0]
  )
  const recommendationGroups = createMemo(() => {
    const map = selectedMap()
    return map
      ? [
        {
          key: "attack",
          label: "공격 추천",
          heroes: heroItemsFromEntries(map.attack),
        },
        {
          key: "defense",
          label: "방어 추천",
          heroes: heroItemsFromEntries(map.defense),
        },
      ]
      : []
  })
  const hasRecommendations = createMemo(() =>
    recommendationGroups().some((group) => group.heroes.length > 0)
  )

  return (
    <Show when={selectedMap()}>
      {(map) => (
        <>
          <div
            class="selected-map"
            style={{ "--mode-color": map().mode.color }}
          >
            <img
              alt={map().name}
              referrerpolicy="no-referrer"
              src={map().image}
            />
            <div>
              <span>{map().mode.label}</span>
              <NamuTitle
                href={map().page}
                name={map().name}
                updatedAt={map().updatedAt}
              />
            </div>
          </div>
          <Show
            when={hasRecommendations()}
            fallback={<div class="empty-state">추천 영웅 데이터 없음</div>}
          >
            <HeroRows groups={recommendationGroups()} showNotes />
          </Show>
        </>
      )}
    </Show>
  )
}

function App() {
  const [state, setState] = createStore(readQueryState())
  const [noticeOpen, setNoticeOpen] = createSignal(false)
  const [selectedGuideTarget, setSelectedGuideTarget] = createSignal<string>()
  const selectedHero = createMemo(() => heroById.get(state.heroId))
  const setActiveView = (view: View) => {
    setSelectedGuideTarget()
    setState("view", view)
  }
  const setSelectedId = (heroId: string) => {
    setSelectedGuideTarget()
    setState("heroId", heroId)
  }
  const setSelectedMapId = (mapId: string) => setState("mapId", mapId)
  const setGuideDetail = (entry: HeroRowItem) =>
    setSelectedGuideTarget((current) =>
      current === entry.hero.id ? undefined : entry.hero.id
    )

  createEffect(() => {
    writeQueryState({
      view: state.view,
      heroId: state.heroId,
      mapId: state.mapId,
    })
  })

  const applyQueryState = () => {
    setSelectedGuideTarget()
    setState(readQueryState())
  }

  onMount(() => {
    globalThis.addEventListener("popstate", applyQueryState)
  })

  onCleanup(() => {
    globalThis.removeEventListener("popstate", applyQueryState)
  })
  const matchupGroups = createMemo(() =>
    heroGroupsByRating(ratingOrder, matchups[state.heroId])
  )
  const synergyGroups = createMemo(() =>
    heroGroupsByRating(synergyRatings, heroSynergies[state.heroId])
  )
  const guideGroups = createMemo(() =>
    state.view === "matchups" ? matchupGroups() : synergyGroups()
  )
  const detailEntry = createMemo(() =>
    guideGroups()
      .flatMap((group) => group.heroes)
      .find((entry) =>
        entry.hero.id === selectedGuideTarget() && Boolean(entry.body)
      )
  )

  return (
    <main class="app">
      <nav class="navbar" aria-label="주요 메뉴">
        <strong>OWC</strong>
        <For each={views}>
          {(view) => {
            const disabled = view.key === "maps" && !hasAnyMapRecommendations
            return (
              <button
                class="nav-button"
                classList={{ "is-selected": state.view === view.key }}
                disabled={disabled}
                onClick={() => !disabled && setActiveView(view.key)}
                title={disabled ? "추천 영웅 데이터 없음" : view.label}
                type="button"
              >
                {view.label}
              </button>
            )
          }}
        </For>
      </nav>

      <div class="workspace">
        <Show
          when={state.view === "maps"}
          fallback={
            <Show
              when={detailEntry()}
              fallback={
                <HeroPicker
                  selectedId={state.heroId}
                  onSelect={setSelectedId}
                />
              }
            >
              {(entry) => <GuideDetailPanel entry={entry()} />}
            </Show>
          }
        >
          <MapPicker selectedId={state.mapId} onSelect={setSelectedMapId} />
        </Show>

        <section class="result" aria-label={state.view}>
          <Show
            when={state.view === "maps"}
            fallback={
              <GuidePanel
                hero={selectedHero()}
                groups={guideGroups()}
                onSelect={setGuideDetail}
                selectedDetailId={detailEntry()?.hero.id}
              />
            }
          >
            <MapPanel mapId={state.mapId} />
          </Show>
        </section>
      </div>

      <footer>
        비공식 팬 도구 · Overwatch assets © Blizzard · 데이터:{" "}
        <a href={guideSource.url} rel="noreferrer" target="_blank">
          {guideSource.name}
        </a>{" "}
        {guideSource.updatedAt} ·{" "}
        <button
          class="footer-link"
          onClick={() => setNoticeOpen(true)}
          type="button"
        >
          NOTICE
        </button>{" "}
        · <a href="./LICENSE">LICENSE</a>
      </footer>

      <Show when={noticeOpen()}>
        <div
          aria-labelledby="notice-title"
          aria-modal="true"
          class="modal-backdrop"
          onClick={() => setNoticeOpen(false)}
          role="dialog"
        >
          <div class="modal" onClick={(event) => event.stopPropagation()}>
            <div class="modal-header">
              <strong id="notice-title">NOTICE</strong>
              <button
                aria-label="NOTICE 닫기"
                class="modal-close"
                onClick={() => setNoticeOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>
            <p>
              Unofficial fan tool. Overwatch assets © Blizzard Entertainment.
              Data source: {guideSource.name} ({guideSource.url}), updated{" "}
              {guideSource.updatedAt}. Code: AGPL-3.0-or-later, no warranty.
            </p>
          </div>
        </div>
      </Show>
    </main>
  )
}

export default App
