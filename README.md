# OWC

오버워치 영웅 상성 선택기입니다.

## 개발

```sh
deno task dev
deno task crawl:namu
deno task test
deno task validate
```

## 데이터

`deno task crawl:namu`가 나무위키 영웅 문서의 상성/궁합과 주석, 전장 목록의 모드·전장·이미지, 전장별 문서의 공격/방어 추천 영웅과 주석을 재생성합니다. 상성 등급은 문서 항목의 첫 등급 표기를 사용하고, 궁합 등급은 본문 키워드로 자동 분류합니다. 전장 문서에 추천 영웅 표기가 없는 맵은 비활성화합니다.

## 배포

정적 사이트입니다. `deno task build` 후 `dist/`를 GitHub Pages, Netlify, Cloudflare Pages, Vercel 등 정적 호스팅에 올리면 됩니다.

GitHub Pages는 `.github/workflows/deploy.yml`이 `main` 푸시마다 빌드하고 `dist/`를 배포합니다. 저장소 Settings → Pages에서 Source를 GitHub Actions로 설정하세요.

## 고지

비공식 팬 도구이며 Blizzard Entertainment와 무관합니다. Overwatch, 영웅 이름, 영웅 이미지와 관련 자산은 Blizzard Entertainment의 소유입니다.

소스 코드는 AGPL-3.0-or-later로 제공되며 보증은 없습니다. 배포 산출물에는 `NOTICE.txt`와 `LICENSE`가 포함됩니다.
