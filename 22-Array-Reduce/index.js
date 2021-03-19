//.reduce() can transform an array into any data type.
//This is useful for tasks such as creating totals.
//Метод  Reduce служит для того, чтобы получить финальное
// значение, совершив итерацию  по массиву.
//С помощью метода Reduce:

const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];

// Создаём переменную totalPrice,
//делаем присвоение и пробегаемся по массиву menuItems
//с помощью  метода reduce  и он принимает в себя два
//параметра - callback, который принимает в себя также 2 параметра:
//всего accumulator и итерируемый элемент menuItem массива menuItems.
const totalPrice = menuItems.reduce(
  (accumulator, menuItem) => {
    console.log(` 
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
    // Мы должны вернуть какое-то изменённое значение , т.е.
    //переменной accumulator , которая равна 0, присвоить ей menuItem.price
    return accumulator + menuItem.price;
  },
  //И второй параметр в  reduce это некоторое начальное значение 0,
  //которое будет присвоено переменной accumulator.
  0
);
console.log(totalPrice); //105

//========================================
// Challenge:
// Use reduce() to sum the weights of all the cars
// Stretch goal:
// Use reduce to sum the weights of only the electric cars

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },
];

const totalWeight = cars.reduce((accumulator, car) => {
  return accumulator + car.weight;
}, 0);

console.log(totalWeight); //8565

const totalWeightElectric = cars.reduce((accumulator, car) => {
  return accumulator + (car.isElectric ? car.weight : 0);
}, 0);

console.log(totalWeightElectric); //3100

//==========================
//Virtually every array method can be recreated with .reduce().
//This is because the majority of these methods are productions,
//meaning that they take an array and transform it into something else.
const numbers = [1, 2, 3, 4, 5, 6];

//create a new array with doubled numbers:
const doubledNumbers = numbers.reduce(
  (acc, num) => {
    acc.push(num * 2);
    return acc;
  },
  //initial value is an emty array to put into it new values
  []
);
console.log("doubled numbers", doubledNumbers);
console.log("numbers", numbers);
//doubledNumbers with Map:
const mapDobledNumbers = numbers.map((num) => num * 2);
console.log(mapDobledNumbers);

//----------------------
const ifGreaterNumbers = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(ifGreaterNumbers); //Array(3) [ 4, 5, 6 ]
// ------FiLTER()--------
//is equial to this .filter():
const filterGreaterNumbers = numbers.filter((num) => num > 3);
console.log(filterGreaterNumbers); //Array(3) [ 4, 5, 6 ]
const mapGreaterNumbers = numbers.map((num) => num > 3);
console.log(mapGreaterNumbers); //Array(6) [ false, false, false, true, true, true ]

const greaterNumbers = numbers.reduce(
  (acc, num) => {
    ////push is not returning an updated array!
    ////we can't provide it as an accumulator, so
    // return num > 3 ? acc.push(num) : acc;
    ////use .concat() since it does return an updated array
    return num > 3 ? acc.concat(num) : acc;
  },
  //initial value is an emty array to put into it new values
  []
);
console.log(greaterNumbers);
const greaterNumbers = numbers.reduce((acc, num) => (num > 3 ? acc.push(num) : acc), []);
