# 2️⃣ router-app-team-2

## 🚀 프로젝트 시작 방법

```bash
npm install
npm run dev
```

## 🌱 Git 브랜치 전략

- 모든 작업은 `main` 브랜치에서 각자의 **담당 기능명 기반 브랜치**를 만들어 시작합니다.
  - 브랜치 이름 예시: `{이름}/post-detail`
- 기능 구현이 완료되면 `main` 브랜치로 **Pull Request(PR)**를 생성합니다.
- 리뷰가 승인되면 `main` 브랜치로 **Squash and Merge** 방식으로 병합합니다.
- 병합 후에는 **전체 기능이 정상 작동하는지** 반드시 확인합니다.

---

## 💬 커밋 메시지 컨벤션

| 태그        | 설명                           |
| ----------- | ------------------------------ |
| `feat:`     | 새로운 기능 추가               |
| `fix:`      | 버그 수정                      |
| `refactor:` | 코드 리팩토링 (기능 변화 없음) |
| `style:`    | 코드 스타일, 포맷 수정         |
| `docs:`     | 문서 추가 및 수정              |
| `test:`     | 테스트 코드 추가 및 수정       |
| `chore:`    | 기타 설정, 빌드 작업 등        |

## 🗃️ 폴더 구조

```
src/
├── api/                // API 호출 관련 파일
│   └── posts.js
├── components/         // 재사용 가능한 공통 컴포넌트
│   └── Sidebar.jsx
│   └── Navigation.jsx
├── pages/              // 라우트 단위 페이지 컴포넌트
│   ├── Main/
│   ├── PostList/
│   ├── PostDetail/
│   └── PostEdit/
├── routes/             // 라우터 설정
│   └── index.jsx
├── App.jsx
└── main.jsx

```
