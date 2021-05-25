//---------SHALLOW COPY vs DEEP COPY -------
//In programming, we store values in variables.
//Making a copy means that you initiate a new
//variable with the same value(s). However, there is
//a big potential pitfall to consider:
//deep copying vs. shallow copying.
//A deep copy means that all of the values of the new
//variable are copied and disconnected from the original
//variable. A shallow copy means that certain (sub-)values
//are still connected to the original variable.

//-----SHALLOW COMPARISON ----------------
// With Javascript's 'strict equal' operator (===),
// any primitive types that have the same value and
// type are considered true.

// Primitive types (strings, numbers, booleans)
console.log("Hi" === "Hi");

//However, two complex objects which look the same
// are not considered equal because
// they take up two distinct places in memory:

// Complex types (array, object)
console.log({ name: "Joe" } === { name: "Joe" });

const arr1 = [1, 2, 3, [4]];
const arr2 = [1, 2, 3, [4]];

const state = {
  favNumber: 42,
  name: "Bob",
  address: {
    street: "123 Main Street",
    city: "Nowhere, PA",
    zip: 12345,
  },
};

const state2 = {
  favNumber: 42,
  name: "Bob",
  address: {
    street: "123 Main Street",
    city: "Nowhere, PA",
    zip: 12345,
  },
};

// console.log(state.favNumber === state2.favNumber) //true
// console.log(state.name === state2.name) //true
// console.log(state.address === state2.address) //false

// A shallow comparison of the following two objects
// produces true to show that they are shallowly equal.

// The following example produces true because both consts
// point to the same place in memory:
const person = {
  name: "Sarah",
};
const anotherPerson = person;
console.log(anotherPerson === person);

// However, two objects defined in separate places are
// not considered shallowly equal, even if their keys
// are the same.
const person = {
  name: "Sarah",
};

const anotherPerson = {
  name: "Sarah",
};
console.log(anotherPerson === person);
