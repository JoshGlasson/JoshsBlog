<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			posts.sort().reverse()
			return { posts };
		});
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let posts;
	export let filteredPosts = posts;

	onMount(() => { 
		var searchbar = document.getElementById("search");
		searchbar[0].value = "";
		searchbar[1].checked = false;
		searchbar.addEventListener('input', function(event){
			filterPosts();
		});

		function filterPosts() {
			filteredPosts = [];
			for (var i = 0; i < posts.length; i++) {
				var post = posts[i]
				var search = searchbar[0].value.toLowerCase();
				var advanced = searchbar[1].checked;
				if (advanced) {
					if (post.title.toLowerCase().includes(search) || post.headline.toLowerCase().includes(search)) {
						filteredPosts.push(posts[i]);
					};
				} else {
					if (post.title.toLowerCase().includes(search)) {
						filteredPosts.push(posts[i]);
					};
				};
			};
		};
	});

</script>

<style>
	#thumb {
		display: inline-block;
		height: 100%;
		width: 15%;
		object-fit: contain;
		align-self: flex-start;
		border-bottom: none;
	}
	#text {
		display: inline-block;
		width: 85%;
		height: 100%;
		flex: 1 1 auto;
		border-bottom: none;
		vertical-align: middle;
	}

	div {
		margin: 0 0 1em 1em;
		width: 100%;
		height: 25%;
		border-bottom: 1px solid lightgray;
		padding-bottom: 0.5em;
		display: flex;
	}

	#thumb img {
		width: 100%;
		height: 100%;
		margin: 0 1em 0 0;
	}

	#text h1 {
		vertical-align: middle;
		display: block;
	}

	#text h2{
		vertical-align: middle;
	}

	@media only screen and (max-width: 700px){
		#thumb {
		display: inline-block;
		height: 100%;
		width: 25%;
		object-fit: contain;
		align-self: flex-start;
		border-bottom: none;
		}
		#text {
			display: inline-block;
			width: 75%;
			height: 100%;
			flex: 1 1 auto;
			border-bottom: none;
			vertical-align: middle;
		}
	}

	.top {
		display: block;
		margin: 0 0 2em 0;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="top">
	<h1 id="pageTitle">Recent posts</h1>

	<form id="search">
		<input type="text" placeholder="Search Posts">
		<input type="checkbox" name="checkbox" id="checkbox_id" value="value">
		<label for="checkbox_id">advanced search</label>
	</form>
</div>

{#each filteredPosts as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
	<div>
		<div id="thumb">
			<a href='blog/{post.slug}'><img src={post.image} alt="Thumbnail"/></a>
		</div>
		<div id="text">
			<a rel='prefetch' href='blog/{post.slug}'><h1>{post.title}</h1></a>
			<h2>{post.headline}</h2>
		</div>
	</div>
{/each}