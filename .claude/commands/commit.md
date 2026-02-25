다음 단계를 순서대로 실행해서 커밋을 생성해줘.

1. `git status`로 변경된 파일 목록 확인
2. staged 파일 여부 판단:
   - **staged 파일이 있으면**: `git diff --cached`로 staged 변경 내용만 분석. 추가 스테이징 없이 그대로 사용.
   - **staged 파일이 없으면**: `git diff`로 전체 변경 내용 분석 후 관련 파일만 선택적으로 스테이징 (민감 파일 제외)
3. `git log --oneline -5`로 최근 커밋 스타일 참고
4. `.claude/rules/commit-convention.md` 규칙을 따라 커밋 메시지 작성:
   - 형식: `<type>(<scope>): <subject>`
   - 영어로 작성
   - subject는 명령형, 소문자, 마침표 없음
5. 커밋 생성

$ARGUMENTS 가 있으면 추가 지시로 활용해줘 (예: 특정 파일만, 특정 타입 강제 등).
