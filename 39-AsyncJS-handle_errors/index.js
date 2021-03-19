async function runAsyncReject() {
  return await Promise.reject();
}
runAsyncReject();
//failed silently
//how to handel errors?

//Not catching error is a problem because
//user don't know about this error =>
//send message to user (alert(error.message))

// The way that we handle errors in async
//functions is the same as in synchronous code,
//using try-catch.
async function runAsync() {
  try {
    //run any code
    //promise is rejected => get Error
    await Promise.reject(Error("Oops"));
    //if 'return' without 'await'
    //.catch() will nener run!
    //-------------
    //catch any errors
  } catch (error) {
    //handle error
    console.error(error); //Error: Ooops
  }
}
runAsync();

//--------------
// Alternatively, we can chain on catch() to
//our function call:
async function runAsync2() {
  return await Promise.reject(Error("Sorry..."));
}
runAsync2()
  //runAsync return promise
  //we can use catch() method
  .catch((error) => console.error(error));
//Sorry...

//------------
//GitHub User account doesn't exist
async function getGithubUser() {
  try {
    //try get response
    const response = await fetch("https://api.github.com/users/laksjdflasjfdlkjadfjk");
    //throw an error if response is not OK
    if (!response.ok) {
      throw new Error(response.status);
    }
    //cath errors
  } catch (error) {
    console.log("Could not fetch user, try resetting your connection");
    // alert(error.message);
    console.error(error);
  }
}
getGithubUser(); //!Error: 404

//Challenge:
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const person = await response.json();
    console.log(`${person.name} works for ${person.company.name}`);
  } catch (error) {
    console.log(error);
  }
}
getUser();
