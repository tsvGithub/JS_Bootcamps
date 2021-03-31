// Objects are used to store unstructured,
//property/key:value data.
// Think of variables as boxes and objects as file cabinets.
//Keys are names of files, values are the contents of files.
// Keys can only be strings, but values can be any data type,
//including other objects (nested objects):
// { key: {key: 'value' } }
//Objects are perfect for grouping together and
//using static information.
//In Object order has no matter.
//=========================
const blue = "#00f";
const orange = "#f60";

// variables - boxes; objects - file cabinets

const obj = {
  yellow: "#ff0",
  //if the property has the same name as a value,
  //(value.name===key.name)
  //then it can be shortened to key name:
  blue,
  orange,
  // functions:
  sayHi: function () {
    console.log("hi");
  },
  //ES6 standart for function in Object:
  sayBye() {
    console.log("bye");
  },
};
// objectName.key
console.log(obj.blue);
// objectName.methodName();
obj.sayHi();
obj.sayBye();

//===========================
// Objects can also include functions:
const nestedObj = {
  obj: {
    sayHi() {
      console.log("HELLO");
    },
  },
  yellow: "#ff0",
};
nestedObj.obj.sayHi();
nestedObj.yellow;

//======================
// Challenge:
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = "Charlie";
const cafe = "Costa";
const restaurant = "Da Sergio";

const favouritePlaces = {
  bar,
  cafe,
  restaurant,
  greeting() {
    console.log("Hello!");
  },
};
console.log(favouritePlaces.restaurant);
favouritePlaces.greeting();
