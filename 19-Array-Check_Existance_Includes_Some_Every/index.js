// This screencast introduces us to some useful array methods:

// .includes() tells us whether a certain element exists in an array:
// .includes for primitives: strings, numbers & booleans
//console.log(temperatures.includes(50));

// .some() checks whether one or more elements in an array meets a given condition:
// const result = temperatures.some(temperature => temperature.isRecordTemp);

// .every() tells us whether a condition is true for all the elements in an array:
// const result = temperatures.every(temperature => !temperature.isRecordTemp);
//=======================

const nums = [69, 82, 73, 64]; //indexes: 0,1,2,3
//to check existance of the element
console.log(nums.indexOf(82)); //1=> index of 82
console.log(nums.indexOf(50)); //-1=> index doesn't exist => no such element
//existance with true/false (not convenient)
console.log(nums.indexOf(50) > -1); //-1=> false

//method INCLUDES to check if element exists:
console.log(nums.includes(50)); //false

//array with objects
const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];
//to check if isRecordTemp is true:
//can't use .includes because array with objects,
//.includes is for primitives.

//to chek an array with objects and see
//if 1 or more elements meet a given condition
// use method .some:
//with function to provide condition & iterate
//over array's elements & stops at the first
console.log(temperatures.some((temperature) => temperature.isRecordTemp === true)); //true

//.every method to check if all elements meet condition: true/false
const result = temperatures.every((temperature) => !temperature.isRecordTemp); // true / false
console.log(result); //false

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
  { song: "Shape of You", timesStreamed: 2.384, wonGrammy: true },
  { song: "One Dance", timesStreamed: 1.791, wonGrammy: false },
  { song: "Rockstar", timesStreamed: 1.781, wonGrammy: false },
  { song: "Closer", timesStreamed: 1.688, wonGrammy: false },
  { song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true },
];

//1)
console.log(songs.some((oneSong) => oneSong.wonGrammy === true)); //true
//or:
console.log(songs.some((oneSong) => oneSong.wonGrammy)); //true
//2)
console.log(songs.every((oneSong) => oneSong.timesStreamed > 1.5)); //false
