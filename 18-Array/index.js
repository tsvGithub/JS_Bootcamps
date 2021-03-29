"use strict";

//TODO with Object
//Objects:
const chores = {};
const chore1 = {
  text: "Wash the dishes",
  complete: false,
};
const chore2 = {
  text: "Do laundry",
  complete: false,
};
//1 or 2 is a key for Object 'chores' =>
//{'1': 'chore1', '2':'chore2'}
chores[1] = chore1;
chores[2] = chore2;
console.log(chores); //=> 1: Object { text: "Wash the dishes", complete: false } 2: Object { text: "Do laundry", complete: false }

//How to remove completed tasks in Object?
//If we don't know key, then it is a problem.

//----------------

//TODO with Array
//Array preserves the order that elements are added
//Array starts with [0] index

const todos = [];

const todo1 = {
  text: "Wash the dishes",
  complete: false,
};

const todo2 = {
  text: "Do laundry",
  complete: false,
};

//Add to the Array
// todos[0] = todo1;
// todos[1] = todo2;
// console.log(todos); // => Array […]
// 0: Object { text: "Wash the dishes", complete: false }
// 1: Object { text: "Do laundry", complete: false }
// length: 2

//Methodes:
todos.push(todo1, todo2);
console.log(todos);

//Array length:
console.log(todos.length); //2
//to get the index of the last item
const index = todos.length - 1;
console.log(index); // 1
console.log(todos[index]); //Object { text: "Do laundry", complete: false }

//to remove the lasr element of an array:
// todos.pop();
console.log(todos);

//========================
// Arrays are data structures for managing
// collections of data where order is important.
// const todos = [];
// Arrays are mutable, even in 'const' can change values.
// There are a number of bulit-in methods which
// enable us to manage the data in an array, for example
//  .push(), which adds an element to the end of an array and
//  .pop, which removes an array's last element.
// todos.push(todo1, todo2);
// todos.pop();

//====================
// Basic Array Operations (Methods)
//constructor
const years = new Array(1972, 1982, 1992, 2002);
console.log(years);

//literal syntax:
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//get the first element of array
console.log(friends[0]); //Michael
console.log(friends.length); //3
//get the index of the last element
console.log(friends.length - 1); //2
//get the last element of array
console.log(friends[friends.length - 1]); //Peter
//friends.length - 1 => is expression, that produces a value!

// Arrays are mutable, even in 'const' can change values.
// reassignment (friend=['Me', 'You']) won't work
// but changing array will work =>

// Add elements:
//friends[2]="Lesh"
//or this way => add at the end
//'push' mutate original array and returns
//value with length of a new array:
const newLength = friends.push("Jay");
console.log(newLength); //4
console.log(friends); //Array(4) [ "Michael", "Steven", "Peter", "Jay" ]

//at the beggining of array;
//'unshift' mutate original array and returns
//value with length of a new array:
friends.unshift("John");
console.log(friends); //Array(5) [ "John", "Michael", "Steven", "Peter", "Jay" ]

// Remove elements:
friends.pop(); // Last element
const popped = friends.pop();
//returns removed element
console.log(popped); //Peter
console.log(friends); //Array(3) [ "John", "Michael", "Steven" ]
//-------
friends.shift(); // First element
console.log(friends); //Array [ "Michael", "Steven" ]

//In wich position is alement?
console.log(friends.indexOf("Steven")); //1
console.log(friends); //Array [ "Michael", "Steven" ]
console.log(friends.indexOf("Bob")); // -1
//there is no Bob! => '-1'

//Alternative to indexOf:
//uses 'strict equality'!!!
//'includes' return 'true/false' wheter
//element exists in the array:
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); // false
friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // false

//The most useful cases for
//'includes' are conditionals:
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
  //You have a friend called Steven
}
//============================

const firstName = "Zhur";
//array of variable, string expression & array
const me = [firstName, "Mrs.Ted", 2021 - 1972, "WebDev", friends];
console.log(me);
//(5) […]
// 0: "Zhur"
// ​1: "Mrs.Ted"
// ​2: 49
// ​3: "WebDev"
// ​4: Array(3) [ "Michael", "Steven", 23 ]
// ​length: 5
//------------

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
console.log(calcAge(years)); //NaN
//'years' is the Array!
console.log(years + 10);
//1972,1982,1992,200210 => '+' convert to String!
console.log(years - 10);
//NaN
const age1 = calcAge(years[0]);
console.log(age1);
//49
const age2 = calcAge(years[1]);
console.log(age2);
//39
const age3 = calcAge(years[2]);
console.log(age3);
//29
const age4 = calcAge(years[years.length - 1]);
console.log(age4);
//19
const ages = [age1, age2, age3, age4];
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);
//Array(4) [ 49, 39, 29, 19 ]

//==========================
//================================================================
// Challenge:
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array?

const favouriteSongs = [];

const firstSong = "Kalinka";
const secondSong = "Malinka";
const thirdSong = "Katjusha";
favouriteSongs.push(firstSong, secondSong, thirdSong);
console.log(favouriteSongs); //Array(3) [ "Kalinka", "Malinka", "Katjusha" ]
const lastSongOfArray = favouriteSongs.length - 1;
console.log(favouriteSongs[lastSongOfArray]);
//Katjusha
favouriteSongs.push("Like me");
console.log(favouriteSongs);
//Array(4) [ "Kalinka", "Malinka", "Katjusha", "Like me" ]
favouriteSongs.pop();
console.log(favouriteSongs);
//Array(3) [ "Kalinka", "Malinka", "Katjusha" ]

///////////////////////////////////////
// Coding Challenge #2

// Steven is still building his tip calculator,
// using the same rules as before:
// Tip 15% of the bill if the bill value is between 50 and 300,
// and if the value is different, the tip is 20%.
// 1. Write a function 'calcTip' that takes any bill
//value as an input and returns the corresponding tip,
//calculated based on the rules above. Use the function
//type you like the most. Test the function using a bill value of 100.
const calcTip = (bill) => {
  let tip;
  return (tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
};
console.log(calcTip(100)); //15
console.log(calcTip(10)); //2
console.log(calcTip(301)); //60.2
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
const bills = [125, 555, 44];
console.log(bills); //Array(3) [ 125, 555, 44 ]
// 3. Create an array 'tips' containing the tip value for each bill,
//calculated from the function you created before.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// TEST DATA: 125, 555 and 44
// HINT: Remember that an array needs a value in each position,
//and that value can actually be the returned value of a function!
//So you can just call a function as array values (so don't store
//the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

//===============================
const facturas = [125, 555, 44];
const propinas = [];
const totale = [];

let indeks = 0;
const calcTips = (bill) => {
  if (facturas[indeks] >= 50 && facturas[indeks] <= 300) {
    propinas.push(facturas[indeks] * 0.15);
  } else {
    propinas.push(facturas[indeks] * 0.2);
  }

  totale.push(facturas[indeks] + propinas[indeks]);
  console.log(
    `For bill ${facturas[indeks]} you should give tips ${propinas[indeks]}. You have to pay together ${totale[indeks]}.`
  );

  indeks++;

  if (indeks === facturas.length) {
    indeks = 0;
    return;
  } else {
    calcTips(facturas);
  }
};

calcTips(facturas);
console.log(propinas, totale);
