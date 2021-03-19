// 6 Primitive data types:
// (undefined, null, boolean, number, string and symbol)
// are passed by value, i.e. data is passed into a copy
// of the original value, meaning that the following code returns true:
const num = "hello world";
const anotherNum = "hello world";
//primitives compare by value:
//"hello world" === "hello world"
console.log(num === anotherNum); //true => primitives - passed by value

//========================================
// Objects are data structures which can hold any number of primitives.
// They do not return equal even if they are the same. This is because
// they are passed by reference. Whenever we pass an object to a variable
// or a function, either one just holds a reference to it.
// This means that the following code updates both obj and anotherObj at once:
let obj = {};
let anotherObj = {};
console.log(obj === anotherObj); //false => objects are not equial!!!

const obj2 = {};
const anotherObj2 = obj2;
anotherObj2.a = 1;

console.log("obj", obj2); //obj Object { a: 1 }
console.log("another obj", anotherObj2); //another obj Object { a: 1 }
//object - passed by reference

// Note: Although this behaviour allows us to dynamically add properties
//  to objects, it can cause problems.
