import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: '../docs' // Output to docs/ at repository root for GitHub Pages
		}),
	paths: {
		base: dev ? '' : '/v3' // repo name for GitHub Pages
	},
		prerender: {
			handleMissingId: 'ignore'
		}
	}
};

export default config;
