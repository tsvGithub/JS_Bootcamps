//Object destructuring allows us to pull properties
//from an object and make them into variables:
// const { username, email } = user;
// We destructure nested objects as follows:
// const { name, details: { title} } = user;

const user = {
  name: "Zhur",
  username: "Zhurka",
  email: "zhur@gmail.com",
  details: {
    title: "Web Developer",
  },
};

// I access to Object information:
// function displayUser() {
//   console.log(`username: ${user.username}, email: ${user.email}`);
// }

// II. OR with object destructuring:
// pull out username& email from user object
const { username, email } = user;
function displayUser() {
  console.log(`username: ${username}, email: ${email}`);
}

displayUser();

//destructuring nested object:
// I.
// const { title } = user.details;
// OR II.
const {
  name,
  details: { title },
} = user;

// I. & II.
// function displayUserBio() {
//OR III. as a parameter:
function displayUserBio({ name, details: { title } }) {
  console.log(`${name} is a ${title}`);
}

//for I and II
// displayUserBio();
//for III
// displayUserBio(user);

//===================
//===================
// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).
const recommendations = {
  pancakes: "Nowhere Man",
  riceBowls: "Pompoko",
  beer: "The Craft Beer Co.",
  coffee: "Coffee Roasters",
  small_plates: "Venetian Plates",
  music: {
    traditional: "Fiddler's Elbow",
    jazz: "The Paris House",
  },
};
// 1. Destructure the places to drink (coffee and beer) from recommendations
const { beer, coffee } = recommendations;
console.log(beer, coffee);
// 2. Destructure the places to listen to music
let {
  music: { traditional, jazz },
} = recommendations;
console.log(traditional, jazz);
//or:
// let { traditional, jazz } = recommendations.music;
// console.log(traditional, jazz);

// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument
const musicVenues = ({ music: { traditional, jazz } }) => {
  console.log(`For traditional music you have to visit ${traditional}`);
  console.log(`For jazz music you have to visit ${jazz}`);
};
musicVenues(recommendations);
