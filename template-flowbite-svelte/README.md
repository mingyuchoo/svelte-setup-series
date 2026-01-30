# template-flowbite-svelte

SvelteKit + Flowbite + Tailwind CSS 4.x 템플릿 프로젝트

## 기술 스택

- **프레임워크**: [SvelteKit](https://svelte.dev/docs/kit) 2.50.1 + [Svelte](https://svelte.dev) 5.49.1
- **UI 라이브러리**: [Flowbite-Svelte](https://flowbite-svelte.com/) 1.31.0
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/) 4.1.18
- **언어**: [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **빌드 도구**: [Vite](https://vite.dev/) 7.3.1
- **패키지 매니저**: [Bun](https://bun.sh/)
- **린터/포맷터**: ESLint 9 (Flat Config) + Prettier 3.8

## 설치

```shell
bun install
```

## 개발

개발 서버를 시작하고 브라우저에서 자동으로 엽니다.

```shell
bun run dev -- --open
```

또는 기본 포트(5173)에서 실행:

```shell
bun run dev
```

## 빌드

프로덕션 빌드를 생성합니다.

```shell
bun run build
```

빌드된 앱을 미리보기:

```shell
bun run preview
```

## 사용 가능한 스크립트

- `bun run dev` - 개발 서버 시작
- `bun run build` - 프로덕션 빌드
- `bun run preview` - 빌드 미리보기
- `bun run check` - Svelte 타입 체크
- `bun run check:watch` - Svelte 타입 체크 (watch 모드)
- `bun run lint` - ESLint 및 Prettier 검사
- `bun run format` - Prettier 포맷팅

## 프로젝트 구조

```plaintext
template-flowbite-svelte/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte    # 공통 레이아웃
│   │   └── +page.svelte       # 홈페이지
│   ├── lib/                   # 공유 컴포넌트/유틸리티
│   ├── app.css                # 글로벌 스타일
│   └── app.html               # HTML 템플릿
├── static/                    # 정적 자산
├── eslint.config.js           # ESLint 설정 (Flat Config)
├── tailwind.config.js         # Tailwind CSS 설정
├── tsconfig.json              # TypeScript 설정
└── vite.config.ts             # Vite 설정
```

## 주요 기능

- ✅ Svelte 5.x 최신 버전
- ✅ Tailwind CSS 4.x (PostCSS 기반)
- ✅ Flowbite-Svelte UI 컴포넌트
- ✅ TypeScript 지원 (strict mode)
- ✅ ESLint 9 Flat Config
- ✅ Prettier 코드 포맷팅
- ✅ SvelteKit 서버 사이드 렌더링
- ✅ Vite HMR (Hot Module Replacement)

## 최근 업데이트

- Svelte 5.49.0 → 5.49.1 업그레이드
- Flowbite-Svelte 호환성 개선
- ESLint Flat Config 마이그레이션
- Tailwind CSS 4.x 마이그레이션
- 불필요한 의존성 정리

## 라이선스

BSD 3-Clause
