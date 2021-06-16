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
//The Complete JS Course 2021:
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//separate object for 'restaurant' object:
const openingHours = {
  //destructuring array 'weekdays':
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //computing property name using a template literal

  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //to have 'openingHours' object inside this object:
  // openingHours: openingHours,
  //or with ES6 enhanced object literals if
  //property name is exactly the same as key name:
  openingHours,
  //---------------------
  //Methods:
  //order: function(starterIndex, mainIndex){
  //or with ES6 enhanced object literals:
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

  //----------------
  //VI. Order of parameters:
  //VIa.Pass in the function an object of
  //options as parameter
  //(common case in JS third-part libraries)
  orderDelivery(obj) {
    console.log(obj);
  },
  //VIb. Destructuring parameters from the object (below).
  //The great is that the order of parameters is not matter.
  orderDeliveryC({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //VIc. Default values for destructured parameters:
  orderDeliveryD({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
console.log(restaurant);

//==============================
//I. DESTRUCTURING Object
//To destructure Object, use {} and inside use
//variable names that exactly match the property
//names that want to retrieve from the object.
//!!!Uncomment these lines:
// const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//---------------------------
//II. RENAME OBJECT PROPERTIES
//Variable names are DIFFERENT from property
//names => {object property: new name}
const { openingHours: hours, categories: tags } = restaurant;
console.log(hours, tags);
//{thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//---------------------------
//III.DEFAULT VALUE
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
//IV. MUTATING VARIABLES
//Mutating variables while destructuring objects.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//Destructure object & override variables 'a' and 'b':
//Can't do this way: { a, b } = obj;
// console.log(a, b); //Uncaught SyntaxError: Unexpected token '='
//When start a line with a '{}', then JS expects
//a code block. The trick is to wrap the
//the destructuring assignment into '()':
({ a, b } = obj);
console.log(a, b); //23 7

//---------------------------------
//V.NESTED Objects:
const { fri } = openingHours;
console.log(fri); //{open: 11, close: 23}
//To get two variables 'open' and 'close',
//destructuring 'open' and 'close' from
//'openingHours', not from 'restaurants'!!!
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23
//assign different variables 'open' and 'close'
// to 'o' & 'c' variables:
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
//-----------------------
//VI.Object as parameters:
//VIa: Call the function & pass in an object of
//options (common case in JS for third-part libraries)
//But also can do destructuring right away
//in the function's parameters (VIb)!
restaurant.orderDelivery({
  time: "22.30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
//{time: "22.30", address: "Via del sole, 21", mainIndex: 2, starterIndex: 2}
//VIb:
restaurant.orderDeliveryC({
  time: "22.30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
//Order received! Garlic Bread and Risotto will be delivered to Via del sole, 21 at 22.30
//VIc.
restaurant.orderDeliveryD({
  // time: "20.00",
  address: "Via del sole, 21",
  // mainIndex: 2,
  starterIndex: 1,
});
//Order received! Bruschetta and Pizza will be delivered to Via del sole, 21 at 20:00
