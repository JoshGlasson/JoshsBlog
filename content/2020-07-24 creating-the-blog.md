---
slug: '2020-07-24 creating-the-blog'
title: 'Creating This Blog.'
headline: 'How to create a blog using Svelte'
image: "./images/2020-07-24 creating-the-blog/svelte_logo.png"
sortdate: "2020-07-24"
originaldate: "2020-07-24"
tags: ['Software Development' , 'Svelte', 'HTML, CSS & JavaScript']
---

I have talked about the reasons for me writing this blog on the sites <a href="about"><strong>about</strong></a> page, so here is <strong><i>how</i></strong>.

I attended a course through Makers Academy where <a href="https://mco.dev/" target="_blank">Marc Cohen</a> from Google gave us a quick run down of how to use Go. During the talk he mentioned <a href="https://svelte.dev/" target="_blank">Svelte</a>, which I decided to look into. I had quite liked working in React and saw it was similar, but if anything easier. 
After a bit of research I decided why not create my own blog!

I found a guide on how to create a blog website based off of Sveltes sapper template:
<a href="https://www.mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/" target="_blank">https://www.mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/</a>

I followed this blog post exactly to get a template to start working from. The only change was at the point of writing the blog post in markdown. The blog specifies that the file name and slug have to be the same, but theirs are different, so the example doesn't work!

Now I had a solid baseline to start with, I started to think about what I would like to change. For some reason, my first thought was that it needed a dark mode. I did a quick bit of Googling and found <a href="https://svelte.dev/repl/ed4fef4beceb4b0eb295d1f9fdf3bd62?version=3.6.9" target="_blank">this on the Svelte REPL</a>:

<div id="imageDiv">
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/darkmode_app.png" style="width:50%;" alt="An App with a Button to toggle a dark mode"/>
    <figcaption>An App with a Button to toggle a dark mode</figcaption>
  </figure>
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/darkmode_button.png" style="width:50%;" alt="Code for the Dark Mode Button"/>
    <figcaption>Code for the Button</figcaption></a>
  </figure>
</div>

This puts a button on the screen that lets you swap toggle dark mode on and off. I decided to take it to the next step, instead of having a button, I wanted to have it on my nav bar, and I also wanted to store the selection as a cookie so a users preference would be remembered.

I added the following code to the top of my Nav component:

<div id="codeSnippet">

```javascript
export let dark_toggle;

function toggle() {
  console.log("Start toggle: " + dark_toggle)
  if (dark_toggle === 'false') {
    window.document.body.classList.add('dark-mode')
    localStorage.setItem('dark_mode_toggle', 'true')
    dark_toggle = 'true'
  } else {
    window.document.body.classList.remove('dark-mode')
    localStorage.setItem('dark_mode_toggle', 'false')
    dark_toggle = 'false'
  }
  console.log("End toggle: " + dark_toggle)
}

onMount(async () => {
  dark_toggle = localStorage.getItem('dark_mode_toggle')
  console.log("From Storage: " + dark_toggle)
  if (dark_toggle === 'true') {
    window.document.body.classList.add('dark-mode')
  }
});
```
</div>

The first part is the `toggle()` function, which when activated checks a variable called `dark_toggle`. If it is set to false, then it will apply the dark mode, and set the variable to true. If it is already true it does the opposite. As well as setting the local variable, it also sets an item in `localStorage` called `dark_mode_toggle` to the same value. This means that it is stored locally on the users browser.

The `onMount` method will run as soon as the document is loaded, and it retrieves the flag from `localStorage` and sets the theme accordingly.

I added the following to my Nav code too, in the list which makes up the links:

<div id="codeSnippet">

```javascript
<li><a on:click={toggle}>{dark_toggle === 'true' ? "light" : "dark"} mode</a></li>
```
</div>

So `on:click={toggle}` means it will activate the `toggle()` function when clicked. The text it displays will change depending on what theme is selected too. I also added `cursor: pointer;` to my CSS rules to ensure that the cursor changed to a pointer when hovering over the option in the nav bar. This was the outcome:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2020/07/blog_dark_mode.gif" alt="A gif of my blog switching themes"/>
  </figure>
</div>

After getting this working, I made a few more changes to the front and about pages to make them relevant to me. The next big change I made was to the Recent Posts page. You can see in the blog post I started with that the recent posts were just displayed as a list of links. I wanted mine to be a bit more fancy, with a cover image, title and headline. Looking at how they had created the link using the title in the markdown files, it was easy to add more information. At the beggining of each markdown file, I added headline and image so I could then pull them out when creating the recent posts.

Here is the information in the markdown file:
<div id="codeSnippet">

```md
---
slug: '2020-07-24 creating-the-blog'
title: 'Creating This Blog.'
headline: 'How to create a blog using Svelte'
image: "./images/svelte_logo.png"
---
```
</div>

Which is then accessed in the `index.svelte` file:
<div id="codeSnippet">

```html
{#each posts as post}
	<div>
		<img src={post.image} alt="Post Display"/>
		<a rel='prefetch' href='blog/{post.slug}'><h1>{post.title}</h1></a>
		<h3>{post.headline}</h3>
	</div>
{/each}
```
</div>

Now I had more information to work with, I changed the CSS rules to make the page look more appealing:

<div id="codeSnippet">

```css
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
```
</div>

The end result was this:

<div id="imageDiv">
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/recent_posts.png" alt="The improved recent posts page" />
    <figcaption>The improved recent posts page, you must have seen it to get here though!</figcaption>
  </figure>
</div>

