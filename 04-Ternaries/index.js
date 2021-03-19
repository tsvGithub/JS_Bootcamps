// If/else statements can be repetitive.
//In order to conditionally assign a variable without
//repetition, we can use ternary operators (?)

// NB: Continue to use if/else statements
//and not ternaries:
// if you want to perform an action.
// if the condition is complex.

//================================================================
const isAuthenticated = false;
let cartItemCountIf = 0;

if (isAuthenticated) {
  // add item to cart
  cartItemCount = 1;
} else {
  // tell user to login
  console.log("Please log in!");
  cartItemCount = 0;
}
console.log(cartItemCountIf);
//Ternary
const cartItemCountTernary = isAuthenticated ? 1 : 0;
console.log(cartItemCountTernary);

//=====================================
const age = 12;

let greetingIf;

if (age < 10) {
  greetingIf = "Hey there";
} else if (age > 18) {
  greetingIf = "Greetings";
} else if (age > 10) {
  greetingIf = "What's up?";
} else {
  greetingIf = "That's an interesting age!";
}
console.log(greetingIf);

const greetingTernary =
  age < 10
    ? "Hey there"
    : //or
    age > 18
    ? "Greetings"
    : //or
    age > 10
    ? "What's up?"
    : //or
      "That's an interesting age!";
console.log(greetingTernary);
