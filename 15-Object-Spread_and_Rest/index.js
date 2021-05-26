// Object.assign() allows us to merge properties
//from two or more objects into a new object:
// Object.assign({}, user, newUser)

// However, this is not very intuitive or readable.
//A cleaner way of doing this is to use the spread
//operator (...):
//const createdUser = { ...user, ...newUser, verified: false };

const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true,
};

const newUser = {
  username: "MrsZhur",
  email: "zhur@gmail.com",
  password: "mypassword",
};

//OBJECT.ASSIGI()
//to merge user + newUser objects together:
//1. Object.assign lets update an object with
//properties from another object:
console.log(Object.assign(user, newUser));
//user =>object that returns; what to merge
//newUser => merge with
console.log(user);
console.log(newUser);
//NB!
//!!! Original user object is mutated!!!
//************************** */
//2.
//{} create&return new object & merge 'user' & 'newUser' into it
//and add object {verified: false}
console.log(Object.assign({}, user, newUser, { verified: false }));
console.log(user);
console.log(newUser);
//'user' is not mutated!!!

//SPREAD OPERATOR
//3.
//{...user} take all the properties from 'user' object
//{...user} take all the properties from 'newUser' object
//add UPDATE object {verified: false}
//and put it in a new one 'createdUser'
const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);

//================================================================
//See 23-Array-Spread
//V. Spread works on all 'iterables':
//arrays, strings, maps, sets but not Objects!
const str = "Zhur";
const letters = [...str, " ", "s."];
console.log(letters);
//(6) ["Z", "h", "u", "r", " ", "s."]

//*****NB! SPREAD WITH OBJECTS: ****
//Objects are not iterables but SPREAD
//works with them too!

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

//1)spread the existing Object (...restaurant),
//that copy all the properties from the existing Object
//into new Object newRestaurant;
//2) add additional properties to the new
//Object newRestaurant (order does not matter)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
//{foundedIn: 1998, name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), …}

////================================
//===========================
//OBJECTS with REST
const openingHours = {
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
};
//get saturday out from the object and put rest
//days in the new object 'weekdays'
const { sat, ...weekdays } = openingHours;
console.log(weekdays);
// fri: {open: 11, close: 23}
// thu: {open: 12, close: 22}
