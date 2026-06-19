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
- `src/data/*.json`은 `deno task crawl:guide`로 생성하며 CI crawl 차단 시 쓰는 추적 fallback입니다. `public/guide-images`도 같은 fallback입니다. CI는 crawl 실패 시 저장소 fallback을 먼저 쓰고, 없을 때만 `guide-data` artifact 또는 `deno task restore:guide` seed를 사용합니다.
