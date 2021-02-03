<script context="module">
    export async function preload(page) {
        return this.redirect(302, '/');
    }
</script>

<svelte:head>
    <title>Josh's Blog</title>
	<meta name="description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@joshglasson" />
	<meta name="twitter:creator" content="@joshglasson" />
	<meta property="og:title" content="Josh's Blog">
	<meta property="og:image" content="https://joshglasson.co.uk/logo.png">
	<meta property="og:description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta property="og:url" content="https://joshglasson.co.uk/">
	<!-- Google Adsense -->
	<script data-ad-client="ca-pub-1501125542619304" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</svelte:head>