<script>
	import { onMount } from 'svelte';
	export let posts;
	export let currentPost;
	let postsArray = Object.values(posts)[0].slice();

	onMount( async () => {
		let recentPosts = [];
		let relatedPosts = [];
		let allRelatedPosts = [];

		// Remove current post from postsArray so it doesn't appear in the recommendations
		for (var i = 0; i < postsArray.length; i++) {
			if (postsArray[i].title == currentPost.title) {
				postsArray.splice(i, 1);
			}
		}
		recentPosts = postsArray.slice().splice(0,2)

		// Find posts with same 1st tag as current post
		for (var i = 0; i < postsArray.length; i++) {
			var post = postsArray[i];
			if (currentPost.tags.indexOf(post.tags[0]) > -1) {
				allRelatedPosts.push(post);
			} 
		}

		// Generate two random numbers within range of 0 to amount of posts in order to select two random posts
		async function getTwoRandomRelatedPosts(min, max) {
			if (allRelatedPosts.length > 1) { 
				let int1 = Math.floor(Math.random() * (max - min +1)) + min;
				let int2 = Math.floor(Math.random() * (max - min +1)) + min;
				while(int1 === int2) {
					int2 = Math.floor(Math.random() * (max - min +1)) + min;
				}
				relatedPosts.push(allRelatedPosts[int1]);
				relatedPosts.push(allRelatedPosts[int2]);
			} else {
				relatedPosts = allRelatedPosts.slice();
			}
		}

		await buildRelatedPosts();
		await buildRecentPosts();

		// Build related posts, including CSS.
		async function buildRelatedPosts() {
			await getTwoRandomRelatedPosts(0, allRelatedPosts.length - 1)
			var relatedDiv = document.getElementById("relatedPosts");
			if (relatedPosts.length > 0) {
				var relatedPostsHeading = document.createElement("h1");
				relatedPostsHeading.innerText = "Related Posts";
				relatedPostsHeading.style.borderBottom = "1px solid lightgray"
				relatedDiv.insertBefore(relatedPostsHeading, relatedDiv.firstChild);
			}
			for (var i = 0; i < relatedPosts.length; i++) {
				var relPost = relatedPosts[i];
				var relatedPostsDiv = document.createElement("div");
				var relatedPostsImageA = document.createElement("a");
				var relatedPostsImage = document.createElement("img");
				var relatedPostsTitleA = document.createElement("a");
				var relatedPostsTitle = document.createElement("h2");
				var relatedPostsHeadline = document.createElement("h3");
				relatedPostsHeadline.innerText = relPost.headline;
				relatedPostsHeadline.style.verticalAlign = "middle";
				relatedPostsTitle.innerText = relPost.title;
				relatedPostsTitleA.href = "blog/" + relPost.slug;
				relatedPostsTitleA.rel = "external";
				relatedPostsImage.src = relPost.image;
				relatedPostsImage.alt = "Post Thumbnail";
				relatedPostsImage.className = "Thumbnail";
				relatedPostsImage.style.display = "block";
				relatedPostsImage.style.float = "left";
				relatedPostsImage.style.maxWidth = "100px";
				relatedPostsImage.style.maxHeight = "100px";
				relatedPostsImage.style.margin = "0 1em 0 0"
				relatedPostsImageA.href = "blog/" + relPost.slug;
				relatedPostsImageA.rel = "external";
				relatedPostsImageA.appendChild(relatedPostsImage);
				relatedPostsTitleA.appendChild(relatedPostsTitle);
				relatedPostsDiv.appendChild(relatedPostsImageA);
				relatedPostsDiv.appendChild(relatedPostsTitleA);
				relatedPostsDiv.appendChild(relatedPostsHeadline);
				relatedPostsDiv.style.margin = "0 0 1em 0";
				relatedPostsDiv.style.width = "100%";
				relatedPostsDiv.style.overflowX = "auto";
				relatedDiv.appendChild(relatedPostsDiv);
			}
		}

		// Build recent posts, including CSS.
		async function buildRecentPosts() {
			var recentDiv = document.getElementById("recentPosts");
			if (recentPosts.length > 0) {
				var recentPostsHeading = document.createElement("h1");
				recentPostsHeading.innerText = "Recent Posts";
				recentPostsHeading.style.borderBottom = "1px solid lightgray"
				recentDiv.insertBefore(recentPostsHeading, recentDiv.firstChild);
			}
			for (var i = 0; i < recentPosts.length; i++) {
				var recPost = recentPosts[i];
				var recentPostsDiv = document.createElement("div");
				var recentPostsImageA = document.createElement("a");
				var recentPostsImage = document.createElement("img");
				var recentPostsTitleA = document.createElement("a");
				var recentPostsTitle = document.createElement("h2");
				var recentPostsHeadline = document.createElement("h3");
				recentPostsHeadline.innerText = recPost.headline;
				recentPostsHeadline.style.verticalAlign = "middle";
				recentPostsTitle.innerText = recPost.title;
				recentPostsTitleA.href = "blog/" + recPost.slug;
				recentPostsTitleA.rel = "external";
				recentPostsImage.src = recPost.image;
				recentPostsImage.alt = "Post Thumbnail";
				recentPostsImage.className = "Thumbnail";
				recentPostsImage.style.display = "block";
				recentPostsImage.style.float = "left";
				recentPostsImage.style.maxWidth = "100px";
				recentPostsImage.style.maxHeight = "100px";
				recentPostsImage.style.margin = "0 1em 0 0"
				recentPostsImageA.href = "blog/" + recPost.slug;
				recentPostsImageA.rel = "external";
				recentPostsImageA.appendChild(recentPostsImage);
				recentPostsTitleA.appendChild(recentPostsTitle);
				recentPostsDiv.appendChild(recentPostsImageA);
				recentPostsDiv.appendChild(recentPostsTitleA);
				recentPostsDiv.appendChild(recentPostsHeadline);
				recentPostsDiv.style.margin = "0 0 1em 0";
				recentPostsDiv.style.width = "100%";
				recentPostsDiv.style.overflowX = "auto";
				recentDiv.appendChild(recentPostsDiv);
			}
		}
	})
</script>

<div id="recentPosts">
</div>

<div id="relatedPosts">
</div> 