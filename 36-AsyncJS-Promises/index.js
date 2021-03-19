// callbacks -> promises

// States of a promise:
// pending -> resolve
// fulfilled <- if resolved
// rejected <-if rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000);
  // setTimeout(() => reject(Error("Promise failed.")), 1000);
});
//for 'resolve':
// console.log(promise); //resolve =>
//Promise { <state>: "fulfilled", <value>: "done" }
//for 'reject':
// console.log(promise); //reject =>
//Promise { "pending" } ​<state>: "rejected" ​<reason>: Error: Promise failed.

//When resolve is called, the code executes the
//function passed to the then() method.
//When reject is called it executes the
//function passed to the catch() method.
//finally() is used to run code after a promise
//runs, successfully or not.

promise
  //resolved
  .then((value) => console.log(value))
  //rejected
  .catch((error) => console.error(error))
  //in both cases
  .finally(() => console.log("done"));

//Promises allow us to write async code more
//easily and logically than with call-back-based code:
const promise1 = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position);
    },
    (error) => {
      reject(error);
    }
  );
});

promise1
  .then((position) => console.log(position))
  .catch((error) => console.error(error))
  .finally(() => console.log("done"));
