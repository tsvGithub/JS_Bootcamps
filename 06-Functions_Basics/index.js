// NB: A variable declared in a function only exists inside that function.
// However, a function can access variables declared outside of its scope.
//It can also be passed input via arguments.
// input -> performs an action
// input -> returns some data

const user1 = "Reed";
const user2 = "Doug";
const text1 = "Hi!";
const text2 = "Hello!";

function chat(user, text) {
  return `User ${user} says: ${text}`;
}

const message1 = chat(user1, text1);
const message2 = chat(user2, text2);

console.log(message1);
console.log(message2);

// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

// Write your code below:
function splitBill(amount, friends) {
  return `Each person needs to pay ${amount / friends}`;
}
// Testing your solution
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));
