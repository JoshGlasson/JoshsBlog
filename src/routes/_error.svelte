<script>
	export let status;
	export let error;

	import { onMount } from 'svelte';
	onMount(async () => {
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		redirect();

		async function redirect() {
			await sleep(2000);
			window.location.replace("/404");
		}
	});

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
	<noscript><meta http-equiv="refresh" content="2; url=/404" /></noscript>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

<p>Redirecting...</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
