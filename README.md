<p align="center">
  <a href="https://github.com/mingyuchoo/svelte-setup-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/svelte-setup-series"/></a>
  <a href="https://github.com/mingyuchoo/svelte-setup-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/svelte-setup-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/svelte-setup-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/svelte-setup-series?color=appveyor" /></a>
</p>

# svelte-setup-series

## Using Node.js

Required: `{"node":"^16.14 || >=18"}`

```bash
npm create svelte@latest <project-name>
cd <project-name>
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// svelte.config.js

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};
export default config;
```

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* app.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```svelte
<!-- +layout.svelte -->

<script>
  import "../app.css";
</script>

<slot />
```

```bash
npm run dev -- --open
```

## Using Bun

Required: `bun`

```bash
bun create svelte@latest <project-name>
cd <project-name>
bun install
bun run dev -- --open
```

## Using Skeleton with Bun

Skeleton is the UI toolkit for Svelte and Tailwind.

- <https://www.skeleton.dev/>

```bash
bun create skeleton-app@latest <project-name>
# Recommand enabling TypeScript when prompted
cd <project-name>
bun install
bun run dev -- --open
```
