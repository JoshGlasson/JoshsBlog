<script>
	import { onMount } from 'svelte';

	onMount( async () => { 
		const fourOhFour = "/404";
		var pathname = window.location.pathname;
		if (pathname != fourOhFour) {
			window.location.replace(fourOhFour);
		};
	})
</script>

<style>
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
	}

	h3 {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>404</title>
	<noscript><meta http-equiv="refresh" content="5; url=/404" /></noscript>
</svelte:head>

<h1>404 - Page Not Found</h1>

<h3>The page you are looking for is not here!</h3>