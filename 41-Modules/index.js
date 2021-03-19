//Modules allow to split code into multiple
//files. Modules - allow us to share code
//between files.
//Module is just file, one script = one module
//This helps to keep each part
//of the app clearly defined and ensures
//separation of concerns.
//To use modules, we need two keywords:
// import - allows us to import functionality
//from other modules
// export - labels variables and functions which
//should be accessible from outside the current
//module.
//==================
//!!!run this with localhost Live Server!!!
//================

//1)Create Module in HTML: => type='module'
// <script src="index.js" type="module"></script>;
//=> index.js ===module + div with id 'root'
//-------------

//separation of concerns
//logic for App is in different folder
//'utils' hold functions for App
//3)import modules before using them:
//3a) import named export:
//to avoid conflict with other 'year'
//312)we can rename (alias) 'year' with import
import { getDate, year as currentYear } from "./utils/date.js";
// 3a1)import { getDate, year } from "./utils/date.js";

//3b)import default export
import getDateDefaultExport from "./utils/date.js";
//*don't have to use {} with default export
//since this one thing is imported
//*can name it as we like =>
//getDateDefaultExportNow without 'as'

//conflicting variable
const year = 2021;

//------------------------
//2)create class App:
//App is responsible for only rendering HTML
class App {
  constructor() {
    //method 'render' to render App
    this.render();
  }
  //"React :-)"
  render() {
    document.getElementById("root").innerHTML = `
      <div>Date: ${getDate()}</div>
      <div>Year: ${currentYear}</div>
      <hr />
      <div>Year: ${getDateDefaultExport()}</div>
    `;
  }
}
console.log(this);

//Modules automaticly put in strict mode.
console.log(this); // undefined

new App();

// Challenge:
// Often in development you can reuse someone else's code.
// In this challenge we have a fake function that imitates getting user's
// data from an API and return you some details.
// Use modules to import getUser function and display the data on screen.

// Don't forget to call new App() in the end.

// Challenge stub code:
// import { getUser } from "./utils/date.js";

// class Main {
//   constructor() {
//     this.render();
//   }

//   render() {
//     const user = getUser();
//     console.log(user);
//     document.getElementById("root").innerHTML = `
//       <div>${user.name} works for ${user.company}</div>
//     `;
//   }
// }

// new Main();
