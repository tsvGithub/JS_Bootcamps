"use strict";

const finalMenuItems = ["American Cheeseburger", "Southern Fried Chicken", "Glazed Salmon"];
//to get elements from the array, we can use old way:
let first = finalMenuItems[0];
let second = finalMenuItems[1];
let third = finalMenuItems[2];
console.log(first, second, third);
//American Cheeseburger Southern Fried Chicken Glazed Salmon

//--------------DESTRUCTURING-------
// We can use array destrucuturing (ES6)
//(doesn't mutate original array)
//To take values out of an array and store
//them into variables:
let [primero, segundo, tercero] = finalMenuItems;
console.log(primero, segundo, tercero);
//American Cheeseburger Southern Fried Chicken Glazed Salmon

//we can take only values we need, not all of them
let [pirmais, otrais] = finalMenuItems;
//to see the name of the element, we have to
//wrap it into {} AFTER destructuring
//using Object shorthand syntax when the
//key and value have the same name =>
// {pirmais: pirmais} => {pirmais}
console.log({ pirmais }, { otrais });
//Object { pirmais: "American Cheeseburger" }
//Object { otrais: "Southern Fried Chicken" }

// We can also use destructuring to SWAP the
//values between two variables, using
//destructuring again:
console.log("before swapping:", { first }, { second });
//before swapping:
// Object { first: "American Cheeseburger" }
// Object { second: "Southern Fried Chicken" }
[second, first] = [first, second];
console.log("after swapping:", { first }, { second });
//after swapping:
// Object { first: "Southern Fried Chicken" }
// Object { second: "American Cheeseburger" }

//----REST OPERATOR-------------
//to get 1 value from an array and put
//other values into separate array:
const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });
// losers: Array [ "Southern Fried Chicken", "Glazed Salmon" ]
// winner: "American Cheeseburger"

// After we have removed one value from an array,
//we can use the rest operator (...) to collect
//the others into a separate array:
// const [winner, ...losers] = finalMenuItems;

//==============================
//==================================
// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ["Salmon Rillettes", "Grilled Tuna Provencal", "Fish and Chips"];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

//Topornyj podhod:
// // Modify these four variables first
// let [chefsFishDishes, ...regularFishDishes] = fishDishes;
// let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
// console.log(chefsFishDishes); //Salmon Rillettes
// console.log(regularFishDishes); //Array [ "Grilled Tuna Provencal", "Fish and Chips" ]
// console.log(regularMeatDishes); //Lasagna
// console.log(chefsMeatDishes); //Array [ "Spaghetti", "Satay Chicken Skewers" ]

// // Finally, use the spread operator to create these two arrays as well
// let chefsDishes = [...chefsMeatDishes, chefsFishDishes];
// let regularDishes = [...regularFishDishes, regularMeatDishes];
// console.log(chefsDishes); //Array(3) [ "Spaghetti", "Satay Chicken Skewers", "Salmon Rillettes" ]
// console.log(regularDishes); //Array(3) [ "Grilled Tuna Provencal", "Fish and Chips", "Lasagna" ]

//!!! 5*
// Modify these four variables first
let chefsFishDishes = fishDishes.filter((dish) => dish.startsWith("S"));
let regularFishDishes = fishDishes.filter((dish) => !dish.startsWith("S"));
let chefsMeatDishes = meatDishes.filter((dish) => dish.startsWith("S"));
let regularMeatDishes = meatDishes.filter((dish) => !dish.startsWith("S"));
// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsFishDishes, ...chefsMeatDishes];
let regularDishes = [...regularFishDishes, ...regularMeatDishes];

console.log(chefsDishes); //Array(3) [ "Salmon Rillettes", "Spaghetti", "Satay Chicken Skewers" ]
console.log(regularDishes); //Array(3) [ "Grilled Tuna Provencal", "Fish and Chips", "Lasagna" ]

