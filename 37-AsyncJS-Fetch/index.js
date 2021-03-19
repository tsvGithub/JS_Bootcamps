// API - Application Programming Interface:
//software to communicate with other software
// window.navigator.geolocation <= API

// APIs (Application Programming Interfaces)
//are the engine behind any service which requires
//special data.

// To get data from an API we make the request,
//convert the data to a usable format (JSON) and resolve
//the promise returned by the previous callback:
fetch("https://jsonplaceholder.typicode.com/posts/1")
  //fetch function with endpoint
  //return response => convert response to JSON
  .then((response) => response.json())
  // This returns an object which we can interact with
  //just like any normal JS object.
  .then((data) => console.log(data));
// return data
// .then((data) => console.log(data.title));
//--------------------
// To add data to an API, we use the POST method.
//We then use .stringify to convert it to JSON:
const blogPost = {
  title: "Cool post",
  body: "post text",
  userId: 1,
};

//POST data
//fetch function with endpoint
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  //convert JS Object to JSON object
  body: JSON.stringify(blogPost),
})
  //return response => convert response to JSON object
  .then((response) => response.json())
  //return data
  .then((data) => console.log(data));

//------------------------

//Error handling:
//error in the url => posts-pots => url doesn't exist:
fetch("https://jsonplaceholder.typicode.com/pots/1")
  // The fetch() promise resolves even if the request
  //fails.
  .then((response) => {
    //response.ok tells us whether our request has
    //been successful:
    if (!response.ok) {
      //4xx, 5xx => errors
      throw new Error(response.status);
    }
  })
  //return data
  .then((data) => console.log(data))
  //catch error
  .catch((error) => console.error(error));

// https://github.com/public-apis/public-apis

/// Challenge:
// The JSON Placeholder API has /users endpoint,
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work.

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

//fetch function with endpoint
fetch("https://jsonplaceholder.typicode.com/users/3")
  //return response
  .then((response) => {
    //if ststus 4xx-5xx=>
    if (!response.ok) {
      throw new Error(response.status);
    }
    //if response OK => return &
    //convert response to json
    return response.json();
  })
  //return data
  .then((person) => {
    console.log(`${person.name} works for ${person.company.name}`);
  })
  //catch error
  .catch((err) => console.log(err));
