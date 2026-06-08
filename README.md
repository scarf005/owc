# OWC

오버워치 영웅 상성 선택기 (OverWatch Counter)

## 개발

```sh
deno task crawl:guide
deno task dev
deno task test
deno task pre-commit
deno task validate
```

## Git hooks

```sh
git config core.hooksPath .githooks
```

pre-commit hook은 `deno task pre-commit`으로 fmt, lint, test를 실행합니다.

## 고지

- 비공식 팬 도구이며 Blizzard Entertainment와 무관합니다. Overwatch, 영웅 이름, 영웅 이미지와 관련 자산은 Blizzard Entertainment의 소유입니다.
- [나무위키](https://namu.wiki) 데이터를 사용합니다.
- `src/data/*.json`은 `deno task crawl:guide`로 생성하며 추적하지 않습니다. CI는 생성된 데이터를 `guide-data` artifact로 보관하고, 나무위키 차단 시 해당 cache를 먼저 사용한 뒤 없으면 `deno task restore:guide` seed를 사용합니다.
