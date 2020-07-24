<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			posts.sort().reverse()
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	#pageTitle {
		margin: 0 0 2em 0;
	}

	div {
		margin: 0 0 1em 1em;
		width: 100%;
		padding-bottom: 0.5em;
		border-bottom: 1px solid lightgray;
		overflow-x: auto;
	}

	div img {
		display: block;
		float: left;
		width: 100%;
		max-width: 150px;
		margin: 0 1em 0 0;
	}

	div h1{
		vertical-align: middle;
	}

	div h3{
		vertical-align: middle;
		position: relative;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 id="pageTitle">Recent posts</h1>

{#each posts as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
	<div>
		<a href='blog/{post.slug}'><img src={post.image} alt="Post Display"/></a>
		<a rel='prefetch' href='blog/{post.slug}'><h1>{post.title}</h1></a>
		<h3>{post.headline}</h3>
	</div>
{/each}