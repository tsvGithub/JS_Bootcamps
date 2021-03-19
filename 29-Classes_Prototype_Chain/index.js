//1. PROTOTYPICAL INHERITANCE -
//each instantiated object (from constructor
//function) inherits from prototype

//2. every object has prototype:
console.log(Object.getPrototypeOf({}));
//Object { … } //Mozilla
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} //Edge

console.log(Object.getPrototypeOf({}).constructor);
//f Object() { [native code] }//Edge
//function Object() //Mozilla

console.log(new Object());
//{} //Edge
//Object {  } //Mozilla

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}
// Every object created by a constructor function
//inherits from its constructor's prototype.
//This is known as prototypal inheritance.
// We can see any changes made by a constructor
//function to its prototype with:
// console.log(Object.getPrototypeOf(student1).constructor);

const student1 = new Student(1, "Zhur");
console.log(Object.getPrototypeOf(student1).constructor);
//Edge
//ƒ Student(id, name, subjects = []) {
//   this.id = id;
//   this.name = name;
//   this.subjects = subjects;
// }

//Mozilla
// Student(id, name, subjects)
// arguments: null
// caller: null
// length: 2
// name: "Student"
// prototype: Object { … }
// <prototype>: ()

// An alternative way of accessing the object's
//prototype is:
console.log(student1.__proto__);
//{constructor: ƒ}
// constructor: ƒ Student(id, name, subjects = [])
// __proto__: Object

//student1 prototype is Student prototype
console.log(student1.__proto__ === Student.prototype);
//true

// We can see that prototypes form a chain leading
//back to the original Object prototype with=>
//Student prototype is Object prototype:
console.log(student1.__proto__.__proto__ === Object.prototype);
//true

//Object prototype is nothing. That is end.
console.log(student1.__proto__.__proto__.__proto__);
//null
