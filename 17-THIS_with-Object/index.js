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
