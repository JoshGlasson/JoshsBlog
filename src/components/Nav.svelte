<script>
	import { onMount } from 'svelte';

	export let segment;
	export let dark_toggle;

	function toggle() {
		console.log("Start toggle: " + dark_toggle)
		if (dark_toggle === 'false') {
			window.document.body.classList.add('dark-mode')
			localStorage.setItem('dark_mode_toggle', 'true')
			dark_toggle = 'true'
		} else {
			window.document.body.classList.remove('dark-mode')
			localStorage.setItem('dark_mode_toggle', 'false')
			dark_toggle = 'false'
		}
		console.log("End toggle: " + dark_toggle)
	}
	
	onMount(async () => {
		dark_toggle = localStorage.getItem('dark_mode_toggle')
		dark_toggle === null ? dark_toggle = 'false' : dark_toggle = dark_toggle
		console.log("From Storage: " + dark_toggle)
		if (dark_toggle === 'true') {
			window.document.body.classList.add('dark-mode')
		}
	});

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		cursor: pointer;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		cursor: pointer;
	}

	:global(body) {
		background-color: white;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: black;
		color: white
	}

</style>


<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
			the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a on:click={toggle}>{dark_toggle === 'true' ? "light" : "dark"} mode</a></li>
	</ul>
</nav>
