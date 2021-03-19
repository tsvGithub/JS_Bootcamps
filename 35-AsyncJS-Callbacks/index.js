//So far, we have used synchronous JavaScript,
//which is where every line of code works in
//the order we expect.
//When certain operations take an unknown amount
//of time, this is known as asynchronous (async).
//=====================
//Async:
// setTimeout()
// addEventListener() etc.

//Async code can create some problems:
// Any code which needs to run after a function
//must exist inside its callback:
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  //GeolocationPosition { coords: GeolocationCoordinates, timestamp: 1615560148205 }
  console.log("done");
});
//Async operations which need to be performed after
//another async operation must be placed within the
//original callback. The rest of the programme then
//has to be placed within the final callback. This is
//known as Callback Hell:
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  //
  getRestaurants(position, (restaurants) => {
    console.log(restaurants);
    console.log("done");
  });
});
//Inversion of Control:
//When there are multiple callback-based functions,
//these functions are dependent on each other to resolve
//successfully, therefore the developer doesn't have
//control of the program - the callbacks do!
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  //
  getRestaurants(position, (restaurants) => {
    console.log(restaurants);
    console.log("done");
  });
});
