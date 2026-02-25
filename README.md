# Coffee Diary

커피 레시피 기록 서비스

## Tech Stack

|              |                                  |
| ------------ | -------------------------------- |
| **Frontend** | React 19, TypeScript, Vite (SWC) |
| **Backend**  | NestJS 11, TypeScript            |
| **Monorepo** | pnpm workspaces, Turborepo       |

## Project Structure

```
coffee-diary/
├── apps/
│   ├── frontend/        # React 클라이언트
│   └── backend/         # NestJS API 서버
└── packages/
    └── tsconfig/        # 공유 TypeScript 설정
```

## Getting Started

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (frontend + backend 동시)
pnpm dev
```

| 서버     | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:3000 |

## Commands

```bash
pnpm dev      # 개발 서버
pnpm build    # 빌드
pnpm lint     # 린트
pnpm test     # 테스트
```

특정 앱만 실행:

```bash
pnpm --filter frontend dev
pnpm --filter backend dev
```
