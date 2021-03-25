<script>
	import { onMount } from 'svelte';

	onMount( async () => { 
		var pickButton=document.querySelector('.pickBtn');
		var box=document.querySelector('.imageContainer');
		var locations = ["Dam", "Military Base", "Quarry", "Airport", "Storage Town", "Superstore", "TV Station", "Stadium", "Lumber", "Boneyard", "Train Station", "Hospital", "Downtown", "Farmland", "Promenade West", "Promenade East", "Hills", "Park", "Shipwreck", "Port", "Prison"]

		pickButton.addEventListener("click", randomDrop);

		function randomDrop() {
			var existingDropZone = document.querySelector('.dropLocation')
			var existingDropImage = document.querySelector('.dropImage')

			if (existingDropZone == null) {
				var dropZone = document.createElement("h2");
				dropZone.classList.add("dropLocation")
				var randomDrop = randomLocation()
				dropZone.innerText = randomDrop

				var dropImage = document.createElement("img")
				dropImage.classList.add("dropImage")
				dropImage.style.width = "100%"
				dropImage.src = "./images/coddice/" + randomDrop + ".jpg"

				box.appendChild(dropZone)
				box.appendChild(dropImage)
			} else {
				var randomDrop = randomLocation()
				existingDropZone.innerText = randomDrop
				existingDropImage.src = "./images/coddice/" + randomDrop + ".jpg"
			}
		}

		function randomLocation() {
			return locations[Math.floor(Math.random() * locations.length)]
		}
		
	})
</script>

<style>
	
</style>

<svelte:head>
    <title>Josh's Blog</title>
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

<h2>Call of Duty Warzone Drop Picker</h2>

<div class="container">
	<div class="imageContainer">
	</div>
	<button class="pickBtn">Random Drop Point</button>
</div>