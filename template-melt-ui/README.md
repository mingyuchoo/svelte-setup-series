# Melt UI + Svelte Template

접근성 높은 헤드리스 UI 컴포넌트와 최신 Svelte 스택을 결합한 모던 웹 애플리케이션 템플릿입니다.

## ✨ 특징

- 🎨 **Melt UI**: 완전히 커스터마이징 가능한 헤드리스 UI 컴포넌트
- 🚀 **Svelte 5**: 최신 Svelte 5 Runes API 지원
- ⚡ **Vite 7**: 초고속 개발 서버 및 빌드
- 🎯 **TypeScript**: 엄격한 타입 체크로 안전한 개발
- 💅 **Tailwind CSS**: 유틸리티 기반 스타일링 + 커스텀 디자인 시스템
- ♿ **접근성**: WCAG 표준을 준수하는 UI 컴포넌트
- 🔧 **개발 도구**: ESLint + Prettier 자동 포매팅

## 🛠️ 기술 스택

| 카테고리 | 기술 | 버전 |
| --------- | ------ | ------ |
| 프레임워크 | Svelte | 5.21.0 |
| 메타 프레임워크 | SvelteKit | 2.18.4 |
| 빌드 도구 | Vite | 7.0.5 |
| 언어 | TypeScript | 5.9.3 |
| UI 컴포넌트 | Melt UI | 0.86.2 |
| 스타일링 | Tailwind CSS | 3.4.16 |
| 아이콘 | Lucide Svelte | 0.468.0 |

## 📦 설치 및 실행

### 프로젝트 생성

```bash
bunx sv create {project-name}
```

### 개발 환경 시작

```bash
cd {project-name}
bun install
bun run dev
```

브라우저에서 열기:

```bash
bun run dev -- --open
```

### 프로덕션 빌드

```bash
bun run build
```

### 빌드 미리보기

```bash
bun run preview
```

## 📁 프로젝트 구조

```text
template-melt-ui/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # 메인 레이아웃
│   │   └── +page.svelte        # 홈페이지 (체크박스 예제)
│   ├── lib/
│   │   └── index.ts            # 공용 컴포넌트 & 유틸리티
│   ├── app.css                 # 전역 스타일 (Tailwind)
│   ├── app.d.ts                # TypeScript 타입 정의
│   └── app.html                # HTML 템플릿
├── static/                     # 정적 파일
├── tailwind.config.js          # Tailwind 커스텀 설정
├── svelte.config.js            # Svelte/SvelteKit 설정
├── vite.config.ts              # Vite 번들러 설정
└── tsconfig.json               # TypeScript 설정
```

## 🎨 Tailwind CSS 커스터마이징

### 커스텀 색상 팔레트 (Magnum)

프로젝트는 "Magnum" 오렌지 색상 팔레트를 포함합니다:

```javascript
colors: {
  magnum: {
    '50': '#fff9ed',
    '100': '#fef2d6',
    '200': '#fce0ac',
    '300': '#f9c978',
    '400': '#f7b155',
    '500': '#f38d1c',  // Primary
    '600': '#e47312',
    '700': '#bd5711',
    '800': '#964516',
    '900': '#793a15',
    '950': '#411c09'
  }
}
```

### 커스텀 Tailwind 플러그인

- **hocus**: hover와 focus를 동시에 적용하는 변형 (`hocus:opacity-75`)
- **square**: width와 height를 동일하게 설정하는 유틸리티 (`square-7`)
- **@tailwindcss/typography**: 타이포그래피 스타일링

## 💡 사용 예제

### Melt UI 체크박스 (3-State)

현재 템플릿에는 checked, unchecked, indeterminate 세 가지 상태를 지원하는 체크박스 예제가 포함되어 있습니다:

```svelte
<script lang="ts">
  import { createCheckbox, melt } from '@melt-ui/svelte';
  import Check from 'lucide-svelte/icons/check';
  import Minus from 'lucide-svelte/icons/minus';

  const {
    elements: { root, input },
    helpers: { isChecked, isIndeterminate }
  } = createCheckbox({
    defaultChecked: 'indeterminate'
  });
</script>

<button
  use:melt={$root}
  class="flex size-7 items-center justify-center rounded-lg
         bg-white text-magnum-600 shadow hover:opacity-75"
>
  {#if $isIndeterminate}
    <Minus class="size-5" />
  {:else if $isChecked}
    <Check class="size-5" />
  {/if}
  <input use:melt={$input} />
</button>
```

## 🔍 사용 가능한 Scripts

| 명령어 | 설명 |
| -------- | ------ |
| `bun run dev` | 개발 서버 시작 |
| `bun run build` | 프로덕션 빌드 |
| `bun run preview` | 빌드 결과 미리보기 |
| `bun run check` | TypeScript 타입 체크 |
| `bun run check:watch` | 타입 체크 (감시 모드) |
| `bun run lint` | 코드 스타일 검사 |
| `bun run format` | 코드 자동 포매팅 |

## 🚀 다음 단계

1. **Melt UI 컴포넌트 추가하기**
   - [Melt UI 문서](https://melt-ui.com)에서 더 많은 컴포넌트 탐색
   - Dialog, Menu, Select 등 다양한 컴포넌트 사용

2. **라우트 추가하기**
   - `src/routes/` 디렉토리에 새 `.svelte` 파일 추가
   - SvelteKit의 파일 기반 라우팅 활용

3. **공용 컴포넌트 만들기**
   - `src/lib/` 디렉토리에 재사용 가능한 컴포넌트 작성
   - `$lib` alias로 import

4. **스타일링 커스터마이징**
   - `tailwind.config.js`에서 색상, 폰트 등 수정
   - 커스텀 플러그인 추가

## 📚 참고 자료

- [Svelte 공식 문서](https://svelte.dev)
- [SvelteKit 공식 문서](https://kit.svelte.dev)
- [Melt UI 공식 문서](https://melt-ui.com)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📄 라이선스

이 프로젝트는 템플릿으로 자유롭게 사용할 수 있습니다.
