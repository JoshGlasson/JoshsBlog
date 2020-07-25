---
slug: '2020-07-24 creating-the-blog'
title: 'Creating This Blog.'
headline: 'How to create a blog using Svelte'
image: "./images/2020-07-24 creating-the-blog/svelte_logo.png"
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
    <img src="./images/2020-07-24 creating-the-blog/darkmode_app.png" style="width:50%;"/>
    <figcaption>An App with a Button to toggle a dark mode</figcaption>
  </figure>
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/darkmode_button.png" style="width:50%;"/>
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
    <img src="./images/2020-07-24 creating-the-blog/recent_posts.png" alt="The upgraded recent posts page" />
    <figcaption>The improved recent posts page, you must have seen it to get here though!</figcaption>
  </figure>
</div>

The final part was to host the blog somewhere. Up to now I had been checking how it looked using `npm run dev` to run the app on `localhost:3000`. It was helpful as it would automatically update after I saved any files. But I know wanted to deploy it somewhere. I decided to use GitHub Pages as it is free and integrated directly with my repository.

I found another blog post which was helpful in getting this working:
<a href="https://dev.to/pixeline/how-to-deploy-a-sapper-pwa-on-github-pages-47lc" target="_blank">https://dev.to/pixeline/how-to-deploy-a-sapper-pwa-on-github-pages-47lc</a>

I pretty much followed it to the word here, my only addition was adding this to my `package.json` file in the `scripts {}` section:
<div id="codeSnippet">

```json
"predeploy": "npx sapper export"
```
</div>

This meant that before trying to deploy the app it would always rebuild and export it.

I got this working and up on my GitHub Pages pretty quickly, but I would have to run `npm run deploy` everytime I wanted to deploy any changes. I decided this was too much work, and looked into using GitHub Actions to deploy it for me!

I looked in the Actions tab of my repo and selected one of the ones using `npm` to work as a template. I deleted everything that wasn't relevant, and ended up with the below file in `.github/workflows/node.js.yml`:

<div id="codeSnippet">

```yaml
name: Svelte GitHub Pagese CI/CD

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm run deploy
```
</div>

This meant that any time I pushed or merged to master, it would kick of this action, which will build and deploy my project into my gh-pages branch, where GitHub Pages reads the data from.

<div id="imageDiv">
  <figure>
    <img src="./images/2020-07-24 creating-the-blog/github_actions.png" alt="GitHub Actions running my deploy script" />
    <figcaption>GitHub Actions running my deploy script after each merge</figcaption>
  </figure>
</div>

The end result of all this is the blog you are currently reading! It is hosted here:
<a href="https://joshglasson.github.io/JoshsBlog/" target="_blank">https://joshglasson.github.io/JoshsBlog/</a>

Hope this was interesting and helpful!

