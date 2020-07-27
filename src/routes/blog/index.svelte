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
	export let tagFilteredPosts;
	export let tags = [];
	export let tagsToFilter = [];

	function getTags() {
		for (var i = 0; i < posts.length; i++) {
			tags = tags.concat(posts[i].tags.filter((item) => tags.indexOf(item) < 0));
		};
		tags = tags.sort();
	};

	onMount(() => { 
		var searchbar = document.getElementById("search");
		searchbar[0].value = "";
		searchbar[1].checked = false;
		searchbar.addEventListener('input', function(event){
			filterByTags();
		});

		searchbar.onkeypress = function(e) {
			var key = e.charCode || e.keyCode || 0;     
			if (key == 13) {
				e.preventDefault();
			};
		};


		function filterPosts() {
			if(searchbar[0].value !== "") {
				filteredPosts = [];
				for (var i = 0; i < tagFilteredPosts.length; i++) {
					var post = tagFilteredPosts[i];
					var search = searchbar[0].value.toLowerCase();
					var advanced = searchbar[1].checked;
					if (advanced) {
						if (post.title.toLowerCase().includes(search) || post.headline.toLowerCase().includes(search)) {
							filteredPosts.push(post);
						};
					} else {
						if (post.title.toLowerCase().includes(search)) {
							filteredPosts.push(post);
						};
					};
				};
			};
		};

		function filterByTags() {
			tagFilteredPosts = posts;
			if (tagsToFilter.length > 0) {
				tagFilteredPosts = [];
				for (var i = 0; i < posts.length; i++) {
					var post = posts[i];
					var z = post.tags.filter(function(val) {
						return tagsToFilter.indexOf(val) != -1
					});
					if(z.length > 0) {
						tagFilteredPosts.push(post);
					};
				};
			};
			filteredPosts = tagFilteredPosts;
			filterPosts();
		};

		var form = document.getElementById("filter-form")

		function populateFilterForm() {
			getTags()
			for (var i = 0; i < tags.length; i++) {
				var input = document.createElement("INPUT");
				var label = document.createElement("LABEL");
				var tag = tags[i];
				var name = tag[0].toUpperCase() + tag.slice(1);

				input.type = "checkbox";
				input.id = tag;
				input.className = "filter-input"
				label.for = tag;
				label.textContent = name;

				form.appendChild(input);
				form.appendChild(label);
				form.appendChild(document.createElement("br"));
			};
			addInputEventListeners();
		};

		populateFilterForm()

		var coll = document.getElementsByClassName("collapsible");
		for (var i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				};
			});
		};

		function addInputEventListeners() {
			var filterInputs = document.getElementsByClassName("filter-input")
			for (var i = 0; i < filterInputs.length; i++) {
				var filterInput = filterInputs[i];
				filterInput.addEventListener("change", function(event) {
					if (this.checked) {
						tagsToFilter.push(event.target.id)
						filterByTags();
					} else {
						const index = tagsToFilter.indexOf(event.target.id);
						if (index > -1) {
							tagsToFilter.splice(index, 1);
						};
						filterByTags();
					};
				});
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

	.collapsible {
		background-color: inherit;
		color: inherit;
		cursor: pointer;
		border: none;
		text-align: left;
		outline: none;
		font-size: 15px;
		border-bottom: none;
	}

	.active, .collapsible:hover {
		border-bottom: none;
	}

	.filters {
		padding: 0 18px;
		max-height: 0;
		max-width: 100%;
		overflow: auto;
		transition: max-height 0.2s ease-out;
		border-bottom: none;
		display: block;
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

	<button class="collapsible">View Posts by Tags</button>
	<div class="filters">
		<form id="filter-form">
		</form>
	</div>
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