"use strict";
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

// I. access to Object information:
function displayUsers() {
  console.log(`username: ${user.username}, email: ${user.email}`);
}
displayUsers();
//username: Zhurka, email: zhur@gmail.com

// II. OR with object destructuring:
// pull out username& email from user object
const { username, email } = user;
function displayUser() {
  console.log(`username: ${username}, email: ${email}`);
}
displayUser();
//username: Zhurka, email: zhur@gmail.com

//----------------------------
//destructuring nested object:
// I.
// const { title } = user.details;
// console.log(title); //{title: "Web Developer"}
// OR II.
const {
  name,
  details: { title },
} = user;
console.log(name, title); //Zhur Web Developer

// I. & II.
function displayUserBio() {
  //OR III. as a parameter:
  // function displayUserBio({ name, details: { title } }) {
  console.log(`${name} is a ${title}`);
}
//OR III. as a parameter:
function displayUserBios({ name, details: { title } }) {
  console.log(`${name} is a ${title}`);
}

//for I and II
displayUserBio(); //Zhur is a Web Developer
//for III
displayUserBios(user); //Zhur is a Web Developer

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
//The Craft Beer Co. Coffee Roasters
// 2. Destructure the places to listen to music
let {
  music: { traditional, jazz },
} = recommendations;
console.log(traditional, jazz); //Fiddler's Elbow The Paris House
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
//For traditional music you have to visit Fiddler's Elbow
//For jazz music you have to visit The Paris House

//================================================================
//=====================================
//======================
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
const restaurant = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    // return the content of the arrays based
    //on the given indexes:
    return /*return the array */ [
      //this-> this Object
      //starterMenu array -> property of this object
      //starterIndex -> position of the element in the array
      this.starterMenu[starterIndex],
      //this-> this Object
      //mainMenu array -> property of this object
      //mainIndex -> position of the element in the array
      this.mainMenu[mainIndex],
    ];
    //Here are not any destructuring yet, it
    //is doing in the call of the function
  },

  // ES6 enhanced object literals
  // // openingHours,

  // // order(starterIndex, mainIndex) {
  // //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // // },

  // // orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
  // //   console.log(
  // //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  // //   );
  // // },

  // // orderPasta(ing1, ing2, ing3) {
  // //   console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  // // },

  // // orderPizza(mainIngredient, ...otherIngredients) {
  // //   console.log(mainIngredient);
  // //   console.log(otherIngredients);
  // },
};
//==============================
//To destructure Object, use {} and inside use
//variable names that exactly match the property
//names that want to retrieve from the object.
const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//---------------------------
//Variable names are different from property names:
const { openingHours: hours, categories: tags } = restaurant;
console.log(hours, tags);
//{thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//---------------------------
//Setting a DEFAULT VALUE for property that does not exist
//on the object to not recieve 'undefined'.
console.log(restaurant.menu); //undefined =>
//because there are starterMenu and mainMenu,
//but there is no property called 'menu'.
//Set default value:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//[]  <=d efault value for 'menu';
//(4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
//<= default value does not apply because it
//has its own value.

//---------------------------
//Mutating variables while destructuring objects.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//destructure object & override variables 'a' and 'b':
//Can't do this way:
// { a, b } = obj;
// console.log(a, b); //Uncaught SyntaxError: Unexpected token '='
//When start a line with a '{}', then JS expects
//a code block. The trick is to wrap the
//the destructuring assignment into '()':
({ a, b } = obj);
console.log(a, b); //23 7

//---------------------------------
//NESTED Objects:
const { fri } = openingHours;
console.log(fri); //{open: 11, close: 23}
//To get two variables 'open' and 'close',
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23
//assign different variables 'open' and 'close' to 'o' & 'c':
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
