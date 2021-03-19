// .map() always returns an array of the same length
//as the original.
//.filter() allows us to return just part of the data:
// const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))

// .find() works in the same way as .filter() but returns just one array element:
// const result = restaurants.find(restaurant =>
//   restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
// )
//===============================
const restaurants = [
  { name: "Cap City Diner", milesAway: 2.2 },
  { name: "Chop Shop", milesAway: 4.1 },
  { name: "Northstar Cafe", milesAway: 0.9 },
  { name: "City Tavern", milesAway: 0.5 },
  { name: "Shake Shack", milesAway: 5.3 },
];

//-----------------FILTER()-----------------------
//.filter() allows us to return just part(slice, many)
//of the elements if the condition is true;
//if no conditional met => return an empty array.
//.filter() doesn't change the original array

//for searching restaurants that start with letter "C" through the array:
//--- NB! startsWith(searchString: string, position?: number): boolean
// Returns true if the sequence of elements of searchString converted
// to a String is the same as the corresponding elements of this object
// (converted to a String) starting at position. Otherwise returns false.---
//                                what?                      condition=>startsWith
console.log(restaurants.filter((restaurant) => restaurant.name.startsWith("C")));
// Array(3)
// 0: Object { name: "Cap City Diner", milesAway: 2.2 }
// 1: Object { name: "Chop Shop", milesAway: 4.1 }
// 2: Object { name: "City Tavern", milesAway: 0.5 }
// length: 3

//two conditions:
console.log(restaurants.filter((restaurant) => restaurant.name.startsWith("C") && restaurant.milesAway < 3));
//Array(2)
// 0: Object { name: "Cap City Diner", milesAway: 2.2 }
// 1: Object { name: "City Tavern", milesAway: 0.5 }
// length: 2

//-----------------FIND()----------
// .find() works in the same way as .filter()
//but returns just ONE element of array or 'undefined'

const result = restaurants.find(
  (restaurant) => restaurant.name.toLowerCase().includes("north") && restaurant.milesAway < 2
);
console.log(result);
//Object { name: "Northstar Cafe", milesAway: 0.9 }
