<script lang="ts">
	import env from '$lib/Env';
	import '../style/app.postcss';
	import TailwindCSS from '../style/TailwindCSS.svelte';
	import { Boundary } from '../components/ErrorBoundary';
	import * as Sentry from '@sentry/browser';
	import { Integrations } from '@sentry/tracing';
	import type { Exception } from '@sentry/browser';

	console.info(env.SENTRYURL);

	Sentry.init({
		dsn: String(env.SENTRYURL),
		integrations: [new Integrations.BrowserTracing()],
		tracesSampleRate: Number(env.SENTRYTRACES)
	});

	let onError = (e: Exception) => {
		Sentry.captureException(e);
	};
</script>

<Boundary {onError}>
	<TailwindCSS />
	<nav>
		<a href=".">Home</a>
		<a href="user">User</a>
	</nav>

	<slot />
</Boundary>
