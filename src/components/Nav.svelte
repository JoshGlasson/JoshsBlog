<script>
	import { onMount } from 'svelte';

	export let segment;
	export let dark_toggle = true;

	function setDark() {
		window.document.body.classList.add('dark-mode')
		window.document.getElementById("navbar").classList.add('dark-mode')
		localStorage.setItem('dark_mode_toggle', 'true')
		dark_toggle = 'true'
	};

	function setLight() {
		window.document.body.classList.remove('dark-mode')
		window.document.getElementById("navbar").classList.remove('dark-mode')
		localStorage.setItem('dark_mode_toggle', 'false')
		dark_toggle = 'false'
	};

	function toggle() {
		if (dark_toggle === 'false') {
			setDark();
		} else {
			setLight();
		}
	}
	
	onMount(async () => {
		dark_toggle = localStorage.getItem('dark_mode_toggle')
		dark_toggle === null ? dark_toggle = 'true' : dark_toggle = dark_toggle
		if (dark_toggle === 'true') {
			setDark();
		}
	});

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		z-index: 9999;
		width: 100%;
		top: 0;
		position: fixed;
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

	:global(body, nav) {
		background-color: white;
		transition: background-color 0.3s
	}
	:global(body.dark-mode, nav.dark-mode) {
		background-color: black;
		color: white
	}

</style>
<!-- Hack to get the line under Home in the nav bar -->
{segment === undefined ? segment = 'home' : segment = segment};
<nav id="navbar">
	<ul>
		<li><a aria-current="{segment === 'home' ? 'home' : undefined}" href="/">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'about' : undefined}" href="about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
			the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'blog' : undefined}" href="blog">blog</a></li>
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a on:click={toggle}>{dark_toggle === 'true' ? "light" : "dark"} mode</a></li>
	</ul>
</nav>
