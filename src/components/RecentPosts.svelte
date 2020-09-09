<script>
	import { onMount } from 'svelte';
	export let posts;
	export let currentPost;
	let recentPosts = [];
	let relatedPosts = [];
	
	onMount( async () => {
		let postsArray = Object.values(posts)[0].slice();

		for (var i = 0; i < postsArray.length; i++) {
			if (postsArray[i].title == currentPost.title) {
				postsArray.splice(i, 1);
			}
		}
		recentPosts = postsArray.slice().splice(0,2)

		for (var i = 0; i < postsArray.length; i++) {
			var post = postsArray[i];
			if (currentPost.tags.indexOf(post.tags[0]) > -1) {
				relatedPosts.push(post);
			} 
		}
		relatedPosts = relatedPosts.splice(0,2)

	
		var relatedDiv = document.getElementById("relatedPosts");
		if (relatedPosts.length > 0) {
			var relatedPostsHeading = document.createElement("h1");
			relatedPostsHeading.innerText = "Related Posts";
			relatedPostsHeading.style.borderBottom = "1px solid lightgray"
			relatedDiv.insertBefore(relatedPostsHeading, relatedDiv.firstChild);
		}
	})
</script>

<style>
	.recentPosts {
		margin: 0 0 1em 0;
		width: 100%;
		overflow-x: auto;
	}

	.relatedPosts {
		margin: 0 0 1em 0;
		width: 100%;
		overflow-x: auto;
	}

	div img {
		display: block;
		float: left;
		max-width: 100px;
		max-height: 100px;
		margin: 0 1em 0 0;
	}
	
	div h3{
		vertical-align: middle;
	}

	h1 {
		border-bottom: 1px solid lightgray;
	}
</style>


<h1>Recent Posts</h1>
{#each recentPosts as post}
<div class="recentPosts">
	<a rel="external" href='blog/{post.slug}'><img src={post.image} alt="Post Thumbnail" class="Thumbnail"/></a>
	<a rel="external" href='blog/{post.slug}'><h2>{post.title}</h2></a>
	<h3>{post.headline}</h3>
</div>	
{/each}

<div id="relatedPosts">
	{#each relatedPosts as post}
		<div class="relatedPosts">
			<a rel="external" href='blog/{post.slug}'><img src={post.image} alt="Post Thumbnail" class="Thumbnail"/></a>
			<a rel="external" href='blog/{post.slug}'><h2>{post.title}</h2></a>
			<h3>{post.headline}</h3>
		</div>	
	{/each}
</div>