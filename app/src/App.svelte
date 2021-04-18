<script>
  // import ErrorBoundary from 'svelte-error-boundary'
  import TailwindCSS from './style/TailwindCSS.svelte';
  import * as Sentry from "@sentry/browser";
  import {Integrations} from "@sentry/tracing";
  // import BrokenComponent from "./BrokenComponent.svelte";

  export let name;
  // let handleError = (e) => {
  //   Sentry.captureException(e);
  // }

  Sentry.init({
    dsn: process.env.SENTRYURL, // eslint-disable-line no-undef
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: process.env.SENTRYTRACES, // eslint-disable-line no-undef
  });
</script>

<TailwindCSS />
<!--<ErrorBoundary {handleError}>-->
<!--  <BrokenComponent/>-->
  <main>
    <h1 class="text-3xl font-bold">Hello {name}!</h1>
    <p>
      Visit the
      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
      or the <a href="https://tailwindcss.com/docs">Tailwind CSS docs</a>
      to learn how to build apps!
    </p>
  </main>
<!--</ErrorBoundary>-->

<style lang="postcss">
  main {
    @apply p-4;
  }
  h1,
  p {
    @apply text-gray-600;
  }
  a {
    @apply text-blue-600 underline;
  }
</style>
