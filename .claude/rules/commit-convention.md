# Commit Convention

Conventional Commits 스펙을 따른다.

## 형식

```
<type>(<scope>): <subject>

[body]

[footer]
```

- **subject**: 영문 소문자, 명령형, 마침표 없음
- **body / footer**: 필요할 때만 작성

## Type

| type | 사용 시점 |
|------|-----------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `chore` | 빌드 설정, 패키지 관리, 기타 잡무 |
| `docs` | 문서만 변경 |
| `style` | 포맷, 세미콜론 등 로직 변경 없는 코드 스타일 |
| `refactor` | 기능 변경 없는 코드 리팩터링 |
| `test` | 테스트 추가 또는 수정 |
| `perf` | 성능 개선 |
| `ci` | CI/CD 설정 변경 |
| `revert` | 이전 커밋 되돌리기 |

## Scope (선택)

변경 영향 범위를 괄호 안에 표기한다.

| scope | 대상 |
|-------|------|
| `frontend` | apps/frontend |
| `backend` | apps/backend |
| `prisma` | 데이터베이스 스키마 / Prisma 설정 |
| `auth` | 인증·인가 관련 |
| `api` | API 엔드포인트 |
| `config` | 환경 설정 |
| `tsconfig` | TypeScript 설정 |

## 예시

```
feat(auth): add JWT refresh token rotation
fix(api): handle null response from coffee external API
chore(prisma): add User and CoffeeLog models
docs: update README with setup instructions
refactor(backend): extract PrismaService to shared module
test(api): add e2e tests for diary endpoints
```

## 규칙

- **커밋 메시지(type, scope, subject, body, footer)는 모두 영어로 작성한다**
- 한 커밋은 하나의 논리적 변경만 포함한다
- Breaking change는 footer에 `BREAKING CHANGE:` 로 명시한다
- 이슈 참조는 footer에 `Closes #123` 형태로 작성한다
