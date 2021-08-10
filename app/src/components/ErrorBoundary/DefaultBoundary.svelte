<script>
	import env from '$lib/Env';
	export let error = null;
	export let onError = null;

	let DEV = env.NODE_ENV !== 'production';

	$: if ($error && onError) onError($error);
</script>

{#if $error}
	<div class="error">
		<b>{$error.message}</b>
		<pre class="trace">
      		{DEV ? $error.stack : ''}
    	</pre>
	</div>
{:else}
	<slot />
{/if}

<style>
	.error {
		border: 1px solid red;
	}
	.trace {
		font-family: monospace;
	}
</style>
