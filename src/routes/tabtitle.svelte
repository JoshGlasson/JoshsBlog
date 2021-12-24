<script>
	import { onMount } from 'svelte';

	export let title = "New Tab Title";

	onMount( async () => { 
		// Getting the input field and listening for changes
		var input = document.getElementById("tabtitle");
		input.addEventListener('input', function(event){
			updateTitle();
		});

		// Disables enter submitting the input field as a form
		input.onkeypress = function(e) {
			var key = e.charCode || e.keyCode || 0;     
			if (key == 13) {
				e.preventDefault();
			};
		};

		// Updates Title Variable
		function updateTitle() {
			if(input[0].value !== "") {
				var newtitle = input[0].value
				var titleElement = document.getElementsByTagName("title");
				for (var i = 0; i < titleElement.length; i++) {
					titleElement[i].innerText = newtitle;
				};
				var header = document.getElementById("header");
				header.textContent = newtitle;
			} else {
				var titleElement = document.getElementsByTagName("title");
				for (var i = 0; i < titleElement.length; i++) {
					titleElement[i].innerText = "New Tab Title";
				};
				var header = document.getElementById("header");
				header.textContent = "New Tab Title";
			}
		};
		
	})
</script>

<style></style>

<svelte:head>
    <title>{title}</title>
	<meta name="description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@joshglasson" />
	<meta name="twitter:creator" content="@joshglasson" />
	<meta property="og:title" content="Josh's Blog">
	<meta property="og:image" content="https://joshglasson.co.uk/logo.png">
	<meta property="og:description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta property="og:url" content="https://joshglasson.co.uk/">
	<!-- Google Adsense -->
	<script data-ad-client="ca-pub-1501125542619304" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</svelte:head>

<h1 id=header>{title}</h1>

<form id="tabtitle">
	<input type="text" placeholder="Set Tab Title">
</form>