<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`)
		.then(r => r.json())
		.then(posts => {
			posts.sort((a,b) => (Date.parse(a.sortdate) > Date.parse(b.sortdate)) ? 1 : ((Date.parse(b.sortdate) > Date.parse(a.sortdate)) ? -1 : 0)).reverse()
			return { posts };
		});
	}
</script>

<script>
	import { onMount } from 'svelte';

	export let posts;
	export let filteredPosts = posts.slice();
	export let tagFilteredPosts = posts.slice();
	export let tags = [];
	export let tagsToFilter = [];
	export let filterByAnyTags = true;

	onMount(() => { 
		// Gets the tags across all posts and filters out dupes.
		function getTags() {
			for (var i = 0; i < posts.length; i++) {
				tags = tags.concat(posts[i].tags.filter((item) => tags.indexOf(item) < 0));
			};
			tags = tags.sort();
		};

		// Getting the search bar and listening for changes
		var searchbar = document.getElementById("search");
		searchbar[0].value = "";
		searchbar[1].checked = false;
		searchbar.addEventListener('input', function(event){
			filterByTags();
		});

		// Disables enter submitting the search bar as a form
		searchbar.onkeypress = function(e) {
			var key = e.charCode || e.keyCode || 0;     
			if (key == 13) {
				e.preventDefault();
			};
		};


		var filtered = false;

		// Filters the posts based on the search bar value. Normally looks at titles only, in advanced mode it looks at the headline too.
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
				filtered = true;
			} else {
				tagsToFilter.length > 0 ? filtered = true : filtered = false;
			};
			postsToShow = 5;
			paginate(postsToShow);
		};

		// Filters by the selected tags. Can filter for posts with all of the tags or any of the tags depending on if the slider is active.
		function filterByTags() {
			if (tagsToFilter.length > 0) {
				tagFilteredPosts = [];
				for (var i = 0; i < posts.length; i++) {
					var post = posts[i];
					var z = post.tags.filter(function(val) {
						return tagsToFilter.indexOf(val) != -1
					});
					if(filterByAnyTags) {
						if(z.length > 0) {
							tagFilteredPosts.push(post);
						};
					} else {
						if(z.length == tagsToFilter.length) {
							tagFilteredPosts.push(post);
						};
					};
				};
				filtered = true;
			} else {
				tagsToFilter.length > 0 ? filtered = true : filtered = false;
			};
			filteredPosts = tagFilteredPosts;
			filterPosts();
		};

		// The list of tags used to filter is dynamic, this method creates each checkbox.
		var form = document.getElementById("filter-form")
		function populateFilterForm() {
			getTags()
			for (var i = 0; i < tags.length; i++) {
				var input = document.createElement("INPUT");
				var label = document.createElement("LABEL");
				var tag = tags[i];

				input.type = "checkbox";
				input.name = tag;
				input.id = tag+"_id";
				input.value = "value";
				input.className = "filter-input";
				label.htmlFor = tag+"_id";
				label.textContent = tag;

				form.appendChild(input);
				form.appendChild(label);
				form.appendChild(document.createElement("br"));
			};
			addInputEventListeners();
		};

		populateFilterForm()

		// The filters are hidden in a collapsible element activated by clicking the button.
		var coll = document.getElementsByClassName("collapsible");
		for (var i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = document.getElementById('filter-form-div')
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				};
			});
		};

		// Updates the list of tags to use for filtering when the checkboxes are ticked or unticked.
		function addInputEventListeners() {
			var filterInputs = document.getElementsByClassName("filter-input")
			for (var i = 0; i < filterInputs.length; i++) {
				var filterInput = filterInputs[i];
				filterInput.addEventListener("change", function(event) {
					if (this.checked) {
						tagsToFilter.push(event.target.name)
						filterByTags();
					} else {
						const index = tagsToFilter.indexOf(event.target.name);
						if (index > -1) {
							tagsToFilter.splice(index, 1);
						};
						filterByTags();
					};
				});
			};
		};

		// This adds an event listener to the slider to change the tag filtering style.
		var slider = document.getElementById('any_all_slider')
		slider.checked = false;
		slider.addEventListener("change", function(event) {
			if (this.checked) {
				filterByAnyTags = false;
				filterByTags();
			} else {
				filterByAnyTags = true;
				filterByTags();
			};
		});

		var loadMoreButton = document.getElementById("loadMore");
		var postsToShow = 5;
		var filteredPostsCopy;
		paginate(postsToShow);	
		function paginate(numnberOfPosts) {
			filteredPostsCopy = filtered ? filteredPosts.slice() : posts.slice();
			filteredPosts = filteredPostsCopy.slice(0, numnberOfPosts);
			if (filteredPostsCopy.length < postsToShow) {
				loadMoreButton.innerText = "No More Posts to Load"
				loadMoreButton.style.cursor = 'default';
			} else {
				loadMoreButton.innerText = "Load More Posts"
				loadMoreButton.style.cursor = 'pointer';
			};
		}

		loadMoreButton.addEventListener("click", function(){
			loadMore();
		});

		function loadMore() {
			if (postsToShow == posts.length || postsToShow + postsToShow > posts.length) {
				postsToShow = posts.length;
				paginate(postsToShow);
				loadMoreButton.innerText = "No More Posts to Load"
				loadMoreButton.style.cursor = 'default';
			} else {
				postsToShow += postsToShow;
				paginate(postsToShow);
			}
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

	.filters {
		padding: 0 18px;
		max-height: 0;
		max-width: 100%;
		overflow: auto;
		transition: max-height 0.2s ease-out;
		border-bottom: none;
		display: block;
	}

	 /* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 23px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider {
		background-color: #2196F3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196F3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(16px);
		-ms-transform: translateX(16px);
		transform: translateX(16px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	} 

	#loadMore {
		background-color: inherit;
		color: inherit;
		cursor: pointer;
		border: none;
		text-align: center;
		outline: none;
		font-size: 15px;
		border-bottom: none;
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
	<div class="filters" id="filter-form-div">
		<label class="switch" for="any_all_slider">
			<input type="checkbox" id="any_all_slider">
			<span class="slider round"></span>
		</label>
		<p style="display: inline-block;">Find Posts with {filterByAnyTags ? "Any" : "All"} Tags</p>
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

<button id="loadMore">Load More Posts</button>