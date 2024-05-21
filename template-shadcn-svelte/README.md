# README

## Setup CSS framework using Shadcn-svelte

```bash
bun create svelte@latest my-app
cd my-app
bunx @svelte-add/tailwindcss@latest
bun install
```

```js
// svelte.config.js

const config = {
  // ... other config
  kit: {
    // ... other config
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
};
```

```bash
bunx shadcn-svelte@latest init

Would you like to use TypeScript (recommended)? › Yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › src/app.pcss
Where is your tailwind.config.[cjs|js|ts] located? › tailwind.config.js
Configure the import alias for components: › $lib/components
Configure the import alias for utils: › $lib/utils
```

### Add Button component to project

```bash
bunx shadcn-svelte@latest add button
```

```svelte
<!-- src/routes/+page.svelte -->

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>
 
<Button>Click me</Button>
```
