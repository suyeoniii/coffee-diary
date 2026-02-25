# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

pnpm@9.0.0 필수. npm이나 yarn 사용 금지.

## Commands

```bash
# 의존성 설치
pnpm install

# 개발 서버 (frontend + backend 동시 실행)
pnpm dev

# 빌드
pnpm build

# 린트
pnpm lint

# 테스트 (전체)
pnpm test

# 특정 앱만 실행
pnpm --filter frontend dev
pnpm --filter backend dev

# backend 단독 테스트
pnpm --filter backend test
pnpm --filter backend test:e2e
```

## Architecture

pnpm workspaces + Turborepo 모노레포.

```
coffee-diary/
├── apps/
│   ├── frontend/   # React 19 + Vite (SWC) — localhost:5173
│   └── backend/    # NestJS 11 — localhost:3000
└── packages/
    └── tsconfig/   # 공유 TypeScript 설정 (@coffee-diary/tsconfig)
```

## TypeScript 설정 구조

tsconfig 상속 체인:

- **frontend**: `tsconfig.json` → `tsconfig.base.json` → `packages/tsconfig/base.json`
- **backend (dev/build)**: `tsconfig.build.json` → `tsconfig.json` → `tsconfig.base.json` → `packages/tsconfig/base.json`

NestJS 데코레이터를 위해 backend `tsconfig.json`에 `experimentalDecorators: true`, `emitDecoratorMetadata: true` 필수.
`nest start --watch`는 `tsconfig.json`이 아니라 `tsconfig.build.json`을 사용함.

Frontend `tsconfig.json`에 `allowImportingTsExtensions: true`, `noEmit: true` 필수 (Vite가 트랜스파일 담당).

## Turborepo

- `tasks.dev`: `cache: false`, `persistent: true` (장기 실행 프로세스)
- `tasks.build`: `dependsOn: ["^build"]` (패키지 의존 순서 보장)
