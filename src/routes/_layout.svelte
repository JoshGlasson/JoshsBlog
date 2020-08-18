<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

	import { onMount } from 'svelte';
	onMount(async () => {
		window.addEventListener('error', function(e) {
			console.log(e);
		}, true);
	});
</script>

<style>
	main {
		margin-top: 30px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;
		position: relative;
		max-width: 56em;
		background-color: inherit;
		padding: 2em;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<script id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>
	<link rel="stylesheet" href="./photoswipe/photoswipe.css"> 
	<link rel="stylesheet" href="./photoswipe/default-skin/default-skin.css"> 
	<script src="./photoswipe/photoswipe.min.js"></script> 
	<script src="./photoswipe/photoswipe-ui-default.min.js"></script> 
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>