import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/modernisation' // repo name for GitHub Pages
		},
		prerender: {
			handleMissingId: 'ignore'
		}
	}
};

export default config;
