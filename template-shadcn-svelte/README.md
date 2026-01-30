# template-shadcn-svelte

Svelte 5 + SvelteKit + shadcn-svelte를 사용한 현대적인 웹 애플리케이션 템플릿입니다.

## 📦 기술 스택

- **Svelte** 5.12.0 - 최신 Runes API
- **SvelteKit** 2.11.1 - 풀스택 프레임워크
- **Vite** 7.3.1 - 초고속 빌드 도구
- **TailwindCSS** 4.1.18 - CSS 기반 설정
- **TypeScript** 5.7.2 - 타입 안전성
- **bits-ui** 2.15.5 - 접근 가능한 UI 컴포넌트
- **tailwind-variants** 3.2.2 - 컴포넌트 variant 관리
- **ESLint** 9.39.2 (Flat Config) - 코드 품질

## ✨ 주요 특징

- ✅ 최신 Svelte 5 Runes API 사용
- ✅ TailwindCSS 4.0 CSS 기반 설정 (성능 3.5배 향상)
- ✅ ESLint Flat Config 적용
- ✅ TypeScript 완벽 지원
- ✅ shadcn-svelte 스타일 UI 컴포넌트
- ✅ 다크 모드 지원

## 🚀 시작하기

### 필요 사항

- Node.js ≥ 20.19.0
- Bun (권장)

### 설치

```bash
bun install
```

### 개발 서버 실행

```bash
bun run dev

# 또는 브라우저 자동 열기
bun run dev -- --open
```

## 🛠️ 사용 가능한 명령어

```bash
# 개발 서버 시작
bun run dev

# 프로덕션 빌드
bun run build

# 프로덕션 빌드 미리보기
bun run preview

# TypeScript 타입 체크
bun run check

# TypeScript 타입 체크 (watch 모드)
bun run check:watch

# 린트 검사
bun run lint

# 코드 포맷팅
bun run format
```

## 📁 프로젝트 구조

```text
src/
├── lib/
│   ├── components/
│   │   └── ui/          # UI 컴포넌트 (shadcn-svelte 스타일)
│   │       └── button/
│   └── utils.ts         # 유틸리티 함수
├── routes/              # SvelteKit 라우트
│   ├── +layout.svelte
│   └── +page.svelte
└── app.css              # TailwindCSS 4.0 설정
```

## 🎨 TailwindCSS 4.0 설정

이 프로젝트는 TailwindCSS 4.0의 새로운 CSS 기반 설정을 사용합니다:

- `src/app.css`에 `@theme` 및 `@variant` 지시어로 설정
- `postcss.config.js`에서 tailwindcss 플러그인 제거됨
- 성능 향상 및 더 나은 개발 경험

## 🔧 ESLint Flat Config

ESLint 9+의 새로운 Flat Config 시스템을 사용합니다:

- `eslint.config.js` 파일로 설정 관리
- TypeScript, Svelte 통합 지원
- 더 빠른 린트 속도

## 📝 라이선스

MIT