//======================
//======================
//====================
//DESTRUCTURING is breaking a complex data structure
//down into a smaller data structure like a variable.

//ARRAY DESTRUCTURING:
//Destructuring is retrieving elements from the
//array into separate variables:
const aarr = [1, 2, 3];
//old way =>
const a = aarr[0];
const b = aarr[1];
const c = aarr[2];
//ES6 => destructuring assignment:
//destructuring 3 variiables in left side
//([z,y,z] is not an array, it is 'destructuring' )
//from the right side (aarr => array)
const [x, y, z] = aarr;
console.log(x, y, z); // 1 2 3
//the original array is not affected!:
console.log(aarr); //[1,2,3]

//--------------
const restaurant = {
  //------------ I -------------
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //--------------- II ------------------
  //Function returns an array and then immediately
  //destruct the result into different variables.
  //This allows to return multiple values from a
  //function.
  //Function to order food accepts 2 parameters:
  //1=> index for the starter menu &
  //2=> index for the main menu.
  //(Person order by giving the index of the menus)
  order(starterIndex, mainIndex) {
    // return the content of the arrays based
    //on the given indexes:
    return /*return the array */ [
      //this-> this Object
      //starterMenu array -> property of this object
      //starterIndex -> position of the element in the array
      this.starterMenu[starterIndex],
      //this-> this Object
      //mainMenu array -> property of this object
      //mainIndex -> position of the element in the array
      this.mainMenu[mainIndex],
    ];
    //Here are not any destructuring yet, it
    //is doing in the call (II-3) of the function
  },
};
console.log(restaurant);
//========================
//=========   I   =========
//destructuring 2 (first& second) elements
//from the array:
let [firstR, secondR] = restaurant.categories;
console.log(firstR, secondR); //Italian Pizzeria

//to skip second element, just put 'comma'
//instead of that element:
let [pervyj, , tretij] = restaurant.categories;
console.log(pervyj, tretij); //Italian Vegetarian

//to SWITCH (mutate) ELEMENTS from the array:
// console.log(firstR, secondR); //Italian Pizzeria
//*************************old way =>
// const temp = pervyj;
// pervyj = tretij;
// tretij = temp;
//********************ES6 =>
//1)create new array with the variables inverted
//[secondR, firstR];
//2)destructure them
//   2)                     1)
[firstR, secondR] = [secondR, firstR];
//[firstR, secondR] equals the destructuring of
//the array [secondR, firstR]
//Here is not used 'let/const' because of
//reassignment the values of the two variables.
console.log(firstR, secondR); // Pizzeria Italian

//=====================+=====
//=========  II  ==========
// (3) Recieve TWO returned values from a function:
//call method 'order' with 2 arguments
//the first for starterMenu & the second
//for mainMenu:
console.log(restaurant.order(2, 0));
//return an array:
//(2) ["Garlic Bread", "Pizza"] <= array!
//DESTRUCTURIG return from the function
//immediately creates two variables out of
//one function call:
const [starter, main] = restaurant.order(3, 1);
console.log(starter, main);
//return a string:
//Caprese Salad Pasta <= string!
//====================

//===============================
//===========   III =============
//NESTED ARRAY DESTRUCTURING
const nested = [2, 4, [5, 6]];
//to get the first and the third ([5,6])
//elements from the array 'nested':
const [i, , j] = nested;
console.log(i, j); //(2) [5, 6]
//To get all the individual values,
//need to do destructuring inside of destructuring:
const [e, , [l, m]] = nested;
console.log(e, l, m); //2 5 6

//=======================
//============ IV =================
//DEFAULT VALUES FOR DESTRUCTURING
//Set DEFAULT VALUES for the variables when
//extracting them. Useful when is not known of
//the length of the array or for API:
const [p, q, r] = [8, 9];
console.log(p, q, r); //8 9 undefined
//--------------------
//to avoid 'undefined' set DEFAULT VALUES:
const [v, w, h = 1] = [8, 9];
console.log(v, w, h); //8 9 1

