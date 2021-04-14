"use strict";

// Iteration: The for LOOP
// for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
}
///////////////////////////////////////
// LOOPING Arrays:
//Breaking and Continuing

const zhurka = ["Zhurka", "Mrs.Ted", new Date().getFullYear() - 1972, "WebDev", ["Ksju", "Ted"], true];
const types = [];
//log all elements from the array:
//i=0, because array's elements start from zero
for (let i = 0; i < zhurka.length; i++) {
  // Reading elements from 'zhurka' array
  console.log(zhurka[i], typeof zhurka[i]);
  // Filling 'types' array:
  //types[i] = typeof zhurka[i];
  //or with 'push':
  types.push(typeof zhurka[i]);
}
console.log(types); //Array(6) [ "string", "string", "number", "string", "object", "boolean" ]
//---------------------------

//calculate age of each year of array:
const years = [1991, 2007, 1989, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(years[i] - 1972);
}
console.log(ages);
//Array(4) [ 19, 35, 17, 48 ]

//-------------------------------
// CONTINUE and BREAK
const zhur = ["Zhurka", "Mrs.Ted", new Date().getFullYear() - 1972, "WebDev", ["Ksju", "Ted"], true];
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < zhur.length; i++) {
  //if typeof not a string, skip it and do
  //next iteration in the loop immediately
  //without console.log on next line
  if (typeof zhur[i] !== "string") continue;
  console.log(zhur[i], typeof zhur[i]);
  //Zhurka string
  //Mrs.Ted string
  //WebDev string
}
//BREAK completely terminates loop
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < zhur.length; i++) {
  //as soon as 'number' is found,
  //exit from the loop
  if (typeof zhur[i] === "number") break;
  console.log(zhur[i], typeof zhur[i]);
  //Zhurka string
  //Mrs.Ted string
}

///////////////////////////////////////

// Looping Backwards
for (let i = zhurka.length - 1; i >= 0; i--) {
  console.log(i, zhurka[i]);
}
//Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
///////////////////////////////////////
// The WHILE Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;

while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
//WHILE can work without counter with condition:

//roll a Dice:
//keep rolling dice until it reaches the '6'
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  //continue rolling
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You win! Your dice rolled ${dice}`);
}

///////////////////////////////////////
// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];
// 3. Use the 'calcTip' function we wrote before to calculate tips and total
//values (bill + tip) for every bill value in the bills array.
//Use a for loop to perform the 10 calculations!
const calcTip = () => {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] < 100 || bills[i] >= 300) {
      tips.push(bills[i] * 0.2);
      // tips += tips[i]; <= doesn't work!
      //don't do 'return'!
      // return totals.push((totals[i] = bills[i] + tips[i]));
      totals.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.15);
      // tips += tips[i]; <= doesn't work!
      //don't do 'return'!
      // return totals.push((totals[i] = bills[i] + tips[i]));
      totals.push(bills[i] + tips[i]);
    }
  }
};
calcTip(bills);
console.log(bills);
console.log(tips);
console.log(totals);

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
//This function calculates the average of all numbers in the given array.
//This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a
//variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the
//current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

const calcAverage = (arr) => {
  const sum = arr.reduce((total, arr) => total + arr, 0);
  const avSum = sum / arr.length;
  return avSum;
};
let avBill = calcAverage(bills);
console.log(avBill);
let avTip = calcAverage(tips);
console.log(avTip);
let avTotal = calcAverage(totals);
console.log(avTotal);
//==============
const av = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avSum = sum / arr.length;
  return avSum;
};
let avBills = av(bills);
console.log(avBills);
let avTips = av(tips);
console.log(avTips);
let avTotals = av(totals);
console.log(avTotals);

// GOOD LUCK 😀

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage2([2, 3, 7]));
console.log(calcAverage2(totals));
console.log(calcAverage2(tips));
