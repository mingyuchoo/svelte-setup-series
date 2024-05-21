/** @type {import('@sveltejs/kit').Config}*/

import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$components: 'src/components'
		}
	}
};
export default config;
