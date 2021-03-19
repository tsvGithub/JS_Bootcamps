// Rather than having one function which does multiple actions,
// partial application allows us to split functions into those
// which have single, clearly-defined responsibilities.
// This improves code readability and allows us to separate our concerns.
//============================================
//I
//fetch data (not a partial application):
function fetchData(
  //https://jsonplaceholder.typicode.com
  baseUrl,
  //or /posts or /comments
  route
) {
  fetch(`${baseUrl}${route}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchData("https://jsonplaceholder.typicode.com", "/posts");
fetchData("https://jsonplaceholder.typicode.com", "/comments");

//======================================
// II HOC
//partial application:
function getData(baseUrl) {
  return function (route) {
    fetch(`${baseUrl}${route}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
}

const getSocialMediaData = getData("https://jsonplaceholder.typicode.com");
getSocialMediaData("/comments");
getSocialMediaData("/posts");

//===============================================
// III
//HOC with callback
// Also, since this was a source of considerable confusion for me,
//I think it's worth of mentioning that the two higher level functions
//named getPAData() and getPAData() in Reed's code do not get the data;
//the data is fetched in the innermost function by the fetch() method.

// The higher level methods do something else:
//they SET the variables baseUrl and route,
//Assigning the value https://jsonplaceholder.typicode.com
//to the variable baseUrl and /posts or /comments to the variable route
//is the single responsibility of the two higher level functions.
//That's why I use the verb set.. in their names instead of get..
// This is an important detail in understanding of what's going on in these partial application functions.
function getPAData(baseUrl) {
  return function (route) {
    //----------
    return function (callback) {
      //fetch data:
      fetch(`${baseUrl}${route}`)
        .then((response) => response.json())
        .then((data) => callback(data));
    };
  };
}
//arrow format:
// const getPAData = (baseUrl) => (route) => (callback) =>
//   fetch(`${baseUrl}${route}`)
//     .then((response) => response.json())
//     .then((data) => callback(data));

//single responsibility:
const getPASocialMediaData = getPAData("https://jsonplaceholder.typicode.com");

const getSocialMediaPosts = getPASocialMediaData("/posts");
const getSocialMediaComments = getPASocialMediaData("/comments");

getSocialMediaPosts((posts) => {
  posts.forEach((post) => console.log(post.title));
});
