<script>
	import { onMount } from 'svelte';
	export let bearer = "";

	onMount(() => { 
		// Getting the search bar and listening for changes
		var searchbar = document.getElementById("search");
		searchbar[0].value = "";
		searchbar.addEventListener('input', function(event){
			bearer = searchbar[0].value
		});

		// Disables enter submitting the search bar as a form
		searchbar.onkeypress = function(e) {
			var key = e.charCode || e.keyCode || 0;     
			if (key == 13) {
				e.preventDefault();
			};
		};

		var button = document.getElementById("searchbutton");
		button.addEventListener('click', async function(event){
			console.log("Clicked Search Button");
			var data = document.getElementById("data");
			var p = document.createElement("p");
			response = await fetchData()
			p.value = response.message;
			data.appendChild(p);
		});

		async function fetchData() {
			const response = await fetch('https://search.api.tesco.com/search/?query=macaroni&offset=0&limit=3&fields=tpnb,price,name,image&responseSet=results%2Ctotals%2Ctaxonomy&store=3060&geo=uk&lang=en&distChannel=ghs&resType=products',
			{
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Accept-Language': 'en-GB'
				}
			})
			console.log(response);
			return await response.json();
		}
	})
</script>

<svelte:head>
	<title>Josh's Blog</title>
	<meta name="description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@joshglasson" />
	<meta name="twitter:creator" content="@joshglasson" />
	<meta property="og:title" content="Josh's Blog">
	<meta property="og:image" content="https://joshglasson.com/logo.png">
	<meta property="og:description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta property="og:url" content="https://joshglasson.com/">
</svelte:head>

<h1>Shopping List!</h1>

<form id="search">
	<input type="text" placeholder="Bearer Token">
</form>
<button id="searchbutton">Search</button>

<div id="data">

</div>