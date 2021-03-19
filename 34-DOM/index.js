// JS -> HTML, CSS (DOM - Document Object Model)

// The DOM (Document Object Model) makes all web
//applications possible by giving us an interface
//which connects JS to HTML and CSS.

// So far we've had access to the global object
//(window object) from our app. That window has
//a property called document, which is the DOM.

// Via the DOM, we can:
// Dynamically add static HTML
// Add styles CSS
// Add JS
//----------------------------

//HTML
const p = document.createElement("p");

p.innerText = "Hello world";
//MDN has a good example on the differences:
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText#Example
document.body.append(p);

//CSS
document.body.style.background = "beige";
p.style.color = "navy";

//JS
p.addEventListener("click", () => console.log("clicked"));
//===================================
//===================================
//Get Single and Multiple Elements:
const el = document.getElementById("home");
console.log(el); //<a href="/" id="home">Home</a>

// To get the FIRST element of a certain type, use querySelector();
const link = document.querySelector("a");
console.log(link); //<a id="home" href="/">

// To get all the elements of a certain type, use querySelectorAll(). This creates a node list.
const links = document.querySelectorAll("a");
console.log(links); //NodeList(3) [ a#home, a, a

// `forEach()` and `matches()` can be used to
//select a particular element from the node list:
links.forEach((link) => {
  console.log(link);
  //<a id="home" href="/">
  //<a href="/login">
  //<a href="/signup">

  if (link.matches('a[href="/login"]')) {
    const loginLink = link;
    console.log(loginLink); //<a href="/login">
  }
});

// getElementsByTagName can be used instead of
//querySelectorAll() to get all the elements of
//a certain type. This produces an HTMLCollection
//which cannot be iterated over with forEach().
const divs = document.getElementsByTagName("div");
console.log(divs); //HTMLCollection { 0: div.post, 1: div.post, 2: div.post, length: 3 }
//can't use!=> divs.forEach(div=> {console.log(div)})
//==========================
//Creating and Modifying HTML Elements

//Use createElement() to create an element:
const newPost = document.createElement("div");
//add a class-name
newPost.className = "top-post";

// use innerHTML to modify an element's HTML:
newPost.innerHTML = "<strong>This is a new post</strong>";

//use append() and prepend() to add
//elements to the end or start of an HTML
//document respectively:
document.body.append(newPost); //end
document.body.prepend(newPost); //start

// To put an element anywhere else, first
//query for the element which is where you
//want to place the new element and then
//prepend() the new element to it:
const post = document.querySelector(".post");
post.prepend(newPost);

//==============
// Challenge:
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const title = document.querySelector("h1");
title.innerHTML = "Creating and modifying HTML elements";

const tagline = document.createElement("h2");
tagline.className = "tagline";
tagline.innerHTML = "I can create HTML elements!";

title.append(tagline);

//================
//Dinamically Add CSS Styles
// NB: properties must be spelt in camelCase.
// style declarations must be a string, even if they are numbers.

// const post = document.querySelector(".post");

// .style is used to modify an element's style properties:
post.style.background = "orange";
post.style.margin = "30px";
//remove 'post' class (styles)
post.classList.remove("post");
// post.classList.toggle("post");

//==============
//===============
//Events

// We listen for events in JS with addEventListener():
post.addEventListener("click", (event) => {
  console.log(event);
  //click { target: p, buttons: 0, clientX: 357, clientY: 263, layerX: 357, layerY: 401 }
  console.log(event.target); //<p>
});

// We can listen for clicks, mouseovers, mouseouts,
//keyups, keydowns, keypresses and many more.

//add event listeners for many elements
//(static list)
const posts = document.querySelectorAll(".post");
posts.forEach((post) => {
  post.addEventListener("click", (event) => {
    console.log("Do you want to edit this post?");
  });
});

//click anywhere :
document.body.addEventListener("click", (event) => {
  //   matches doesn't work!
  //if (!event.target.matches(".post")) return;
  //this work
  if (!event.target.closest(".post")) return;
  console.log("Do you want to edit this post?");
});

//========================
// Challenge:

// 1. Select h1 and add a click event listener.
// Log the text from the element to the console.
const title2 = document.querySelector("h1");
title2.addEventListener("click", (event) => {
  const text = event.target.textContent;
  console.log(text);
});
//
// 2. Add the same functionality to all the elements displayed
// in web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

document.body.addEventListener("mouseover", (event) => {
  console.log(event.target.textContent);
});
