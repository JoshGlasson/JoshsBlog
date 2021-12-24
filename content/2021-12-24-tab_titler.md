---
slug: '2021-12-24-tab_titler'
title: 'Tab Titler.'
headline: 'Making my browser tabs a little more organised'
image: "./images/icons/tools.png"
sortdate: "2021-12-24"
originaldate: "2021-12-24"
tags: ['Software Development' , 'Svelte', 'HTML, CSS & JavaScript']
---

I hate having millions of tabs open in my browser. When I see other developers with endless tiny tabs I can't help but think how many of those are probably now useless and could be closed. For that reason I try to keep my browser more organised.

One of the tools I use for this is <a href="https://addons.mozilla.org/en-GB/firefox/addon/tree-style-tab/" target="_blank">Tree Style Tab</a>, which handily keeps tabs in collapsible tabs.

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/12/tree-style-tabs.png" alt="Tree Style Tabs"/>
    <figcaption>Tree Style Tabs</figcaption>
  </figure>
</div>

I love it, and have recommended it to many people. Being able to group together Jira tickets with the corresponding code and any searches I have had to do whilst working on it, or keeping a support ticket alongside all of the investigation work, it just makes life much easier. 

However one thing I wanted was to be able to have a title tab, so I knew at a glance what each group of tabs was for. I looked around (albeit not for very long) before deciding that I could just do it myself!

I figured, *this will be easy, it's just changing the title*... Well it took longer than I thought! I haven't done much work on the blog recently and have forgotten a lot of how Svelte works with the document.


<h1 style="font-size:3em;">The Code</h1>

I created a new `.svelte` file in my routes folder, which represents a top level page in the website. So `tabtitle.svelte` becomes <a href="https://joshglasson.co.uk/tabtitle" target="_blank">https://joshglasson.co.uk/tabtitle</a>.

In here I had the code, which is really split into two main parts; the body and the script.

<h2 style="font-size:2em;">The Body</h2>

I will start with the body as it is very simple. The page only really needed two things:

1. A title tag in the head which sets the tab title
2. Some kind of entry field to change said title

I also decided it would be good to have a heading on the page to reflect the title as well. All that translates to this code:

<div id="codeSnippet">

```html
<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1 id=header>{title}</h1>

<form id="tabtitle">
	<input type="text" placeholder="Set Tab Title">
</form>
```
</div>

I have omitted some of the SEO crap that is in my svelte:head tab as it is not important here.

So we now have a page with a text input field, and an undefined heading and title. We need some code in our script to actually make it work!


<h2 style="font-size:2em;">The Script</h2>

As I have mentioned many times in this blog, I use Svelte, and with Svelte we have to wait for the document to load before we can do anything on the page. So all of our code has to go inside an `onMount` call.

Here is all the code inside my `<script>` tags, I will break it down after:

<div id="codeSnippet">

```javascript
import { onMount } from 'svelte';

export let title = "New Tab Title";

onMount( async () => { 
  // Getting the input field and listening for changes
  var input = document.getElementById("tabtitle");
  input.addEventListener('input', function(event){
    updateTitle();
  });

  // Disables enter submitting the input field as a form
  input.onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;     
    if (key == 13) {
      e.preventDefault();
    };
  };

  // Updates Title Variable
  function updateTitle() {
    if(input[0].value !== "") {
      var newtitle = input[0].value
      var titleElement = document.getElementsByTagName("title");
      for (var i = 0; i < titleElement.length; i++) {
        titleElement[i].innerText = newtitle;
      };
      var header = document.getElementById("header");
      header.textContent = newtitle;
    } else {
      var titleElement = document.getElementsByTagName("title");
      for (var i = 0; i < titleElement.length; i++) {
        titleElement[i].innerText = "New Tab Title";
      };
      var header = document.getElementById("header");
      header.textContent = "New Tab Title";
    }
  };
  
})
```
</div>

Lets start with the basic stuff, the below is just importing the onMount method from the Svelte library, and creating a variable that can be accessed by the document as well as by my script code within the onMount method. I am setting a default value so that something appears when the page first loads:

<div id="codeSnippet">

```javascript
import { onMount } from 'svelte';

export let title = "New Tab Title";
```
</div>

Next we have the `onMount` method, which contains all the code doing the actual work. There is three main blocks of code in here so lets look at those in order.

<div id="codeSnippet">

```javascript
// Getting the input field and listening for changes
var input = document.getElementById("tabtitle");
input.addEventListener('input', function(event){
  updateTitle();
});
```
</div>

This block is getting the input field which is called tabtitle and adding an event listener to it. The event listener means that whenever there is any input to the field, a method called `updateTitle` is called.

<div id="codeSnippet">

```javascript
// Disables enter submitting the input field as a form
input.onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
  };
};
```
</div>

This next bit of code is a little workaround for the input field. As it is technically a form field, pressing enter would submit the form and reload the page. This is not what we want, so this little bit of code stops that from happening.

```javascript
// Updates Title Variable
function updateTitle() {
  if(input[0].value !== "") {
    var newtitle = input[0].value
    var titleElement = document.getElementsByTagName("title");
    for (var i = 0; i < titleElement.length; i++) {
      titleElement[i].innerText = newtitle;
    };
    var header = document.getElementById("header");
    header.textContent = newtitle;
  } else {
    var titleElement = document.getElementsByTagName("title");
    for (var i = 0; i < titleElement.length; i++) {
      titleElement[i].innerText = "New Tab Title";
    };
    var header = document.getElementById("header");
    header.textContent = "New Tab Title";
  }
};
```
</div>

Finally we have the `updateTitle` function itself, which is where the main work is done. Inside is an `if` which is looking at the value of the field. 

- If the input field is empty then it resets the value to **New Tab Title**.
- If the input is not empty then a variable called `newtitle` is created which is set to the current value of the input field. Then we retrieve the title and header elements on the page and set their values to be the same as the new title.

Here is what it looks like when it's all done:

<div id="imageDiv">
  <figure>
    <img src="https://joshlearningtocode.files.wordpress.com/2021/12/tab-organiser.png" alt="Organised Tabs"/>
    <figcaption>My Organised Tabs</figcaption>
  </figure>
</div>

I thought about allowing people to upload pictures to be used in the tab as well, but that can be a future endeavour!

