// Master the following array features and
//your code will be simpler, more precise and more powerful:
// map()
// filter()
// reduce()
// some() / every()
// find() / findIndex()
// forEach()
// for ... of

// Plus:
// slice()
// concat()
// includes()
// array spread operator (...)
//===================
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("-----------------");
numbers.forEach((number) => {
  console.log(number);
});
console.log("-----------------");
//=================
// The for-of Loop

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

//spread the menus:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//use 'for-of' instead of 'for' to log all elements
//from the array:
//This loop automatically loop over the entire array and
//and in each iteration it gives access to the
//current array element, which can specify as
//'const item' and log it to the console:
for (const item of menu) console.log(item);
//!!!With 'for-of' can use the 'continue' and
//'break' keywords
console.log("-----------------------------");

//Current 'INDEX'of the element + current element:
//With 'index' 'for-of' is a little bit a pain!
//Method .entries() is for index:
for (const item of menu.entries()) {
  console.log(item);
}
console.log("-----------------");
//what is .entries()? => 'Array Iterator{}'
console.log(menu.entries());
//to see what 'entries()' actually is:
//create a new array and add .entries()
console.log([...menu.entries()]);
//it is an Array which contains many arrays with
//element and index of element in the original array
console.log("-----------------");
//destructure [i, el] items from the array:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log("-----------------");
