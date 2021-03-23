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

//========================
// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator 
for whenever he goes eating in a resturant. In his 
country, it's usual to tip 15% if the bill value is 
between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 
2. Print a string to the console containing the bill value, 
the tip, and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
// let bill = 275;
// let bill = 40;
let bill = 430;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
