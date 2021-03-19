// Arrays are data structures for managing
// collections of data where order is important.
// const todos = [];
// There are a number of bulit-in methods which
// enable us to manage the data in an array, for example
//  .push(), which adds an element to the end of an array and
//  .pop, which removes an array's last element.
// todos.push(todo1, todo2);
// todos.pop();

//====================
//TODO with Object
//Objects:
const chores = {};
const chore1 = {
  text: "Wash the dishes",
  complete: false,
};
const chore2 = {
  text: "Do laundry",
  complete: false,
};
//1 or 2 is a key for Object 'chores' =>
//{'1': 'chore1', '2':'chore2'}
chores[1] = chore1;
chores[2] = chore2;
console.log(chores); //=> 1: Object { text: "Wash the dishes", complete: false } 2: Object { text: "Do laundry", complete: false }

//How to remove completed tasks in Object?
//If we don't know key, then it is a problem.

//----------------
//TODO with Array
//Array preserves the order that elements are added
//Array starts with [0] index

const todos = [];

const todo1 = {
  text: "Wash the dishes",
  complete: false,
};

const todo2 = {
  text: "Do laundry",
  complete: false,
};

//Add to the Array
// todos[0] = todo1;
// todos[1] = todo2;
// console.log(todos); // => Array […]
// 0: Object { text: "Wash the dishes", complete: false }
// 1: Object { text: "Do laundry", complete: false }
// length: 2

//Methodes:
todos.push(todo1, todo2);
console.log(todos);

//Array length:
console.log(todos.length); //2
//to get the index of the last item
const index = todos.length - 1;
console.log(index); // 1
console.log(todos[index]); //Object { text: "Do laundry", complete: false }

//to remove the lasr element of an array:
// todos.pop();
console.log(todos);

//==========================
//================================================================
// Challenge:
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array?

const favouriteSongs = [];

const firstSong = "Kalinka";
const secondSong = "Malinka";
const thirdSong = "Katjusha";
favouriteSongs.push(firstSong, secondSong, thirdSong);
console.log(favouriteSongs);
const lastSongOfArray = favouriteSongs.length - 1;
console.log(favouriteSongs[lastSongOfArray]);
favouriteSongs.push("Like me");
console.log(favouriteSongs);
favouriteSongs.pop();
console.log(favouriteSongs);
