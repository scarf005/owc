/// <reference lib="deno.ns" />

const files = [
  {
    path: "src/data/guide.json",
    url:
      "https://gist.githubusercontent.com/scarf005/4dfcea6825222384fc3ee3ba535d1afe/raw/3819fdbc7eb5550bb0c1eb0c40fd33bb30e0ada1/guide.json",
  },
  {
    path: "src/data/overwatch.json",
    url:
      "https://gist.githubusercontent.com/scarf005/4dfcea6825222384fc3ee3ba535d1afe/raw/a740774a6b736b344809824bac167119eb21f86c/overwatch.json",
  },
]

for (const file of files) {
  const response = await fetch(file.url)
  if (!response.ok) throw new Error(`${response.status} ${file.url}`)
  await Deno.writeTextFile(file.path, `${await response.text()}\n`)
  console.error(`restored ${file.path}`)
}
