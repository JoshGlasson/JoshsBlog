<script context="module">
	import Signature from '../../components/Signature.svelte';
	import RecentPosts from '../../components/RecentPosts.svelte';

	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		const postsData = await this.fetch(`blog.json`)
		.then(r => r.json())
		.then(posts => {
			posts.sort((a,b) => (Date.parse(a.sortdate) > Date.parse(b.sortdate)) ? 1 : ((Date.parse(b.sortdate) > Date.parse(a.sortdate)) ? -1 : 0)).reverse()
			return { posts };
		});

		if (res.status === 200) {
			return { post: data, posts: postsData };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let post;
	export let posts;

	let epochPostDate = new Date(post.originaldate);
	let epochUpdateDate = new Date(post.sortdate);
	let date = epochPostDate.toDateString();
	let posturl = "https://joshglasson.co.uk/blog/" + encodeURI(post.slug)
	let imageurl = "https://joshglasson.co.uk" + encodeURI(post.image.substring(1))


	onMount( async () => {
		// jQuery Plugin
		const jQueryModule = await import('jquery');
		let jQuery = jQueryModule.default;

		// Reading Time Plugin
		const readingTimeModule = await import ('reading-time');
		let readingTime = readingTimeModule.default;

		// Use Reading Time plugin to estimate reading time. Excludes code snippets and is using the post.html so anything added by JavaScript, and anything not in the content (like the title) is not included
		async function getReadingTime() {
			var contentWithoutCodeSnippets = await textWithoutCodeSnippets();
			const stats = readingTime(contentWithoutCodeSnippets);
			var datediv = document.getElementsByClassName("readTime")[0]
			var updatedate = document.createElement("h3");
			var italic = document.createElement("i");
			italic.textContent = stats.text + " (" + stats.words + " words)";
			updatedate.appendChild(italic);
			datediv.appendChild(updatedate);
		}

		// Converts the post.html into an htmlObject using jQuery, then excludes codeSnippets so they are not included in the word count/reading time.
		async function textWithoutCodeSnippets() {
			var htmlObject = jQuery(post.html);
			var innerTextWithoutSnippets = "";
			for (var i = 0; i < htmlObject.length; i++) {
				if(htmlObject[i].id !== 'codeSnippet') {
					innerTextWithoutSnippets = innerTextWithoutSnippets + htmlObject[i].textContent;
				}
			}
			return innerTextWithoutSnippets;
		}

		getReadingTime()
		
		// RELOAD ON FIRST VISIT TO PAGE TO FIX ISSUE WITH PHOTOSWIPE NOT DISPLAYING IMAGES ON FIRST LOAD
		// if (window.localStorage) {
		// 	if (!localStorage.getItem('firstLoad')) {
		// 		localStorage['firstLoad'] = true;
		// 		window.location.reload();
		// 	} else {
		// 		localStorage.removeItem('firstLoad');
		// 	}
		// }

		// Checks sort date vs post date to see if theres been an update, displays updated date under original if so.
		if(epochPostDate.getTime() != epochUpdateDate.getTime()) {	
			var datediv = document.getElementsByClassName("date")[0]
			var updatedate = document.createElement("h3");
			var italic = document.createElement("i");

			italic.textContent = "Updated on " + epochUpdateDate.toDateString();
			
			updatedate.appendChild(italic);
			datediv.appendChild(updatedate);
		};

		// Wrap code snippets
		var codeSnippets = document.getElementsByTagName("code");
		for (var i = 0; i < codeSnippets.length; i++) {
			var snippet = codeSnippets[i];
			snippet.style.whiteSpace = 'pre-wrap';
		};

		// Watch for change to the class of the body, seeing if the theme has changed.
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

		// Find current theme
		function checkTheme() {
			var dark_toggle = localStorage.getItem('dark_mode_toggle');
			if (dark_toggle === 'false') {
				return 'light';
			} else {
				return 'dark';
			};
		};

		// Create tweets with current theme
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

		// Avoid duplication of tweets by deleting them first
		function cleanupTweets() {
			var tweets = document.getElementsByClassName('twitter-tweet twitter-tweet-rendered');
			while(tweets.length > 0){
				tweets[0].parentNode.removeChild(tweets[0]);
			};
		};

		// Get the images and create gallery with PhotoSwipe
		var img = document.getElementsByTagName("IMG")

		// Initialise variables
		var gallery;
		var galleryItems = [];
		var imageIndexes = [];
		
		// Get the photoswipe element
		var pswpElement = document.querySelectorAll('.pswp')[0];

		// Extracts the picture id from the hash if the user clicks on a direct link to an image
		function getHashValue(key) {
			var matches = location.hash.match(new RegExp(key+'=(\d+)'));
			return matches ? matches[1] : null;
		}

		// Adding click event listeners to every image on the page, which will open a modal when fired. Checks that the image is not a modal first.
		async function addImagesToGallery() {
			for (var i = 0; i < img.length; i++) {
				if (!img[i].className.includes("modal-content") && !img[i].className.includes("signature-image") && !img[i].className.includes("Thumbnail")) {
					var image = img[i];
					if (imageIndexes.indexOf(image.src) < 0) {
						var itemToAdd = {
							src: image.src,
							title: image.alt,
							w: image.width,
							h: image.height
						};
						galleryItems.push(itemToAdd);
						imageIndexes.push(image.src);
					}
					img[i].addEventListener('click', async function(event){
						event.preventDefault();
						var imageNum = imageIndexes.indexOf(this.src);
						await createGallery(imageNum);
						openGallery();
					});
				}; 
			};
		}

		// When an element is clicked, open the image gallery starting on that image
		async function createGallery(imageToStartOn) {
			var options = {
				index: imageToStartOn,
				galleryUID: post.slug,
				shareButtons: [
					{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
					{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
					{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
				],
				maxSpreadZoom: 3
			}
			await createPhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
			// add listener to the gallery to bring back the navbar
			gallery.listen('close', function() { 
				navbar.style.zIndex = 9999;
			});
		}

		async function createPhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options) {
			gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
		}

		// Uses the picture id from the hash to open the gallery when the page loads if the page has the right hash
		goToImageOnLoad();
		async function goToImageOnLoad() {
			await addImagesToGallery();
			if (window.location.hash != "") {
				var imageToDisplayOnLoad = getHashValue('pid');
				await createGallery(imageToDisplayOnLoad);
				openGallery();
			}
		}

		function openGallery() {
			gallery.init();
			navbar.style.zIndex = 0;
		}
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

	.readTime {
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

	.content :global(blockquote) {
		background: #f9f9f9;
		color: black;
		border-left: 10px solid #ccc;
		margin: 1.5em 10px;
		padding: 0.5em 10px;
		quotes: "\201C""\201D""\2018""\2019";
	}
	.content :global(blockquote:before) {
		color: #ccc;
		content: open-quote "\a";
		white-space: pre;
		font-size: 4em;
		line-height: 0.1em;
		vertical-align: -0.4em;
	}
	.content :global(blockquote:after) {
		color: #ccc;
		content: "\a" close-quote;
		white-space: pre;
		font-size: 4em;
		line-height: 0.1em;
		vertical-align: -0.4em;
	}
	.content :global(blockquote p) {
		display: inline;
	}

	/* 100% Image Width on Smaller Screens */
	@media only screen and (max-width: 700px){
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
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@joshglasson" />
	<meta name="twitter:creator" content="@joshglasson" />
	<meta property="og:title" content={post.title}>
	<meta property="og:image" content={imageurl}>
	<meta property="og:description" content={post.headline}>
	<meta property="og:url" content={posturl}>
</svelte:head>

<div class='postTitle'>
	<h1>{post.title}</h1>
	<h2><strong>{post.headline}</strong></h2>
</div>

<div class='postImage'>
	<img src={post.image} alt={post.title} width="100%"/>
</div>

<div class="date">
	<h3><i>Originally posted on {date}</i></h3>
</div>

<div class="readTime">
</div>

<div class='content'>
	{@html post.html}
</div>

<br>

<Signature />
<RecentPosts posts={posts} currentPost={post} />


<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>