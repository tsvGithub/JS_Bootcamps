// Arrow functions allow us to write more concise
// code. They are:
// function expressions (assigned to a variable)
// anonymous (can't give them a name)

// Implicit returns mean that the value following
//the => is always returned, so the return keyword is not needed.

const username = "john";

const capitalize = (name) =>
  //return
  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback) {
  return callback(capitalize(name));
}
//greetUser with 2 parametrs: 'username' + func with parametr 'name'
const result = greetUser(
  username,
  (name) =>
    //return
    `Hi there, ${name}!`
);

console.log(result);

//================================
// Challenge: Rewrite your first function from a previous challnge to be an arrow function.
// Stretch goal: Rewrite counting down closure in arrow function form.

// function splitBill(amount, numPeople) {
//     return `Each person needs to pay ${amount / numPeople}`
// }
//------------------------
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`;
// const splitBill = (amount, numPeople) => {
//   return `Each person needs to pay ${amount / numPeople}`;
// };

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));

//=====================
// function countdown(startingNumber, step) {
//   let countFromNum = startingNumber + step;
//   return function decrease() {
//     countFromNum -= step;
//     return countFromNum;
//   }
// }
//---------------------------
// const countdown = (startingNumber, step) => {
//   let countFromNum = startingNumber + step;
//   let decrease = () => {
//     countFromNum -= step;
//     return countFromNum;
//   };
//   return decrease;
// };
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => (countFromNum -= step);
};

const countingDown = countdown(10, 1);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
