import "./App.css"
import {
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import {
  heroSynergies,
  mapModes,
  type MapRecommendation,
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
type HeroRowItem = { hero: Hero; note?: string }

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
  entries: { id: string; note?: string }[],
): HeroRowItem[] => {
  const items: HeroRowItem[] = []
  for (const entry of entries) {
    const hero = heroById.get(entry.id)
    if (hero) items.push({ hero, ...(entry.note ? { note: entry.note } : {}) })
  }
  return items
}

const heroItemsFromMapRecommendations = (
  entries: MapRecommendation[],
): HeroRowItem[] => heroItemsFromEntries(entries)

function HeroButton(
  props: { hero: Hero; note?: string; selected?: boolean; onClick: () => void },
) {
  return (
    <button
      class="hero-button"
      classList={{ "is-selected": props.selected }}
      onClick={props.onClick}
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
            title={note()}
          >
            i
            <span class="tooltip" role="tooltip">{note()}</span>
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
    onSelect?: (id: string) => void
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
                    note={entry.note}
                    onClick={() => props.onSelect?.(entry.hero.id)}
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

function GuidePanel(props: {
  hero: Hero | undefined
  groups: { key?: string; label: string; heroes: HeroRowItem[] }[]
  onSelect: (id: string) => void
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
            <a
              class="selected-title"
              href={hero().page}
              rel="noreferrer"
              target="_blank"
            >
              <strong>{hero().name}</strong>
            </a>
          </div>
          <HeroRows groups={props.groups} onSelect={props.onSelect} />
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
          label: "공격",
          heroes: heroItemsFromMapRecommendations(map.attack),
        },
        {
          key: "defense",
          label: "방어",
          heroes: heroItemsFromMapRecommendations(map.defense),
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
              <a
                class="selected-title"
                href={map().page}
                rel="noreferrer"
                target="_blank"
              >
                <strong>{map().name}</strong>
              </a>
            </div>
          </div>
          <Show
            when={hasRecommendations()}
            fallback={<div class="empty-state">추천 영웅 데이터 없음</div>}
          >
            <HeroRows groups={recommendationGroups()} />
          </Show>
        </>
      )}
    </Show>
  )
}

function App() {
  const initialState = readQueryState()
  const [activeView, setActiveView] = createSignal<View>(initialState.view)
  const [selectedId, setSelectedId] = createSignal(initialState.heroId)
  const [selectedMapId, setSelectedMapId] = createSignal(initialState.mapId)
  const [noticeOpen, setNoticeOpen] = createSignal(false)
  const selectedHero = createMemo(() => heroById.get(selectedId()))
  let resultRef: HTMLElement | undefined
  let fitFrame = 0
  const setCounterSize = (size: number) => {
    resultRef?.style.setProperty("--counter-icon", `${size}px`)
    resultRef?.style.setProperty(
      "--counter-cell",
      `${Math.max(38, size - 2)}px`,
    )
  }
  const counterSizeFits = (size: number) => {
    if (!resultRef) return true
    setCounterSize(size)
    return resultRef.scrollHeight <= resultRef.clientHeight
  }
  const fitCounterSize = () => {
    if (!resultRef) return
    const max = globalThis.matchMedia?.("(max-width: 1500px)").matches ? 56 : 64
    const min = 34

    if (counterSizeFits(max)) return

    let low = min
    let high = max
    let best = min
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (counterSizeFits(mid)) {
        best = mid
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    setCounterSize(best)
  }
  const queueFitCounterSize = () => {
    cancelAnimationFrame(fitFrame)
    fitFrame = requestAnimationFrame(() => {
      fitFrame = requestAnimationFrame(fitCounterSize)
    })
  }

  createRenderEffect(() => {
    selectedId()
    selectedMapId()
    activeView()
    fitCounterSize()
  })

  createEffect(() => {
    writeQueryState({
      view: activeView(),
      heroId: selectedId(),
      mapId: selectedMapId(),
    })
  })

  const applyQueryState = () => {
    const state = readQueryState()
    setActiveView(state.view)
    setSelectedId(state.heroId)
    setSelectedMapId(state.mapId)
  }

  onMount(() => {
    globalThis.addEventListener("resize", queueFitCounterSize)
    globalThis.addEventListener("popstate", applyQueryState)
    queueFitCounterSize()
  })

  onCleanup(() => {
    cancelAnimationFrame(fitFrame)
    globalThis.removeEventListener("resize", queueFitCounterSize)
    globalThis.removeEventListener("popstate", applyQueryState)
  })
  const matchupGroups = createMemo(() =>
    ratingOrder.map((rating) => ({
      ...rating,
      heroes: heroItemsFromEntries(
        (matchups[selectedId()] ?? [])
          .filter((matchup) => matchup.rating === rating.key)
          .map((matchup) => ({ id: matchup.target, note: matchup.note })),
      ),
    }))
  )
  const synergyGroups = createMemo(() =>
    synergyRatings.map((rating) => ({
      key: rating.key,
      label: rating.label,
      heroes: heroItemsFromEntries(
        (heroSynergies[selectedId()] ?? [])
          .filter((entry) => entry.rating === rating.key)
          .map((entry) => ({ id: entry.target, note: entry.note })),
      ),
    }))
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
                classList={{ "is-selected": activeView() === view.key }}
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
          when={activeView() === "maps"}
          fallback={
            <HeroPicker selectedId={selectedId()} onSelect={setSelectedId} />
          }
        >
          <MapPicker selectedId={selectedMapId()} onSelect={setSelectedMapId} />
        </Show>

        <section class="result" aria-label={activeView()} ref={resultRef}>
          <Show when={activeView() === "matchups"}>
            <GuidePanel
              hero={selectedHero()}
              groups={matchupGroups()}
              onSelect={setSelectedId}
            />
          </Show>
          <Show when={activeView() === "synergies"}>
            <GuidePanel
              hero={selectedHero()}
              groups={synergyGroups()}
              onSelect={setSelectedId}
            />
          </Show>
          <Show when={activeView() === "maps"}>
            <MapPanel mapId={selectedMapId()} />
          </Show>
        </section>
      </div>

      <footer>
        비공식 팬 도구 · Overwatch assets © Blizzard ·{" "}
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
              Data sourced from Namu Wiki (https://namu.wiki). Code:
              AGPL-3.0-or-later, no warranty.
            </p>
          </div>
        </div>
      </Show>
    </main>
  )
}

export default App
