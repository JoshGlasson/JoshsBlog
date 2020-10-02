---
slug: 'embedding_tweets'
title: 'Embedding Tweets In Svelte Blog Posts.'
headline: 'Reliably embed tweets in blog posts when using Svelte and Sapper'
image: "./images/icons_same_size/twitter_logo.png"
sortdate: "2020-08-12"
originaldate: "2020-08-12"
tags: ['Software Development' , 'Svelte', 'HTML, CSS & JavaScript']
---

I have embedded a few tweets in my recent blog posts, you can see examples <a href="https://joshglasson.com/blog/f1_2020_70th_anniversary_gp" target="_blank">here in my last F1 recap</a>.

Originally I was using Twitter's built in embed functionality. If you click the embed option on a tweet, you get taken to another page which provides some code for you to use. Here is an example of this code:

<div id="codeSnippet">

```html
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Max&#39;s grandma is probably pretty fast though, right?!? 👵 🚀<a href="https://twitter.com/hashtag/F170?src=hash&amp;ref_src=twsrc%5Etfw">#F170</a> 🇬🇧 <a href="https://twitter.com/hashtag/F1?src=hash&amp;ref_src=twsrc%5Etfw">#F1</a> <a href="https://t.co/c0CpuE3iGE">pic.twitter.com/c0CpuE3iGE</a></p>&mdash; Formula 1 (@F1) <a href="https://twitter.com/F1/status/1292573366981816320?ref_src=twsrc%5Etfw">August 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
```
</div>

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/screenshot-2020-08-12-at-11.33.43.png" alt="Embed option on Tweet"/>
    <figcaption>Embed option on Tweet</figcaption>
  </figure>
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/screenshot-2020-08-12-at-11.34.10.png" alt="Twitter Embed Website"/>
    <figcaption>Twitter Embed Website</figcaption></a>
  </figure>
</div>

I also added `tw-align-center` to make the tweet center itself in the div.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/embedded-tweet.png" style="border-style: solid; border-color: white;" alt="Embedded Tweet"/>
    <figcaption>Embedded Tweet</figcaption>
  </figure>
</div>


I thought this worked fine, I could see the tweet loading and it was visible on the page. I added `data-theme: dark` to change the background colour of the tweet to be in dark mode too.

The way it seemed to work was that the script Twitter included in the embed code would resolve the `blockquote` into a bunch of divs containing the content.

I was happy with this, so I pushed it live. However once it was live, I was looking at it on my phone, and I noticed that most of the time the tweet would not load:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/embedded-tweet-not-loading.png" style="border-style: solid; border-color: white;" alt="Embedded Tweet Not Loading"/>
    <figcaption>Embedded Tweet Not Loading</figcaption>
  </figure>
</div>

I had a look into it and realised that in these cases, the `blockquote` never got resolved, so just stayed on the page as a `blockquote` element. Below you can see what it is meant to look like vs how it looked when it wasn't working.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/resolved-code.png" alt="Resolved Code to Display Tweet"/>
    <figcaption>Resolved Code to Display Tweet</figcaption>
  </figure>
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/unresolved-blockquote.png" alt="Unresolved Blockquote Remaining on Page"/>
    <figcaption>Unresolved Blockquote Remaining on Page</figcaption></a>
  </figure>
</div>

I had a feeling this was to do with all the complexity around JavaScript being asynchronous, and also that the way I am using Svelte and Sapper is that is uses Server Side Rendering (SSR), which can cause issues.

To get around this, I decided it would be better to load the tweets after the page had loaded, to avoid these problems. I tried using a svelte twitter widgets plugin initially, but I was unable to get it to work. I did a bit more digging, and found <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-javascript-factory-function" target="_blank">some information from Twitter themselves</a>. Using this JavaScript factory function, it would allow you to dynamically insert tweets, which is basically what I wanted. Firsly I added this script to the `_layout.svelte` file which applied to every other file. This meant it should be available anywhere I needed it:

<div id="codeSnippet">

```html
<script id="twitter-wjs" src="https://platform.twitter.com/widgets.js"></script>
```
</div>

To create the tweet using the factory, a function like the below would be needed:
<div id="codeSnippet">

```javascript
twttr.widgets.createTweet(
  '20', // id of the tweet
  document.getElementById('container'), // parent element where tweet will go
  {
    theme: 'dark' // tweet theme
  }
);
```
</div>

