//============================
//Object
const nums = {
  1: 1,
  true: true,
};
//Keys of object have to be strings! =>
//this logs '1' & 'true' === strings
//with implicit convertion
console.log(Object.keys(nums)); //Array[("1", "true")];
//Object doesn't have length property. But Map has!
//To know how many values it has, we need to convert
//it to an array and then use length property.
console.log(Object.keys(nums).length); // =>
//2

// Since ES6, we have a new object data type
//called a map.
// Maps allow us to:
// use non-strings as objects' keys
// use objects as keys
// easily iterate over data
// easily get the length of data
//(Object doesn't have length property. But Map has!)

//create a new map:
const map1 = new Map([
  // ['key', 'value'],
  [1, 1],
  [true, true],
]);
console.log(map1); //Map { 1 → 1, true → true }
//Map length
console.log(map1.size); //=> 2

//to add another key-value pair to the map1:
//.set mutates an original Map object
map1.set("key", "value");
//spread out all map1 keys:
console.log([...map1.keys()]); // =>
//Array(3) [ 1, true, "key" ]
//Map Object is ordered! Object is unordered!

//iterate over map1 keys/values
map1.forEach((value, key) => {
  console.log(key, value);
}); // => Order is preserved!
//1 1
// true true
// key value

//======================
//users and their secretKeys are stored in the different places
const user1 = { name: "john" };
const user2 = { name: "mary" };

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

//Map to store user + secret keys:
const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2],
]);
console.log(secretKeyMap); // =>
// Map(2)​
// size: 2
// <entries>
// 0: Object { name: "john" } → "asldjfalskdjf"
// 1: Object { name: "mary" } → "alksdjfakjsdf"

//downsides:
//1) harder to get keys properties from secretKeyMap
//for example, user name property.
//It's the best to just get value:
const key = secretKeyMap.get(user1);
console.log(key); // => asldjfalskdjf

//2) the second downside is that Map
//takes very much memory. For Garbage Collection
//use WeakMap instead. It takes objects as keys:
const secretKeyWeakMap = new WeakMap([
  [user1, secretKey1],
  [user2, secretKey2],
]);
console.log(secretKeyWeakMap); // =>
//WeakMap(2)​
// <entries>
// 0: Object { name: "mary" } → "alksdjfakjsdf"
//1: Object { name: "john" } → "asldjfalskdjf"
//=====================

//Map length:
//(Object doesn't have length property.
//But Map has!)

const user = {
  name: "john",
  verified: true,
};

const userMap = new Map([
  ["name", "john"],
  ["verified", true],
]);

console.log(userMap.size); // 2

//===================
//===================
// Challenge:
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
  music: "jazz",
  name: "Paris House",
};

const favouritePlaceMap = new Map([
  ["music", "jazz"],
  ["name", "Paris House"],
]);
favouritePlaceMap.set(["visited", true]);
favouritePlaceMap.set(["averageBill", 100]);
console.log(favouritePlaceMap.size);
console.log(favouritePlaceMap.get("name"));
