// .map allows us to transform each element of an array and create a new array:
// const newTemps = temperatures.map(temperature =>
// 	temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
// );

// .forEach() works in a similar way but does not create a new array, and instead applies a given action to an existing array.
// ewTemps.forEach(temperature => {
//    if (temperature.isHigh) {
//      console.log(`Temperature ${temperature.degrees} was a record high last week!`);
//    }
// })
// Methods can be chained:
// temperatures
//   .map(temperature =>
// temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
// )
//   .forEach(temperature => {
//    if (temperature.isHigh) {
//      console.log(`Temperature ${temperature.degrees} was a record high last week!`);
//    }
// })
//=============================
//----------------------MAP-------------------------
//// .map allows to transform each element of an array
//and create a new array:

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Array/map
//.map => create a new array
//iterate over all elements
const newTemps = temperatures.map((temperature) => {
  //map updates isRecordTemp to true for every elements
  temperature.isRecordTemp = true;
  //return updated elements
  return temperature;
});
console.log(newTemps);
//Array(4)
// 0: Object { degrees: 69, isRecordTemp: true }
// 1: Object { degrees: 82, isRecordTemp: true } ​
// 2: Object { degrees: 73, isRecordTemp: true }
// 3: Object { degrees: 64, isRecordTemp: true }
// length: 4

//add a new object to every single object in this array:
const newRecords = temperatures.map((temperature) => {
  temperature.isHigh = true;
  return temperature;
});
console.log(newRecords);
//Array(4)
// 0: Object { degrees: 69, isRecordTemp: true, isHigh: true }
// 1: Object { degrees: 82, isRecordTemp: true, isHigh: true }
// 2: Object { degrees: 73, isRecordTemp: true, isHigh: true }
// 3: Object { degrees: 64, isRecordTemp: true, isHigh: true }
// length: 4
//----------------------

//if we want to set property conditionally,
// => ternary
const newRecsCondition = temperatures.map((temperature) => {
  return temperature.degrees > 70
    ? {
        //spread out temperature & add the new object
        ...temperature,
        newRecord: true,
      }
    : temperature;
});
console.log(newRecsCondition);
//Array(4)
// 0: {degrees: 69, isRecordTemp: true, isHigh: true}
// 1: {degrees: 82, isRecordTemp: true, isHigh: true, newRecord: true}
// 2: {degrees: 73, isRecordTemp: true, isHigh: true, newRecord: true}
// 3: {degrees: 64, isRecordTemp: true, isHigh: true}
// length: 4
console.log(temperatures);
//------------------------FOR EACH ----------------------
//for every element of an array:
// .forEach() works in a similar way but does not create a new array,
//and instead applies a given action to an existing array.
//.forEach doesn't change original array.

//check if is newRecord but not modifies array
newRecsCondition.forEach((temperature) => {
  if (temperature.newRecord) {
    console.log(`Temperature ${temperature.degrees} was a new record yesterday.`);
  }
});
//Temperature 82 was a new record yesterday.
//Temperature 73 was a new record yesterday.

//------chaining map&forEach-------------------
temperatures
  .map((temperature) => (temperature.degrees > 70 ? { ...temperature, newRecord: true } : temperature))
  .forEach((temperature) => {
    if (temperature.newRecord) {
      console.log(`Temperature ${temperature.degrees} was a record high last week!`);
    }
  });
// console.log(newTemps);
