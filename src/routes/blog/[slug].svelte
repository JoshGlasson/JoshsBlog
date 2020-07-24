<script context="module">
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
	export let post;
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
		padding-bottom: 1em;
	}

	.content :global(p) {
		font-size: 1.2em;
		font-weight: 300;
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
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class='postTitle'>
	<h1>{post.title}</h1>
	<h2><strong>{post.headline}</strong></h2>
</div>


<div class='content'>
	{@html post.html}
</div>