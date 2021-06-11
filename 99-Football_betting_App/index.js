"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// console.log(game);
// We're building a football betting app!
// Suppose we get data from a web service about a certain game.
// In this challenge we're gonna work with the data. So here are your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
//---destructuring game.players array
const [players1, players2] = game.players;
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper
//and the others are field players. For Bayern Munich (team 1) create one
//variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers')
//with all the remaining 10 field players
//---destructuring: one variable and REST
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
//---spread out players1&players2 to the allPlayers
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
//So create a new array ('players1Final') containing all the original team1
//players plus 'Thiago', 'Coutinho' and 'Perisic'
//---spread players1 & add 3 players:
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd
//(called 'team1', 'draw' and 'team2')
// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },
//This way:
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
//---or destructuring from object:
//nested destructuring from 'game' and 'odds':
const {
  odds: { team1, x: draw, team2 },
} = game;
//This creates 3 new const variables - team1, x and team2.
//The value of game.odds.team1 is assigned to team1 variable,
//the value of game.odds.x is assigned to the 'draw' variable,
//and the value of the game.odds.team2 variable is assigned to the team2 variable
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number
//of player names (NOT an array) and prints each of them to the console,
//along with the number of goals that were scored in total (number of player
//names passed in)
// TEST DATA FOR 6:
//Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
//Then, call the function again with players from game.scored
//------
// REST (...players) operator creates a new array
//containing all individual values from arguments
//(...game.scored).
const printGoal = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
//["Davies", "Muller", "Lewandowski", "Kimmich"]
printGoal(game.scored); //[Array(4)]
printGoal(...game.scored); //["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
//----------------------------------------------------------------
//Let's first define the differences between the
//rest and spread operators.
//Spread expands an array or other iterable into its
//separate values and passes each one of those values
//as an argument.
//Rest, meanwhile collects multiple arguments and
//collapses them into one element.

//In our case, for the 'printGoal'-function, we're using
//the REST operator to collect every argument into an
//array called 'players'.
//Let's look at how we're using the spread operator:

printGoal(game.scored); // Passing an array
//[Array(4)]
//1 goals were scored
//(...games.scored => spreads out the individual values)
printGoal(...game.scored); // Passing each value inside the array
//(4) ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]0: "Lewandowski"1: "Gnarby"2: "Lewandowski"3: "Hummels"length: 4__proto__: Array(0)
//4 goals were scored
//1)In the first case,  we're sending an entire
//array as an argument.
//Our rest operator will create a new array
//'...players' with that array inside,
//which in turn is storing the actual values from
//game.scored.

//2)In the second case, we use the SPREAD operator
//to separate our array (game.scored) into its
//individual values, and pass them each as an
//argument. Our REST (...players) operator then
//creates a new array containing all these values.
//============================
// 7. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win,
const winner = team1 < team2 ? game.team1 : game.team2;
console.log(winner);
//WITHOUT using an if/else statement or the ternary operator.
//If a<b is true => code after '&&' will execute
// OR || => the second part will execute
const winner1 = (team1 < team2 && game.team1) || (team1 < team2 && game.team2);
////'OR':
//Use for setting default values.
//1)is 'true' if one of the operators is 'truthy'
//2)returns FIRST 'truthy' value or the LAST value,
//if all operands all 'falsy'.
console.log(winner1);

const winner2 = (team1 < team2 && game.team1) || team2;
console.log(winner2);
// GOOD LUCK 😀
