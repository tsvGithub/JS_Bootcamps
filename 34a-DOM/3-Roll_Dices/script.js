"use strict";

// Selecting elements
//players:
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
//total scores for each player:
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
//current scores for each player:
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
//dice:
const diceEl = document.querySelector(".dice");
//New game
const btnNew = document.querySelector(".btn--new");
//Roll dice
const btnRoll = document.querySelector(".btn--roll");
//Hold => change player
const btnHold = document.querySelector(".btn--hold");

//define variables
let //array of total scores for both players
  scores,
  //current score for active player
  currentScore,
  //first or second === 0 or 1;
  activePlayer,
  //true or false
  playing;

// Starting conditions
const init = function () {
  //initial values of variables for starting new game:
  //array of total scores for both players:
  //first 0 is score for player0;
  //second 0 is for player1;
  scores = [0, 0];
  //current score for active player
  currentScore = 0;
  //first player
  activePlayer = 0;
  playing = true;

  //set initial value of elements:
  //we define number but JS converts it to string to display on the page
  //total scores:
  score0El.textContent = 0;
  score1El.textContent = 0;
  //current scores:
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //hide dice for beginning of the game
  diceEl.classList.add("hidden");
  //
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  //
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

//==============================
// 2) Next Player:
const switchPlayer = function () {
  //set current-score HTML element for active player to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //set current score value for active player back to 0
  currentScore = 0;
  //change active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  //toggle css styles for active player
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//==========================
// 1) Rolling dice:
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    //'dice' is a local var as its value needs only for this function
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. Display dice: make dice visible
    diceEl.classList.remove("hidden");
    //display img according to 'dice' value
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled '1'
    if (dice !== 1) {
      // Add 'dice' value to current score
      currentScore += dice;
      //set current-score element for active player
      //to 'currentScore' value:
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
//===========================
//change player
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
