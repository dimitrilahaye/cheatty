<script>
	import BrokenComponent from '../components/BrokenComponent.svelte';
</script>

<BrokenComponent />
<main>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<a href="/user">To user page</a>
</main>
<slot />

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
