<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
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

<Nav {segment}/>

<main>
	<slot></slot>
</main>