//============== !!! =====================
//==========================
//Destructuring позволяет быстрее получать (выбирать)
//определённые значения из массивов и Objects. Можно из
//массива сразу забирать нужные значения.

// Можно забирать из массивов так:
const array99 = [1, 2, 3, 5, 8, 13];
const aa = array99[0];
const bb = array99[1];
console.log(aa, bb);
// 1 2
// --------------------------------
// Или так:
// Выборка с destructuring:
// ARRAY [массив] Создаём переменную 'aaa' и 'bbb'
// и их оборачиваем в [квадратные скобки], и дальше
//говорим, из какого массива я их создаю (из массива 'array').
const [aaa, bbb] = array99;

//раньше                     //с destructuring
// const a = array[0];          const [a,b] = array
// const b = array[1];   // =>
// console.log(a, b);           console.log(a, b);
//  1 2                       > 1 2

// -------------------------------------
//Можно также применять оператор  …SPREAD ,
//забрав все остальные значения, например, в переменную 'c'.
const [a1, b1, ...c1] = array99;
console.log(a1, b1, c1);
//1 2 [ 3, 5, 8, 13 ] //a=1, b=2, c=[3,5,8,13] массив из всех остальных значений массива
//-------------------------------------------------
//Благодаря данному синтаксису мы можем задавать значения
//по умолчанию (default params):
//Например, если переменная 'b2' будет не определена, то
//ей зададим значение  42.
const [a2, b2 = 42, ...c2] = array99;
console.log(a2, b2, c2);
//1 2 [ 3, 5, 8, 13 ] // b2 = всё равно 2, a не 42.
//Но если в массиве второй элемент будет 'undefined':
const array = [1, undefined, 3, 5, 8, 13];
const [a3, b3 = 42, ...c3] = array99;
console.log(a3, b3, c3);
//1 42 [ 3, 5, 8, 13 ]  // b = 42
//---------------------------------------------------------
//Например, нам нужно выбрать нулевой и второй элементы:
const [a4, b4, c4] = array99;
console.log(a, c);
// 1 3
// или так:
const [a5, , c5] = array99;
console.log(a, c);
// 1 3

//========================================
//https://www.youtube.com/watch?v=wWYokY0Pt2M&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=16
//Массивы:
//Функция, осуществляющая математические действия
//для двух входящих величин. Как результат этих
//действий будем возвращать массив. Сформируем
//массив с помощью квадратных скобок и как разные
//элементы массива вставляем сюда разные операции.
//Первый элемент массива это a + b, а второй элемент
//массива это a - b
function calcValues(a, b) {
  return [a + b, a - b];
}
console.log(calcValues(42, 10));
(2)[(52, 32)]; //получаем массив

//Создадим переменные того чтобы хранить эти результаты вычислений.
//Сумма a + b это первый элемент result[0] получаемого
//массива , который мы записали в переменную result и
//её мы положим в sum.  Вычитание - второй элемент массива
//result[1] и его мы кладём в sub.
const result = calcValues(42, 10);
const sum1 = result[0];
const sub1 = result[1];
console.log(sum1, sub1);
//52 32

//Предыдущую запись можно улучшить (сократить) с
//помощью деструктуризации. Вместо того, чтобы
//отдельно обращаться к какому-либо индексу массива,
//мы можем создать переменные из массива result и
//квадратными скобками мы говорим, что здесь будет
//деструктуризация . И дальше в квадратных скобках
//поочерёдно перечисляем названия переменных, которые
//будут принимать значения нужных индексов.
let [sum, sub] = result;
console.log(sum, sub);
//52 32

//Можно переменную result отдельно не создавать.
//Можно сразу в квадратных скобках создавать переменные
//[sum, sub] из массива result. Потому что результатом
//работы функции calcValues является массив, который мы
//сразу же можем разбить.
[sum, sub] = calcValues(42, 10);
console.log(sum, sub);
//52 32

