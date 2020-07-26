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

	onMount(() => { 
		// Get the modal
		var modal = document.getElementById("myModal");


		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementsByTagName("IMG")
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
		
		for (var i = 0; i < img.length; i++) {
			img[i].addEventListener('click', function(event){
				event.preventDefault();
				document.body.style.top = `-${window.scrollY}px`;
				modal.style.display = "block";
				modalImg.src = this.src;
				captionText.innerHTML = this.alt;
				document.body.style.position = 'fixed';
			});
		}; 

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		var touchstartY = 0;
		var touchendY = 0;
		window.addEventListener('touchstart', function(event) {
			if (modal.style.display === 'block') {
				console.log('touchstart');
				console.log(event);
				touchstartY = event.changedTouches[0].screenY;
			}
		}, false);

		window.addEventListener('touchend', function(event) {
			if (modal.style.display === 'block') {
				console.log('touchend');
				touchendY = event.changedTouches[0].screenY;
				handleGesure();
			}
		}, false); 

		function closeModal() {
			modal.style.display = 'none';
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
			document.body.style.left = ''
			document.body.style.transform = ''
		}

		function handleGesure() {
			var swiped = 'swiped: ';
			
			var dif = Math.abs(touchstartY - touchendY);
			var h = window.innerHeight/3;
			console.log(dif)
			if (dif > h) {
				closeModal()
			}
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
			closeModal()
		}
	});

</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.postTitle h1 {
		font-size: 5em;
		font-weight: 500;
	}

	.postTitle h2 {
		font-size: 2em;
		font-weight: 300;
		padding-bottom: 0.5em;
	}

	.date h3 {
		font-size: 1em;
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
		top: 15px;
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
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class='postTitle'>
	<h1>{post.title}</h1>
	<h2><strong>{post.headline}</strong></h2>
</div>

<div class="date">
	<h3><i>Originally posted on {post.date}</i></h3>
</div>

<div class='content'>
	{@html post.html}
</div>

<!-- The Modal -->
<div id="myModal" class="modal">

	<!-- The Close Button -->
	<span class="close">&times;</span>

	<!-- Modal Content (The Image) -->
	<img class="modal-content" id="img01" alt="modal">

	<!-- Modal Caption (Image Text) -->
	<div id="caption"></div>
</div>

<Signature />