// 'this' is a reference to an object =>
//has dinamic characteristics

// What the 'this' keyword means in different
//contexts?

// ====== 4 Rules to 'this' ========
//===================================
// 1) in the global context:
//it is global object ('Window') or
//'undefined' in strict mode
//---------------
console.log(this); //Window
//------in function declaration:
function whatIsThis() {
  console.log(this);
}
whatIsThis(); //Window
//----function declaration 'strict mode'----
function whatIsThisSM() {
  "use strict";
  console.log(this);
}
whatIsThisSM(); //undefined
//'undefined' is better because Object can mutate
function whatIsThisMutate() {
  this.something = 2;
  console.log(something);
}
whatIsThisMutate(); //2

//===============
// 2) as a method on an object:
//is object on left side of dot
const user = {
  first: "Zhurka",
  last: "Mrs.Ted",
  greetUser() {
    console.log(`Hi, ${this.first} ${this.last}`);
  },
};
user.greetUser(); //Hi, Zhurka Mrs.Ted
//-----in nested object-------
//is object on left side of dot
const userInfo = {
  title: "Web Dev",
  user: {
    first: "Zhurka",
    last: "Mrs.Ted",
    greetUser() {
      console.log(`Hi, ${this.first} ${this.last} ${this.title}`);
    },
  },
};
userInfo.user.greetUser();
//Hi, Zhurka Mrs.Ted undefined (!)
//undefined' is because 'title' doesn't
//refer to 'user'Object

//=================================
// 3) as a constructor function or class constructor
//is the instance itself (class or function)
//with 'new'

//class constructor
class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;
  }
  getAge() {
    console.log(`${this.first}'s age is ${this.age}`);
  }
}
//class with 'new' key word bound 'this' to
//User instance:
const user1 = new User("Bob", 24);
user1.getAge(); //Bob's age is 24

//------------
//constructor function
function UserF(first, age) {
  this.first = first;
  this.age = age;
}
UserF.prototype.getAge = function () {
  console.log(`${this.first}'s age is ${this.age}`);
};
const user2 = new UserF("Jane", 25);
user2.getAge(); //jane's age is 25

//==========================
// 4) as a DOM event handler: is 'event.target'
//(is the element itself)

const button = document.createElement("button");
button.textContent = "Click";
document.body.appendChild(button);

button.addEventListener("click", function () {
  console.log(this);
});
//<button>

//=================================
//====== call(), apply(), bind()====

// You can explicitly determine what
//'this' should refer to
// with call(), apply() and bind().

// Why is it useful to use call, apply, or bind?
// Because it allows us to have control over the
// value of this. Oftentimes, this turns out to be
// a value we don't expect. They were created to make
// sure that we can set the this context of any
// function as we need.

//Object
const person = {
  name: "Zhurka",
  title: "Web Dev",
};
//Function
function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

//How to connect object 'person' with function
//'printUser'?

//1) with call()
//call() bind 'this' context in function to Object
printUser.call(person);
//Zhurka is a Web Dev

//2) with apply()
printUser.apply(person);
//Zhurka is a Web Dev

function printBio(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

//***difference between call() and apply()***
printBio.call(person, "Barcelona", "Spain");
//Zhurka is a Web Dev in Barcelona, Spain

//! the second argument to .apply() must be an
//array:
printBio.apply(person, ["Barcelona", "Spain"]);
//Zhurka is a Web Dev in Barcelona, Spain

//!!!
//call() & apply() have to call every time,
//bind() haven't => this is 'one time use method'

//3) with bind()
//bind() brings brand new function that always
//bind function with object
const userDescription = printUser.bind(person);
userDescription();
//Zhurka is a Web Dev

//the benefit is that if mistakenly bind
//another object, it won't work
const person2 = {
  name: "Doug",
  title: "Entrepreneur",
};
printUser.bind(person2);
userDescription();
//Zhurka is a Web Dev

//===================
//arrow function
const user99 = {
  first: "Bob",
  fn() {
    console.log(this.first);
  },
  arrowFn: () => {
    console.log(this.first);
  },
};

user99.fn(); //Bob
//-------!!!----
user99.arrowFn(); //undefined =>
//arrow function doesn't work with bind()
