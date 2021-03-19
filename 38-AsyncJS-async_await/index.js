//fetch function with endpoint
fetch("https://jsonplaceholder.typicode.com/posts/1")
  //return response => convert response into json
  .then((response) => response.json())
  //return Object data
  .then((data) => console.log(data));

// async-await allows us to write promises without
//using multiple callback functions. The code
//looks like synchronous code - promises are
//resolved and immediately put in a variable.
// async returns a promise.

//ASYNC RETURNS A PROMISE:
// async function exampleAsync() {}
// exampleAsync().then(() => console.log("Works as a promise"));
//Works as a promise
const exampleAsync = async () => {};
exampleAsync().then(() => console.log("Works as a promise in async arrow function"));
//Works as a promise in arrow function

//------------------------
//resolve promise:
const getBlogPost1 = async () => {
  return "resolve works with async";
};
getBlogPost1().then((value) => console.log(value));
//resolve works
//-----------------------------
//PROMISE WITH CONSTRUCTOR:
function getBlogPost() {
  //Promise with callback resolve, reject
  const promise = new Promise((resolve, reject) => {
    //mimik an API call with setTimeout:
    setTimeout(() => resolve("blog post with Promise"), 1000);
  });
  //
  promise
    //return response
    .then((value) => console.log(value))
    //everithing is done:
    .finally(() => console.log("done with Promise"));
}
getBlogPost(); //blog post //done
//there are 3 functions for very simple request=>
//1)promise; 2).then(); 3).finally()
//instead of using 2)&3) just use
//ASYNC AWAIT-------------------
async function getBlogPostAw() {
  //Promise CONSTRUCTOR with callback (resolve, reject)
  const promise = new Promise((resolve, reject) => {
    //mimik an API call with setTimeout:
    setTimeout(() => resolve("async-await blog post"), 1000);
  });
  // await tells the function to pause until the
  //promise is resolved and then use the resolved
  //value.
  //AWAIT for promise to be resolved
  const result = await promise;
  console.log(result); //async-await blog post
  console.log("done with async-await"); //done with async-await
}
getBlogPostAw();
//!NB
//1) async-await can't replace Promises
//async-await wraps promise into readable syntax
//2)can't resolve promise with await unless
//function is async. Async can work without await,
//await can't work without async!
//?!'top-level await' maybe sometimes can be & will work on its own
//------------------------

//fetch with async-await
//look like synchronous code

//async return a promise;
async function getPost() {
  //calling fetch creates promise
  //use await to resolve the promise;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // the second await is necessary
  //because 'response.json' creates
  //a promise that you have to await
  const data = await response.json();
  //data
  console.log(data);
}
getPost();
