# Joshs Blog

![Build Sapper and Deploy to GitHub Pages](https://github.com/JoshGlasson/JoshsBlog/workflows/Build%20Sapper%20and%20Deploy%20to%20GitHub%20Pages/badge.svg)

This is the source code for my blog site. The gh-pages branch contains the code used to deploy to GitHub Pages.

The blog can be found here: <a href="https://joshglasson.com/" target="_blank">https://joshglasson.com/</a>

## Things to Remember

- In the blog posts, original date is the date the blog was posted. This is the date displayed at the top of the page. Sort Date is the date used to sort the posts on the Recent Posts page. If a post is updated substantially, the sort date should be updated in order to move the post back up the list, however the original date should remain the same. It should be clear in the post what was updated and when.

<br>

## Embedding a Tweet

I have added some JavaScript to take a Twitter status id from the blog content markdown and turn it into a tweet. This is how to add a tweet:

```html
<div id="imageDiv">
    <p class="tweetToEmbed" style="display: none;">1302644729792749568</p>
</div>
```

The `imageDiv` wrapper is there to centre the tweet. Then there is a `p` tag inside, with the class `tweetToEmbed`. This is required for the JavaScript code to recognise it is a tweet. `style="display: none;"` is also required to stop the number appearing on the page. The tweet status id can be found in the url of any tweet, generally will be the long number at the end. In `[slug].svelte` you can see the code for all this, including adapting the theme to match the website:

```javascript
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
```
