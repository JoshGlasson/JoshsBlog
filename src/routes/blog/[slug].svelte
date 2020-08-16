<script context="module">
	import Signature from '../../components/Signature.svelte';

	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let post;
	import jQuery from 'jquery';

	let epochPostDate = new Date(post.originaldate);
	let epochUpdateDate = new Date(post.sortdate);
	let date = epochPostDate.toDateString();
	let posturl = "https://joshglasson.com/blog/" + encodeURI(post.slug)
	let imageurl = "https://joshglasson.com" + encodeURI(post.image.substring(1))


	onMount( async () => { 
		window.jQuery = jQuery;
		
		jQuery(window).bind('popstate', function(event) {
			if (event.target.location.hash != "#image") {
				if (modal.style.display === 'block') {
					closeModal();
				};
			};
		});

		jQuery(window).on("navigate", function(event, data){
			if(direction == "back") {
				closeModal();
			};
		});


		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementsByTagName("IMG")
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
		var navbar = document.getElementById("navbar");

		var scrollY = 0;
		
		// Adding click event listeners to every image on the page, which will open a modal when fired. Checks that the image is not a modal first.
		for (var i = 0; i < img.length; i++) {
			if (!img[i].className.includes("modal-content") && !img[i].className.includes("signature-image")) {
				img[i].addEventListener('click', function(event){
					event.preventDefault();
					scrollY = window.scrollY;
					document.body.style.top = `-${scrollY}px`;
					document.body.style.position = 'fixed';
					if (!window.matchMedia("only screen and (max-width: 700px)").matches) {
						document.body.style.left = '20%';
					};
					modal.style.display = "block";
					navbar.hidden = true;
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
					window.location.hash = "#image"
				});
			}; 
		};

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// Event listeners to track the user swiping on the screen
		var touchstartY = 0;
		var touchendY = 0;
		window.addEventListener('touchstart', function(event) {
			if (modal.style.display === 'block') {
				touchstartY = event.changedTouches[0].screenY;
			}
		}, false);

		window.addEventListener('touchend', function(event) {
			if (modal.style.display === 'block') {
				touchendY = event.changedTouches[0].screenY;
				handleGesture();
			}
		}, false); 

		// Resets all of the styling that was changed for the modal
		function closeModal() {
			modal.style.display = 'none';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = ''
			document.body.style.transform = ''
			navbar.hidden = false;
			scrollPage();
		}

		function goBack() {
			window.history.back();
		};

		function scrollPage(){
			jQuery("html,body").animate({scrollTop: scrollY}, 1000);
		}

		// Checks if the user has swiped up or down more than one third of the screen. If so it closes the modal.
		function handleGesture() {
			var dif = Math.abs(touchstartY - touchendY);
			var h = window.innerHeight/3;
			if (dif > h) {
				closeModal()
				goBack();
			}
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
			closeModal();
			goBack();
		};

		// Checks sort date vs post date to see if theres been an update, displays updated date under original if so.
		if(epochPostDate.getTime() != epochUpdateDate.getTime()) {	
			var datediv = document.getElementsByClassName("date")[0]
			var updatedate = document.createElement("h3");
			var italic = document.createElement("i");

			italic.textContent = "Updated on " + epochUpdateDate.toDateString();
			
			updatedate.appendChild(italic);
			datediv.appendChild(updatedate);
		};

		// Get the modals
		var modals = document.getElementsByClassName("modal-content")
		var zoomed = false;
		
		// Adding double click event listeners to every modal to enable zooming.
		for (var i = 0; i < modals.length; i++) {
			var modalImage = modals[i];
			modalImage.addEventListener('dblclick', function(){
				if (zoomed) {
					modalImage.style.transform = "scale(1)"
					zoomed = false;
				} else {
					modalImage.style.transform = "scale(1.5)"
					zoomed = true;
				};
			});
		};

		var codeSnippets = document.getElementsByTagName("code");
		for (var i = 0; i < codeSnippets.length; i++) {
			var snippet = codeSnippets[i];
			snippet.style.whiteSpace = 'pre-wrap';
		};

		var body = document.body;
		const mutationObserver = new MutationObserver(callback)
		mutationObserver.observe(body, { attributes: true })
		function callback(mutationsList, observer) {
			mutationsList.forEach(mutation => {
				if (mutation.attributeName === 'class') {
					createTweets(checkTheme());
				};
			});
		};

		function checkTheme() {
			var dark_toggle = localStorage.getItem('dark_mode_toggle');
			if (dark_toggle === 'false') {
				return 'light';
			} else {
				return 'dark';
			};
		};


		createTweets(checkTheme());
		function createTweets(theme) {
			cleanupTweets();
			var tweets = document.getElementsByClassName('tweetToEmbed');
			for (var i = 0; i < tweets.length; i++) {
				var tweet = tweets[i];
				var parent = tweet.parentElement;
				window.twttr.widgets.createTweet(
					tweet.innerText,
					parent,
					{
						align: 'center',
						theme: theme,
						dnt: 'true'
					}
				);
			};
		}


		function cleanupTweets() {
			var tweets = document.getElementsByClassName('twitter-tweet twitter-tweet-rendered');
			while(tweets.length > 0){
				tweets[0].parentNode.removeChild(tweets[0]);
			};
		};
	});
