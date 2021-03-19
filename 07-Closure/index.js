// A closure is an inner function that is inside
//its outer function’s scope and has access to its variables:
// ```js function handleLikePost(step) { let likeCount = 0; return function addLike() {
// likeCount += step;
// return likeCount;
// } ``

//1
let likesCount = 0;
function handleLikesPost() {
  likesCount += 1;
}
handleLikesPost();
likesCount = 0;
console.log("like count:", likesCount);
//!!NB it is better to have likesCount
//inside function => because it can be changed mistakenly
//:
function handleLikesPosts() {
  let likesCount = 0;
  likesCount += 1;
  console.log("like count:", likesCount);
}
handleLikesPosts();
//the problem is => the 'like count' is always 1!
//======================
//2 CLOSURE
// 1) Closures are a property of JS functions
// 2) Call function in different scope than where function was original defined

function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;
  };
}
const doubleLike = handleLikePost(2);
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

//===============================
//=============================
// Challenge: Write a countdown function with a hard-coded starting number inside closure

function countdown() {
  let countFromNum = 11;
  return function decrease() {
    countFromNum -= 1;
    return countFromNum;
  };
}
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  };
}
const countingDown = countdown(20, 5);
//-------------------------
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step
function countdown(startNum = 20, step = 0) {
  return function () {
    return `${(startNum -= 1)} ${(step += 1)}`;
  };
}

const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
