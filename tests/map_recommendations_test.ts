import { assertEquals } from "@std/assert"
import { parseMapRecommendations } from "../scripts/crawl-guide-data.ts"

Deno.test("general map recommendations apply to both sides and resolve Korean hero names", () => {
  const recommendations = parseMapRecommendations(
    "<tr><td><strong>추천 영웅</strong></td><td>자리야, 디몬, 파라, 안란, 아나, 우양</td></tr>",
  )
  const expected = ["zarya", "d-mon", "pharah", "anran", "ana", "wuyang"]
    .map((id) => ({ id }))
  assertEquals(recommendations, { attack: expected, defense: expected })
})

Deno.test("directional map recommendations preserve linked heroes and footnotes", () => {
  const recommendations = parseMapRecommendations(
    "<tr><td>공격 추천</td><td><a href='/w/D.Va'>D.Va</a><a href='#fn-1' title='고지대 활용'>[1]</a></td></tr>" +
      "<tr><td>수비 추천</td><td><a href='/w/아나'>아나</a></td></tr>",
  )
  assertEquals(recommendations, {
    attack: [{ id: "d-va", note: "고지대 활용" }],
    defense: [{ id: "ana" }],
  })
})

Deno.test("missing map recommendations remain empty instead of inventing heroes", () => {
  assertEquals(
    parseMapRecommendations("<tr><td>추천 영웅</td><td>작성 예정</td></tr>"),
    { attack: [], defense: [] },
  )
})
