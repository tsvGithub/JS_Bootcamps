const obj = { one: 1, two: 2 };

//to iterate over Object data: for-in loop
for (const key in obj) {
  console.log("key", key); //key one // key two
  console.log("value", obj[key]); // value 1 // value 2
}
//Arrays are more flexible for working with
// We can convert objects into arrays in three ways:
// Object.keys(), Object.values(), Object.entries() methods

//1.
// Object.keys() - allows us to take the keys
//of an object and turn them into an array.

const user = {
  name: "John",
  age: 29,
};
console.log(Object.keys(user)); //Array [ "name", "age" ]
//good for check whether the given property (key) exists
const ageExists = Object.keys(user).includes("age");
console.log(ageExists); //true

//to get VALUES from an Object
//get keys from object user
//map over user Object
//for every key get VALUES with user[key] brackets notation
const values = Object.keys(user).map((key) => user[key]);
console.log(values); //Array [ "John", 29 ]
//or just:
console.log(Object.values(user)); //Array [ "John", 29 ]

//----------------------
//2
// Object.values() allows us to get the values of an object:
console.log(Object.values(user)); //Array [ "John", 29 ]

//Object.values() for total sum of a user expenses:
const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};
//to get sum total with all expenses
const monthlyTotal =
  //get array of VALUES monthlyExpenses
  Object.values(monthlyExpenses)
    //sum total
    //initial value of total = 0
    //acc = accumulator for total expenses
    //expense = each element iterating over
    //sum them
    .reduce((acc, expense) => acc + expense, 0);
//
console.log(monthlyTotal); //2794

//======================
//3
// Object.entries() allows us to iterate over the
//entire object (keys and values):

console.log(Object.entries(user));
//0: Array [ "name", "John" ]
//1: Array [ "age", 29 ]

//nested Object
const users = {
  //id:
  2345234: {
    name: "John",
    age: 29,
  },
  //id:
  8798129: {
    name: "Jane",
    age: 42,
  },
  //id:
  1092384: {
    name: "Fred",
    age: 17,
  },
};
console.log(Object.entries(users));
//Array with 3 subarrays with Object:
// 0: Array [ "1092384", {…} ]
// 1: Array [ "2345234", {…} ]
// 2: Array [ "8798129", {…} ]

//get users over 20:
//use map()+filter()
// Object.entries(users).map().filter();
const usersAbove20 = Object.entries(users)
  //
  .map(([id, user]) => ({ ...user, id }))
  //
  .filter((user) => user.age < 20);
console.log(usersAbove20);
//0: Object { name: "Fred", age: 17, id: "1092384" }

//or reduce()
const usersOver20 =
  //iterate over object and get all
  //keys-values
  Object.entries(users)
    //метод reduce принимает в себя два
    //параметра - callback, который принимает в себя
    //также 2 параметра:
    //всего accumulator и итерируемый элемент
    //массив [id, user] массива users.
    .reduce(
      //() => {}, []
      //accumulator => acc
      //array destructuring [id & user data]
      // We're doing array destructuring here.
      //The 'id' is in the first position (index 0)
      //and the 'user' value is in the second position
      // (index 1). It is the equivalent of this:
      // const data = ['1092384', { name: "Fred", age: 17 }];
      // const [id, user] = data;
      // console.log(id); // '1092384'
      // console.log(user); // { name: "Fred", age: 17 }
      (acc, [id, user]) => {
        //if user age > 20
        if (user.age > 20) {
          //acc=[];
          //push() all the data into acc
          //...user = spread out all user's properties
          //and add 'id' (shorthand for id:id) =>
          //['1092384': {name: "Fred", age: 17,}],
          //id===key (1092384:)
          acc.push({ ...user, id });
        }
        //initial value is an emty array to put into
        //it new values
        return acc;
      },
      //И второй параметр в  reduce это некоторое начальное значение [],
      //которое будет присвоено переменной accumulator.
      []
    );
//
console.log(usersOver20);
//0: Object { name: "John", age: 29, id: "2345234" }
//1: Object { name: "Jane", age: 42, id: "8798129" }
