import { parse } from "jsr:@std/jsonc@1/parse"

const readLocalJsonc = (path: string) => {
  const deno = (globalThis as typeof globalThis & {
    Deno?: { readTextFileSync: (path: URL) => string }
  }).Deno
  return deno?.readTextFileSync(new URL(path, import.meta.url))
}

export const loadJsonc = async <T>(path: string, browserUrl: URL) => {
  const local = readLocalJsonc(path)
  const source = local ?? await fetch(browserUrl).then((response) => {
    if (!response.ok) throw new Error(`${response.status} ${browserUrl.href}`)
    return response.text()
  })
  return parse(source) as T
}
