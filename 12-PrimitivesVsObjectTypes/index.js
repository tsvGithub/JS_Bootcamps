// 6 Primitive data types:
// (undefined, null, boolean, number, string and symbol)
// are passed by value, i.e. data is passed into a copy
// of the original value, meaning that the following code returns true:
const num = "hello world";
const anotherNum = "hello world";

//primitives compare by value:
//"hello world" === "hello world"
console.log(num === anotherNum); //true => primitives - passed by value

//===========================
//primitives 'const' are immutable! => can't change value of 'const'
//object types (arrays & objects) are mutable => can change value of 'const'

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

//===================
//====================
// Objects vs. primitives

//Primitives:
//are PRIMITIVE TYPES stored in call stack of JS engine
//Primitive points to 'memory address' which stores
//'value' of primitive:
let age = 30;
//'oldAge' pointe to the same address like 'age'
let oldAge = age;
//when changed primitive, it actually creates
//new 'address' for new 'value' but old 'address'
//is still here in 'call stack'
age = 31;
console.log(age); //31 <=changed 'age'
console.log(oldAge); //30 <='oldAge' points to 'age' 'address' before 'age' has been changed
//----------------------
//Objects:
//are REFERENCE TYPES stored in HEAP
//Object points to 'memory address' which stores
//'reference' to memory address in the HEAP which
//stores 'value' of object. This is because Object
//can be too large to store in 'call stack' (execution context)
//and in 'call stack' is only reference to the HEAP
//where Object is actually stored

//'me' is identifier in 'call stack' and points
//to 'address' in 'call stack' which stores 'value'
//that is 'reference' to the 'HEAP' memory where
//it is 'address' which stores 'value' of 'me'
const me = {
  star: "Sun",
  age: 48,
};
//copy object:
//'friend' identifier points to the same memory
//'address' in 'call stack' as 'me' identifier.
//And that 'address' contains the 'reference'
//which points to the 'value' of object in the Heap.
//So, copied object is exactly the same as 'me' object
const friend = me;
//When change property in copied object,
//object is found in the Heap and property is
//changed. Even though 'friend' is defined as
//'const' it is possible to change value! Because
//it doesn't change the value in 'call stack'
//memory, for the 'friend' identifier it is still
//the same 'value' (D30F) the 'reference' to
//the Object in the HEAP memory. And change property
//of the object is change the 'value' in the Heap
//memory.
friend.age = 27;
//NB! 'age' changed for 'friend' but also
//for 'me' too!!! This is because 'friend' and 'me'
//both point to the same object in the memory Heap.
//When changes some property in the Object, it
//always be reflected in 'friend' and 'me'!!!
//That means, two identifier point to the exact
//same 'value' and that 'value' is memory 'address'
// in 'call stack'.
//result:
console.log("Friend:", friend);
//Friend: {star: "Sun", age: 27}
console.log("Me", me);
//Me {star: "Sun", age: 27}

//NB! Whenever you think you're copying an object,
//you're really juct creating a new variable
//that points to the exact same object.

///////////////////////////////////////
// Primitives vs. Objects in Practice
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);
// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};
// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);
