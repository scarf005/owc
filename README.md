# OWC

오버워치 영웅 상성 선택기 (OverWatch Counter)

## 개발

```sh
just             # 명령 목록
just dev
just check
just test
just pre-commit
just validate
just build
just crawl       # 수집만 실행
just update-db   # 수집·검증 후 DB·이미지·스냅샷 커밋
```

`just update-db`는 Deno, Git, curl, `gio`가 필요하며 깨끗한 작업 트리에서만 실행합니다. 수집 실패 시 기존 DB를 유지합니다. 갱신된 데이터로 이미지·탭 상호작용 스냅샷을 재생성한 뒤 전체 검증을 실행하며, 변경이 없으면 커밋하지 않습니다. 검증이나 커밋 훅이 실패하면 갱신된 파일을 남기고 중단합니다. 기존 커밋 훅을 실행하며 push는 하지 않습니다. 검증 태스크의 하위 프로세스는 기존 `-A` 권한을 사용합니다.

## Git hooks

```sh
git config core.hooksPath .githooks
```

pre-commit hook은 `deno task pre-commit`으로 fmt, lint, test를 실행합니다.

## 고지

- 비공식 팬 도구이며 Blizzard Entertainment와 무관합니다. Overwatch, 영웅 이름, 영웅 이미지와 관련 자산은 Blizzard Entertainment의 소유입니다.
- [나무위키](https://namu.wiki) 데이터를 사용합니다.
- `src/data/*.json`은 `deno task crawl:guide`로 생성하며 CI crawl 차단 시 쓰는 추적 fallback입니다. `public/guide-images`도 같은 fallback입니다. CI는 crawl 실패 시 저장소 fallback을 먼저 쓰고, 없을 때만 `guide-data` artifact 또는 `deno task restore:guide` seed를 사용합니다.