</script>

<style>
	.postTitle h1 {
		font-size: 5em;
		font-weight: 500;
	}

	.postTitle h2 {
		font-size: 2em;
		font-weight: 300;
		padding-bottom: 0.5em;
	}

	.date {
		font-size: 0.8em;
		font-weight: 200;
		padding-bottom: 1em;
		color: lightslategray;
	}

	.content :global(p) {
		font-size: 1.2em;
		font-weight: 300;
		word-wrap: break-word;
	}
	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content :global(img) {
		width: auto; 
		width: 100%; 
	}

	.content :global(#imageDiv) {
		text-align: center;
		width: auto;
	}

	.content :global(#videoDiv) {
		text-align: center;
	}

	.content :global(iframe) {
		max-width: 100%;
	}

	.content :global(figure) {
		width: 100%;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		display: inline-block;
	}

	.content :global(figcaption) {
		color: lightslategray;
		font-size: 0.8em;
		text-align: center;
	}

	.content :global(#codeSnippet) {
		background-color: inherit;
		margin: 2em 0 2em 0;
	}

	/* The Modal (background) */
	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
	}

	/* Modal Content (Image) */
	.modal-content {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
	}

	/* Caption of Modal Image (Image Text) - Same Width as the Image */
	#caption {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
		text-align: center;
		color: #ccc;
		padding: 10px 0;
		height: 150px;
	}

	/* Add Animation - Zoom in the Modal */
	.modal-content, #caption {
		animation-name: zoom;
		animation-duration: 0.6s;
	}

	@keyframes zoom {
		from {transform:scale(0)}
		to {transform:scale(1)}
	}

	/* The Close Button */
	.close {
		position: absolute;
		top: 40px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

	/* 100% Image Width on Smaller Screens */
	@media only screen and (max-width: 700px){
		.modal-content {
			width: 100%;
		}

		.postTitle h1 {
			font-size: 4em;
			font-weight: 400;
			word-wrap: break-word;
		}

		.postTitle h2 {
			font-size: 1.5em;
			font-weight: 250;
			padding-bottom: 0.5em;
			word-wrap: break-word;
		}
	}
</style>

<svelte:head>
	<title>{post.title}</title>
	<meta property="og:title" content={post.title}>
	<meta property="og:image" content={imageurl}>
	<meta property="og:description" content={post.headline}>
	<meta property="og:url" content={posturl}>
</svelte:head>

<div class='postTitle'>
	<h1>{post.title}</h1>
	<h2><strong>{post.headline}</strong></h2>
</div>

<div class="date">
	<h3><i>Originally posted on {date}</i></h3>
</div>

<div class='content'>
	{@html post.html}
</div>

<!-- The Modal -->
<div id="myModal" class="modal">

	<!-- The Close Button -->
	<span class="close">&times;</span>

	<!-- Modal Content (The Image) -->
	<img class="modal-content" id="img01" alt="modal generated">

	<!-- Modal Caption (Image Text) -->
	<div id="caption"></div>
</div>

<br>

<Signature />