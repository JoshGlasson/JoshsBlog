<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	export let segment;

	onMount( async () => {
		var script = document.createElement('script');
		script.src = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
		script.dataAdClient = "ca-pub-1501125542619304";
		script.async = true;
		document.head.appendChild(script);

		var w = document.write;
		document.write = function () {
			console.log("Hello");
			document.head.appendChild(script);
			document.write = w;
		};
	})

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
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-TJ8JZX38E6"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-TJ8JZX38E6');
	</script>

	<!-- Google Adsense -->
	<!-- <script data-ad-client="ca-pub-1501125542619304" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->

	<!-- Twitter Widgets -->
	<script id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>

	<!-- Photoswipe Styles and Scripts -->
	<link rel="stylesheet" href="./photoswipe/photoswipe.css"> 
	<link rel="stylesheet" href="./photoswipe/default-skin/default-skin.css"> 
	<script src="./photoswipe/photoswipe.min.js"></script> 
	<script src="./photoswipe/photoswipe-ui-default.min.js"></script> 
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>