//Добавим ещё операции для функции
function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}
//Если мы хотим получить только сумму и умножение mult.
let mult, other;
[sum, sub, mult] = calcValues(42, 10);
console.log(sum, mult);
//52 420
//Проблема в том, что мы создаём переменную вычитания sub,
//но мы её не используем. При работе с массивами при
//деструктуризации можно ненужную переменную опустить и
//записать так. Данная дополнительная запятая говорит о том,
//что мы пропускаем один индекс и не создаём отдельную переменную.
[sum, , mult] = calcValues(42, 10);
console.log(sum, mult);
//52 420

//Можно применять оператор "rest" если мы хотим получить
//все остальные значения (у нас здесь это только деление,
//потому что вычитание у нас игнорируется) и собрать в массив other.
[sum, , mult, ...other] = calcValues(42, 10);
console.log(sum, mult, other);
//52 420 [4.2]
//--------------------------------------------
//DEFAULT VALUE
//Допустим, по какой-то причине у нас нет вычитания
//и вместо него undefined, но мы хотим получить значение
//вычитания в отдельную переменную sub. Получаем undefined.
function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}
[sum, sub, mult, ...other] = calcValues(42, 10);
console.log(sum, mult, other, sub);
//52 420 [4.2] undefined

//При работе с деструктуризацией можно задавать значения по умолчанию,
//если какие-то значения не определены undefined, то тогда задаётся
// дефолтное значение (default value) (sub = "Вычитания нет").
[sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10);
console.log(sum, mult, other, sub);
//52 420 [4.2] "Вычитания нет"

//А если значение задано, то дефолтное значение игнорируется:
function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}
[sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10);
console.log(sum, mult, other, sub);
//52 420 [4.2] 32

/**********************************************/

//========================
//REST PATTERN & OPERATOR
//************************************
//SPREAD Operator vs REST operator
//The main difference:
//· The REST operator is used in places where we would otherwise
//write variable names separated by commas. This is because the REST
//operator collects elements (variable names) into an array or object
// – both of which are composed of elements (variable names) separated
// by commas. Thus, they can be used in places where arrays or objects
//can be used, such as…
//     o Function parameters (when declaring/ expressing a function)
//     o Left side of a destructuring assignment ( to collect individual
//       elements into an object or an array which will be used to deconstruct
//       the object or array on the right side of the assignment operator.
//
//· The SPREAD operator is used in places where we would otherwise
//write values separated by commas. This is because the SPREAD operator
//spreads elements into individual values. Thus, they can be used in places
//where individual elements can be used, such as…
//     o Function arguments (when calling a function)
//     o In an array or object, on the right side of a destructuring assignment
//       (to be assigned to the variables on the left side of the assignment operator).
//***************************************************
//Spread => unpacks arrays; it use for functions
//Spread: because on RIGHT side of '='; on the
//LEFT side of '=' together with destructuring.
const arr = [1, 2, ...[3, 4]];
//On the LEFT side of '=' is REST
const [a1a, b1b, ...others] = [1, 2, 3, 4, 5];
console.log(a1a, b1b, others); //1 2 [3, 4, 5]
//REST is the rest of the array that will be
//put into a new array ('others'). Rest collects
//elements from the array that unused with
//destructuring assignment.

//******** '...' using as SPREAD, DESTRUCTURING and REST ****************
//Make copy of 2 arrays using the SPREAD operator
//(Right) and put them into an one new array;
//On the LEFT side make DESTRUCTURING from the
//new array (first and third elements and skip
//the second element) and REST of the elements
//from the new array put into new array 'otherFood';
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
//Pizza Risotto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
//NB! Rest not includes any skipped elements,
//just the rest elements after destructured elements.

//NB!!! REST must be the last element:
// const [pizza, , risotto, ...otherFood, bread] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// Uncaught SyntaxError: Rest element must be last element
