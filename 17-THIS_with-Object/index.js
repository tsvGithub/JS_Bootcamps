// Arrow functions allow us to use a
//function inside another function.

//THIS in function declaration VS arrow function

//user Object
const userData = {
  username: "Zhur",
  title: "Web Dev",
  //=====================
  //THIS WORKS in function declaration
  //this==userData
  sayHi() {
    console.log(this); //=>Object { username: "Zhur", title: "Web Dev", sayHi: sayHi(), getBio: getBio(), greetFriend: greetFriend(), askToFriend: askToFriend() }
    console.log(`Hello ${this.username}!`);
    //Hello Zhur!
  },
  //=======================
  //THIS DOESN'T WORK in arrow function
  //this==window
  getBio: () => {
    console.log(this); //=> Window
    console.log(`User ${this.username} is a ${this.title}`);
    //=> User undefined is a undefined
  },
  //=======================
  //THIS DOESN'T WORK in
  //function declaration with nested function
  //this==window
  greetFriend() {
    setTimeout(function () {
      console.log(this); //=> Window
      console.log(`Say "Hello" to ${this.username}?`);
      // => Say "Hello" to undefined?
    }, 2000);
  },
  //====================
  //THIS WORKS in
  //function declaration with nested function
  //with 'THAT' workaround
  //this==userData
  sayBye() {
    let that = this;
    setTimeout(function () {
      console.log(that); //=>Object { username: "Zhur", title: "Web Dev", sayHi: sayHi(), getBio: getBio(), greetFriend: greetFriend(), sayBye: sayBye(), askToFriend: askToFriend() }
      console.log(`Bye-bye ${that.username}!`);
      //=> Bye-bye Zhur!
    }, 2000);
  },
  //===================
  //THIS WORKS in
  //function declaration with nested arrow function
  //this==userData
  askToFriend() {
    setTimeout(() => {
      console.log(this); //=> Object { username: "Zhur", title: "Web Dev", getBio: getBio(), askToFriend: askToFriend() }
      console.log(`Would you like to friend ${this.username}?`);
      // => Would you like to friend Zhur?
    }, 2000);
  },
};

console.log(this); // => Window

userData.sayHi();
userData.getBio();
userData.greetFriend();
userData.sayBye();
userData.askToFriend();

//===================
//======================
//===========================
// Object Methods
const me = {
  firstName: "Zhurka",
  lastName: "Mrs.Ted",
  birthYear: 1972,
  job: "Web Dev",
  friends: ["Ksju", "Ted", "Lena"],
  hasDriversLicense: true,
  location: "Barcelona",
  twitter: "@zhurka",
  //------------
  //METHODS
  //function attached to object is 'method':
  //function expression produces value =>
  //is good for creating 'method' in Object,
  //function declaration won't work!
  // function calcAge(birthYear) {
  // //   return 2021 - birthYear;
  // }
  // ==>> (1)
  calcAge: function (birthYear) {
    return 2021 - birthYear;
  },
  // ==>> (2)
  //'this' allows get 'birthYear' property
  //directly from 'me' Object instead of having
  //to pass it as a parameter into this function.
  //'This' is equal to this object 'me',
  //object which calling the method=> me.calcAge()
  calcAge1: function () {
    //this===me Object
    console.log(this);
    //Object { firstName: "Zhurka", lastName: "Mrs.Ted", birthYear: 1972, job: "Web Dev", friends: (3) […], hasDriversLicense: true, location: "Barcelona", twitter: "@zhurka", calcAge: calcAge()
    console.log(this.birthYear); //1972
    return 2021 - this.birthYear;
  },
  // ==> (3)
  //calculate 'age' and add it to the
  //Object 'me' =>after can read as a property
  //'age' of 'me' object multiple times:
  calcAge2: function () {
    //this.age === me.age
    // this.age = 2021 - this.birthYear;
    // console.log(this.age); //49
    //or:
    this["age"] = 2021 - this.birthYear;
    console.log(this["age"]); //49

    return this.age;
  },
  //-----------------
  //NB!!! arrow functions don't have a 'this'
  //keyword => 'this' only applies to normal
  //functions.
  //-----------------
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge2()}-year old ${me.job}, and she has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license.`;
  },
};
//(1) dot vs brackets notation:
console.log(me.calcAge(1972)); //49
console.log(me["calcAge"](1972)); //49
//--------------------------
//(2)
console.log(me.calcAge1()); //49
//--------------------------
//(3)
console.log(me.calcAge2()); //49
console.log(me.age); //49
//----------------------
console.log(me.getSummary());
//Zhurka is a 49-year old Web Dev, and she has a driver's license.

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
