import "./App.css"
import { createMemo, createSignal, For, Show } from "solid-js"
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

const heroById = new Map(heroes.map((hero) => [hero.id, hero]))

function HeroButton(
  props: { hero: Hero; selected?: boolean; onClick: () => void },
) {
  return (
    <button
      class="hero-button"
      classList={{ selected: props.selected }}
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
    </button>
  )
}

function App() {
  const [selectedId, setSelectedId] = createSignal(heroes[0]?.id ?? "")
  const selectedHero = createMemo(() => heroById.get(selectedId()))
  const grouped = createMemo(() =>
    ratingOrder.map((rating) => ({
      ...rating,
      heroes: (matchups[selectedId()] ?? [])
        .filter((matchup) => matchup.rating === rating.key)
        .map((matchup) => heroById.get(matchup.target))
        .filter((hero): hero is Hero => Boolean(hero)),
    }))
  )

  return (
    <main class="app">
      <section class="pick" aria-label="영웅 선택">
        <For each={roles}>
          {(role) => (
            <div class="role">
              <div class="label">{role.label}</div>
              <div class="grid">
                <For each={heroes.filter((hero) => hero.role === role.key)}>
                  {(hero) => (
                    <HeroButton
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

      <section class="result" aria-label="상성">
        <Show when={selectedHero()}>
          {(hero) => (
            <>
              <div class="selected">
                <img
                  alt={hero().name}
                  referrerpolicy="no-referrer"
                  src={hero().avatar}
                />
                <strong>{hero().name}</strong>
              </div>

              <For each={grouped()}>
                {(group) => (
                  <Show when={group.heroes.length > 0}>
                    <div class={`row ${group.key}`}>
                      <div class="label">{group.label}</div>
                      <div class="grid small">
                        <For each={group.heroes}>
                          {(hero) => (
                            <HeroButton
                              hero={hero}
                              onClick={() => setSelectedId(hero.id)}
                            />
                          )}
                        </For>
                      </div>
                    </div>
                  </Show>
                )}
              </For>
            </>
          )}
        </Show>
      </section>

      <footer>
        비공식 팬 도구 · Overwatch assets © Blizzard ·{" "}
        <a href="./NOTICE.txt">NOTICE</a> · <a href="./LICENSE">LICENSE</a>
      </footer>
    </main>
  )
}

export default App
