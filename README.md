<p align="center">
  <a href="https://github.com/mingyuchoo/svelte-setup-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/svelte-setup-series"/></a>
  <a href="https://github.com/mingyuchoo/svelte-setup-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/svelte-setup-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/svelte-setup-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/svelte-setup-series?color=appveyor" /></a>
</p>

# svelte-setup-series

## Set up using Node.js

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

## Add new Path Alias

Let's add `$compoents` alias which will be resolved to `src/components`.

```js
// svelte.config.js

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/components",
    },
  },
};

export default config;
```
