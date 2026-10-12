default:
    @just --list

dev:
    deno task dev

check:
    deno task check

test:
    deno task test

pre-commit:
    deno task pre-commit

validate:
    deno task validate

build:
    deno task build

crawl:
    deno task crawl:guide

# 수집·검증 후 DB·이미지·스냅샷을 커밋합니다. 변경 사항이 있으면 시작하지 않습니다.
update-db:
    deno run --allow-read=. --allow-write=. --allow-run=git,deno,gio scripts/update-guide-data.ts

# 수집·검증 후 데이터가 바뀌었으면 guide-data release를 게시합니다.
publish:
    deno task publish:guide
