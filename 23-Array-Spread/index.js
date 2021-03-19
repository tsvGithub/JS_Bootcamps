// The .push() method mutates the original array.
//We can fix this by using a non-mutating array method such as.concat().
// const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');
// Alternatively, we can use the array spread operator
// (...) to clone the previous array.
// const allMenuIdeas = [...lunchMenuIdeas];
//-----------------------------
const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const allMenuIdeas = lunchMenuIdeas;

allMenuIdeas.push("Club Sandwich");
// The .push() method mutates the original array
//because of reference, it doesn't create a new array.
console.log(allMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
//------------------

//non-mutating array method:
//.concat() doesn't mutate the original array
//and retruns the new array with copy of the original array
const concatAllMenuIdeas = lunchMenuIdeas.concat("Club Sandwich");
console.log(concatAllMenuIdeas); //Array(4) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
//-------------------

//-----------------SPREAD--------------------
//spread operator converts an original array to list
// & clones an original array into a new array:
const spreadAllMenuIdeas = [...lunchMenuIdeas];

//and then we can use with different methods: push, slice...
spreadAllMenuIdeas.push("Club Sandwich");
console.log(spreadAllMenuIdeas); //Array(4) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]

//=======================================
//========================================
const breakfastMenuIdeas = ["Buckwheat Pancakes"];

const allMenuIdeas1 = ["Harvest Salad", "Southern Fried Chicken"];
//push & unshift mutate an original array!
//use spread operator to clone the array
//and then manipulate the array

//We can merge multiple arrays into a new array
//using the spread operator (...).
//The order in which the arrays are entered is retained:
//(Порядок ввода массивов сохраняется)
const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas1];
console.log(otherMenuIdeas); //(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
// const allMenuIdeas = [
//     ...breakfastMenuIdeas,
//     "Harvest Salad",
//     "Southern Fried Chicken",
//     ...dinnerMenuIdeas
// ];

//------SLICE()--вырезать и забрать себе---
// We can use immutable method .slice(from, to)
//to remove items & returns brand new array
//otherMenuIdeas) => Array(3) [
//     "Buckwheat Pancakes",
//     "Harvest Salad",
//     "Southern Fried Chicken"
// ]
const slicedOtherMenuIdeas = otherMenuIdeas.slice(1, 3);
//brend new slicedOtherMenuIdeas array
console.log(slicedOtherMenuIdeas);
//(2) ["Harvest Salad", "Southern Fried Chicken"]
//original otherMenuIdeas array
console.log(otherMenuIdeas);
//(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
//

//-------FINDINDEX()--------------
// .findIndex() allows us to find a particular element
// when we don't know where it is stored:
const saladIndex = otherMenuIdeas.findIndex((idea) => idea === "Harvest Salad");
// We can use these in combination to update
//elements in the array: replace "harvest salad"
//with 'garden salad':
const finalMenuIdeas = [
  //create the new array:
  //take elements from index 0 to saladIndex
  ...otherMenuIdeas.slice(0, saladIndex),
  //take a new element
  "Garden Salad",
  //take all elements from the next after SaladIndex
  ...otherMenuIdeas.slice(saladIndex + 1),
];
console.log(otherMenuIdeas);
//(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
console.log(finalMenuIdeas);
//(3) ["Buckwheat Pancakes", "Garden Salad", "Southern Fried Chicken"]

//DELETE Meatloaf element:
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
console.log(dinnerMenuIdeas);
//(3) ["Glazed Salmon", "Meatloaf", "American Cheeseburger"]
//find index of element
const meatloafIndex = dinnerMenuIdeas.findIndex((idea) => idea === "Meatloaf");
const finalDinnerMenuIdeas = [
  //create the new array:
  //take elements from index 0 to meatloafIndex
  ...dinnerMenuIdeas.slice(0, meatloafIndex),
  //delete "Meatloaf" element => don't take element "Meatloaf"
  //take all elements from the next after meatloafIndex
  ...dinnerMenuIdeas.slice(meatloafIndex + 1),
];
console.log(finalDinnerMenuIdeas);
//(2) ["Glazed Salmon", "American Cheeseburger"]