As I now needed to only know the id of a tweet, I replaced my `blockquote` code in the markdown file, with a simple `p` tag containing the id of the tweet. I gave the tag a class of ***tweetToEmbed*** to make it easy to identify. I set the display to none so that the number does not show on the page.

<div id="codeSnippet">

```html
<p class="tweetToEmbed" style="display: none;">1293525663702450176</p>
```
</div>

Next I added a function in my `[slug].svelte` file, which is where the posts are rendered into actual pages, to use this factory function.

<div id="codeSnippet">

```javascript
function createTweets() {
  var tweets = document.getElementsByClassName('tweetToEmbed');
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    var parent = tweet.parentElement;
    window.twttr.widgets.createTweet(
      tweet.innerText,
      parent,
      {
        align: 'center',
        theme: 'dark',
        dnt: 'true'
      }
    );
  };
}
```
</div>

Basically I am retrieving every ***tweetToEmbed*** element, and for each one I am getting the parent element and adding the tweet into it using the factory. 

It worked exactly as I wanted it to, it was rendering the tweets every time, and with minimal delay. 

I really wanted to be able to change the theme of the tweet dynamically however, as I had done with the rest of the website. I had a think, and was able to achieve this doing the below.

First I needed to identify when the theme had changed. I knew that when it changed, a `dark-mode` class was either appended or removed from the body tag. So I Googled how I could watch for these changes, and found out about `MutationObserver`. I added this code to my JavaScript:

<div id="codeSnippet">

```javascript
var body = document.body;
const mutationObserver = new MutationObserver(callback)
mutationObserver.observe(body, { attributes: true })
function callback(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      // do something after class has changed
    };
  });
};
```
</div>

If the class of the `body` changed, this would catch it. Unfortunately it didn't seem to capture what the change was, so I couldn't tell from here what theme it was changing to. So I added another function called `checkTheme`:

<div id="codeSnippet">

```javascript
function checkTheme() {
  var dark_toggle = localStorage.getItem('dark_mode_toggle');
  if (dark_toggle === 'false') {
    return 'light';
  } else {
    return 'dark';
  };
};
```
</div>

This function made use of the localStorage item I was using to set the theme when the page first loads. Now I could tell what the theme was, I could pass this to my `createTweets` function to update the theme of the tweets. However, I would first need to delete any existing tweets, otherwise they would all just stack up as a new one would be created every time the theme was changed on the page. I added a function to deal with this too. Here is all the completed code for doing everything I just talked about:

<div id="codeSnippet">

```javascript

// listening for changes to the body class
var body = document.body;
const mutationObserver = new MutationObserver(callback)
mutationObserver.observe(body, { attributes: true })
function callback(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      createTweets(checkTheme()); // calls createTweets with the theme which is decided by checkTheme
    };
  });
};

// called to figure out what the theme is currently
function checkTheme() {
  var dark_toggle = localStorage.getItem('dark_mode_toggle');
  if (dark_toggle === 'false') {
    return 'light';
  } else {
    return 'dark';
  };
};

// calling the method to load the tweet when the page loads
createTweets(checkTheme());

// creating the tweet with a theme that is passed in
function createTweets(theme) {
  cleanupTweets(); // first deletes any existing tweets on the page
  var tweets = document.getElementsByClassName('tweetToEmbed');
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    var parent = tweet.parentElement;
    window.twttr.widgets.createTweet(
      tweet.innerText,
      parent,
      {
        align: 'center',
        theme: theme, // uses whatever theme is passed in
        dnt: 'true'
      }
    );
  };
}

// finds all existing tweets and removes them from the parent node
function cleanupTweets() {
  var tweets = document.getElementsByClassName('twitter-tweet twitter-tweet-rendered');
  while(tweets.length > 0){
    tweets[0].parentNode.removeChild(tweets[0]);
  };
};
```
</div>

So now the tweet is able to dynamically change with the theme of the website!

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/08/tweet-theme-changing.gif" alt="A tweet switching themes"/>
  </figure>
</div>

You can see there is a small delay where the JavaScript is getting the tweet, but it is pretty minimal.

I spent a couple of days fumbling around with plugins, scripts, JavaScript and all sorts trying to get this to work, so I hope that if anyone else is in this very specific situation, they are able to find this and maybe get some inspiration to help them solve their issues!

You can have a play around with it and hopefully see it working with the tweet below:

<div id="imageDiv">
    <p class="tweetToEmbed" style="display: none;">1293525663702450176</p>
</div>

<br >