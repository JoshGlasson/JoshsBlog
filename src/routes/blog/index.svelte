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
	export let filterByAnyTags = true;

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
				input.name = tag;
				input.id = tag+"_id";
				input.value = "value";
				input.className = "filter-input";
				label.htmlFor = tag+"_id";
				label.textContent = name;

				console.log(label)

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
				var content = document.getElementById('filter-form-div')
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

		var slider = document.getElementById('any_all_slider')
		slider.addEventListener("change", function(event) {
			if (this.checked) {
				filterByAnyTags = false;
				filterByTags();
			} else {
				filterByAnyTags = true;
				filterByTags();
			};
		});
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

	#tag_filter_checkbox_id {
		display: inline-block;
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