// A reducer is a function that takes
//two arguments => the current state
//and an action.
//The reducer then changes state in
//response to the action and returns
//a new state.

// const reducer = (state, action) => newState;

// Reducers conditionally update state
//with a switch statement based on the action
// type.
// function counterReducer(count, action) {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return count + 1;
// 		case "DECREMENT":
// 			return count - 1;
// 		default:
// 			return count;
// 	}
// }

// reducers - helps manage app state
// (state, action) => newState;

function counterReducer(count, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: count + 1 };
    // return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}
console.log(counterReducer(0, { type: "INCREMENT" }));
//1
console.log(counterReducer(1, { type: "DECREMENT" }));
// 0

//========================
//State Object
const initialUser = {
  name: "Mark",
  email: "mark@gmail.com",
};
console.log(initialUser.email);
//mark@gmail.com

//reducer with action.payload:
function userReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
}
//update user's email
const user = userReducer(
  //initial state:
  initialUser,
  //payload:
  {
    type: "CHANGE_EMAIL",
    payload: { email: "mark@compuserve.com" },
  }
);

console.log(user.email);
//mark@compuserve.com
