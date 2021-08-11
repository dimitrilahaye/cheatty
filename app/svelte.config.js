import preprocess from 'svelte-preprocess';
import autoPreprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
        	"postcss": true
    	}),
		autoPreprocess({
			replace: [
				['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)],
				['process.env.API', JSON.stringify(process.env.API)],
				['process.env.SENTRYURL', JSON.stringify(process.env.SENTRYURL)],
				['process.env.SENTRYTRACES', JSON.stringify(process.env.SENTRYTRACES)],
			],
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node(),
	}
};

export default config;
