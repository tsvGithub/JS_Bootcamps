// Object.assign() allows us to merge properties
//from two or more objects into a new object:
// Object.assign({}, user, newUser)

// However, this is not very intuitive or readable.
//A cleaner way of doing this is to use the spread
//operator (...):
//const createdUser = { ...user, ...newUser, verified: false };

const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true,
};

const newUser = {
  username: "MrsZhur",
  email: "zhur@gmail.com",
  password: "mypassword",
};

//OBJECT.ASSIGI()
//to merge user + newUser objects together:
//1. Object.assign lets update an object with
//properties from another object:
console.log(Object.assign(user, newUser));
//user =>object that returns; what to merge
//newUser => merge with
console.log(user);
console.log(newUser);
//NB!
//!!! Original user object is mutated!!!
//************************** */
//2.
//{} create&return new object & merge 'user' & 'newUser' into it
//and add object {verified: false}
console.log(Object.assign({}, user, newUser, { verified: false }));
console.log(user);
console.log(newUser);
//'user' is not mutated!!!

//SPREAD OPERATOR
//3.
//{...user} take all the properties from 'user' object
//{...user} take all the properties from 'newUser' object
//add UPDATE object {verified: false}
//and put it in a new one 'createdUser'
const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
