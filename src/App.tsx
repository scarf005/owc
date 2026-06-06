import "./App.css"
import { createMemo, createSignal, For, Match, Show, Switch } from "solid-js"
import {
  type Hero,
  heroes,
  matchups,
  type Rating,
  type Role,
} from "./data/overwatch.ts"

const roles: { key: Role; label: string }[] = [
  { key: "tank", label: "돌격" },
  { key: "damage", label: "공격" },
  { key: "support", label: "지원" },
]

const ratingOrder: { key: Rating; label: string }[] = [
  { key: "veryBad", label: "매우 불리" },
  { key: "bad", label: "불리" },
  { key: "neutral", label: "중립" },
  { key: "good", label: "유리" },
  { key: "veryGood", label: "매우 유리" },
]

const roleLabel = (role: Role) =>
  roles.find((item) => item.key === role)?.label ?? role

const heroById = new Map(heroes.map((hero) => [hero.id, hero]))

function HeroTile(
  props: { hero: Hero; selected?: boolean; onClick: () => void },
) {
  return (
    <button
      class="hero-tile"
      classList={{ selected: props.selected }}
      onClick={props.onClick}
      title={props.hero.name}
      type="button"
    >
      <span class="portrait-frame">
        <img
          alt={props.hero.name}
          loading="lazy"
          referrerpolicy="no-referrer"
          src={props.hero.avatar}
        />
      </span>
      <span>{props.hero.name}</span>
    </button>
  )
}

function App() {
  const [selectedId, setSelectedId] = createSignal(heroes[0]?.id ?? "")
  const selectedHero = createMemo(() => heroById.get(selectedId()))
  const selectedMatchups = createMemo(() => matchups[selectedId()] ?? [])
  const grouped = createMemo(() =>
    ratingOrder.map((rating) => ({
      ...rating,
      heroes: selectedMatchups()
        .filter((matchup) => matchup.rating === rating.key)
        .map((matchup) => ({ ...matchup, hero: heroById.get(matchup.target) }))
        .filter((matchup): matchup is typeof matchup & { hero: Hero } =>
          Boolean(matchup.hero)
        ),
    }))
  )

  return (
    <main class="shell">
      <section class="hero-panel" aria-label="영웅 선택">
        <For each={roles}>
          {(role) => (
            <div class="role-block">
              <div class="role-label">{role.label}</div>
              <div class="hero-grid">
                <For each={heroes.filter((hero) => hero.role === role.key)}>
                  {(hero) => (
                    <HeroTile
                      hero={hero}
                      onClick={() => setSelectedId(hero.id)}
                      selected={selectedId() === hero.id}
                    />
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </section>

      <section class="counter-panel" aria-label="상성">
        <Switch>
          <Match when={selectedHero()}>
            {(hero) => (
              <>
                <div class="selected-card">
                  <img
                    alt={hero().name}
                    referrerpolicy="no-referrer"
                    src={hero().avatar}
                  />
                  <div>
                    <strong>{hero().name}</strong>
                    <span>{roleLabel(hero().role)}</span>
                  </div>
                </div>

                <div class="rating-stack">
                  <For each={grouped()}>
                    {(group) => (
                      <Show when={group.heroes.length > 0}>
                        <div class={`rating-row ${group.key}`}>
                          <div class="rating-label">{group.label}</div>
                          <div class="counter-grid">
                            <For each={group.heroes}>
                              {(matchup) => (
                                <HeroTile
                                  hero={matchup.hero}
                                  onClick={() => setSelectedId(matchup.hero.id)}
                                />
                              )}
                            </For>
                          </div>
                        </div>
                      </Show>
                    )}
                  </For>
                </div>
              </>
            )}
          </Match>
          <Match when>
            <div class="empty">영웅</div>
          </Match>
        </Switch>
      </section>
    </main>
  )
}

export default App
