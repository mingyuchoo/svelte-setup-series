import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'terser',
		cssMinify: 'lightningcss',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		}
	},
	optimizeDeps: {
		exclude: ['@sveltejs/kit']
	},
	server: {
		fs: {
			strict: true
		}
	}
});