Nexy I wanted to host the blog somewhere. Up to now I had been viewing the blog locally using `npm run dev` to run the app on `localhost:3000`. It was helpful as it would automatically update after I saved any files, but I was now ready to deploy it somewhere actually visible to the world. I decided to use GitHub Pages as it is free and integrated directly with my repository.

I found another blog post which was helpful in getting this working:
<a href="https://dev.to/pixeline/how-to-deploy-a-sapper-pwa-on-github-pages-47lc" target="_blank">https://dev.to/pixeline/how-to-deploy-a-sapper-pwa-on-github-pages-47lc</a>

I pretty much followed it to the word here, my only addition was adding this to my `package.json` file in the `scripts {}` section:
<div id="codeSnippet">

```json
"predeploy": "npx sapper export"
```
</div>

This meant that before trying to deploy the app it would always rebuild and export it. I got this working and up on my GitHub Pages pretty quickly, so I can deploy with a simple `npm run reploy`. However running that command every time would be a bit annoying, so I added a GitHub Action to deploy it automatically. 

I found this post which helped me set up a `sapper_build.yml` file:
<a href="https://github.com/marketplace/actions/sapper-action" target="_blank">https://github.com/marketplace/actions/sapper-action</a>

<div id="codeSnippets">

```yml
name: Build Sapper and Deploy to GitHub Pages

on:
    push:
        branches: [ master ]
    pull_request:
        branches: [ master ]

jobs:
  build_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Build Sapper
        uses: truewebartisans/actions-sapper@master
        with:
            args: "--basepath JoshsBlog --legacy"
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          publish_dir: __sapper__/export/JoshsBlog/
          publish_branch: gh-pages
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
</div>

This meant that any time I pushed or merged to master, it would kick off this action, which will build and deploy my project into my gh-pages branch, where GitHub Pages reads the data from.

<div id="imageDiv">
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/github_actions.png" alt="GitHub Actions running my deploy script" />
    <figcaption>GitHub Actions running my deploy script after each merge</figcaption>
  </figure>
</div>


The end result of all this is the blog you are currently reading! It is hosted here:
<a href="https://joshglasson.github.io/JoshsBlog/" target="_blank">https://joshglasson.github.io/JoshsBlog/</a>


After seeing it live I realised that the posts were in chronological order, as in oldest at the top. That doesn't make much sense for a blog, so I flipped it round by editing the function used to retrieve the posts:

<div id="codeSnippet">

```javascript
export function preload({ params, query }) {
  return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
    posts.sort().reverse()
    return { posts };
  });
}
```
</div>

I then viewed it on my phone and felt some of the images were a bit too small, so I wanted the images to expand when clicked. I started following a guide on <a href="https://www.w3schools.com/howto/howto_css_modal_images.asp" target="_blank">using modals by w3schools</a> which was a helpful starting point. However there was a couple of problems. The first was that `document` did not exist straight away for me, so it would throw an error, the second was their example only worked for one image, to have more than one you would have to specify every single image id.

To solve the first problem, I used `onMount` to wait for the page to load before triggering the script, so `document` definitely existed before I tried accessing it.
To solve the second problem I had to change a little more. Instead of getting a single element by id, I got all elements that had the `img` tag.
<div id="codeSnippet">

```javascript
var img = document.getElementsByTagName("IMG");
```
</div>

Now that I had an array of all my image elements, instead of attaching an `onclick` to a single element, I looped through my array and an attached event listener to each image.

<div id="codeSnippet">

```javascript
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(event){
    event.preventDefault()
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
}; 
```
</div>

This worked exactly as intended!

I wanted to be able to swipe to close the images when viewing on mobile too, so I added some more functions to handle this:

<div id="codeSnippet">

```js
var touchstartY = 0;
var touchendY = 0;
window.addEventListener('touchstart', function(event) {
  if (modal.style.display === 'block') {
    console.log('touchstart');
    console.log(event);
    touchstartY = event.changedTouches[0].screenY;
  }
}, false);

window.addEventListener('touchend', function(event) {
  if (modal.style.display === 'block') {
    console.log('touchend');
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
  }
}, false);

function handleGesure() {
  var swiped = 'swiped: ';
  
  var dif = Math.abs(touchstartY - touchendY);
  var h = window.innerHeight/3;
  console.log(dif)
  if (dif > h) {
    closeModal()
  }
}

function closeModal() {
  modal.style.display = 'none';
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.body.style.left = ''
  document.body.style.transform = ''
}
```
</div>

Basically this code listens for touches on the screen whilst the modal is open. It records the start and end position for the touches on the y axis (so only swipes up or down). It calculates the difference between the two to see how far the user swiped, then compares that to the height of the screen. If the distance swiped is over a third of the screen size it will trigger the method to close the modal.

I also had to add some styling here to ensure that swiping didn't change the position on the body behind the modal, as at first it would scroll the page. I updated the event listener that opened the modal: 

<div id="codeSnippet">

```javascript
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(event){
    event.preventDefault();
    document.body.style.top = `-${window.scrollY}px`;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.style.position = 'fixed';
  });
}; 
```
</div>

`document.body.style.top = '-${window.scrollY}px'` records the current scroll position on the screen. This had to go before the opening of the modal otherwise the window would change from referring to the body to referring to the modal. `document.body.style.position = 'fixed';` stops the screen from scrolling.

The following in the `closeModal()` function resets these values back to normal upon closing the modal:

<div id="codeSnippet">

```javascript
const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);
document.body.style.left = ''
document.body.style.transform = ''
```
</div>

I hope this was interesting and helpful to anyone else trying to build a website with Svelte and Sapper!

