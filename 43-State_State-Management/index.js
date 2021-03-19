// State is the data that is managed
//by our application and should be our
//single source of truth. This means that
//if we want to find out the current status
//of our app, we look to where we store our state.
// State is often managed using objects.

// state is data to be managed in app
// state -> status

//Class without State
// class Main {
//   constructor() {
//     this.render();
//     this.$userMessage = document.getElementById("user-message");
//     this.checkAuth();
//   }

//   checkAuth() {
//    const user = true;
//     if (user) {
//       this.$userMessage.textContent = "Welcome back!";
//     } else {
//       this.$userMessage.textContent = "You must sign in!";
//       this.$userMessage.style.color = "red";
//     }
//   }

//   render() {
//     document.getElementById("root").innerHTML = `
//       <div>
//         <span id="user-message"></span>
//       </div>
//     `;
//   }
// }

// new Main();

//=====================
//class with State
class App {
  constructor() {
    this.state = {
      isAuth: false,
      error: "",
    };

    this.checkAuth();
    this.render();
  }

  checkAuth() {
    const user = false;
    if (user) {
      //shallow clone of this.state & update only isAuth
      //update old state with a new one:
      this.state = { ...this.state, isAuth: true };
    } else {
      this.state = { ...this.state, error: "You must sign in!" };
    }
  }

  render() {
    //get state
    const { isAuth, error } = this.state;

    document.getElementById("root").innerHTML = `
    <div style="color: ${error && "red"}">
        ${isAuth ? "Welcome back!" : error}
      </div>
    `;
    {
      /*If 'error'=true, return 'red'. Otherwise nothing will happen.
This code only runs when error is not an empty string(''=false). 

 */
    }
  }
}

new App();
