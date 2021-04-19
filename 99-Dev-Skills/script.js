'use strict';

///////////////////////////////////////
// // Debugging with the Console and Breakpoints:

// //debugging with console:
// //no arguments, because they will come from prompt
// const measureKelvin = function () {
//   //object for measurement
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: 10,
//     //1a)
//     // value: prompt('Degrees celsius:'),
//     // C) FIX
//     //1e) <= from "string" to "number"
//     value: Number(prompt('Degrees celsius:')),
//   };

//   // B) FIND
//   console.table(measurement); //Object
//   // index: Value:
//   // type	"temp"
//   // unit	"celsius"
//   // value	"10" <= string!

//   //1d)
//   console.log(measurement);
//   //{type: "temp", unit: "celsius", value: "10"}
//   console.log(typeof measurement.value); //string
//   // console.table(measurement); //Object

//   //1b)
//   console.log(measurement.value); //10
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   //----------------
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// //1c)
// console.log(measureKelvin()); //10273

//============================
// // Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  //bug is here!
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
