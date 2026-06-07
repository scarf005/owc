# OWC

오버워치 영웅 상성 선택기 (OverWatch Counter)

## 개발

```sh
deno task dev
deno task crawl:namu
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
- `src/data/*.json`의 나무위키 기반 데이터는 나무위키의 라이선스 조건을 따릅니다.
