//Default function values enable us to save default
//values directly onto our function parameters.
//These are then used if the value is undefined in the function:

function convertTemperature(celsius, decimalPlaces = 1) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));
