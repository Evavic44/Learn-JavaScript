/**
 Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀 
 **/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // 2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5.
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // or
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6.
// function printGoals(...players) {
//   console.log(...players, `${players.length} goals scored ⚽`);
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // 7.
// console.log(
//   team1 < team2 && "Team 1 is more likely to win",
//   team1 > team2 && "Team 2 is more likely to win"
// );

// ----------------------------------------
// Coding Challenge #2
// ----------------------------------------

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

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
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
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

// 1.
console.log("----- 🔸Challenge 1🔸 -------");
for (const [goal, playerName] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(goal) + 1}: ${playerName}`);
}
// Jonas Solution
// for (const [i, playerName] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${playerName}`);
// }

// 2.
console.log("----- 🔸Challenge 2🔸 -------");
let sum = 0;
for (const odds of Object.values(game.odds)) {
  sum += odds;
}
const average = sum / Object.values(game.odds).length;
console.log(average);

// Jonas Solution
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds average += odds;
// average /= odds.length;
// console.log(average);

// 3.
console.log("----- 🔸Challenge 3🔸 -------");
console.log(
  `Odd of victory ${game.team1}: ${game.odds.team1} 🟢
Odd of draw: ${game.odds.x} 🟡
Odd of victory ${game.team2}: ${game.odds.team2} 🔴
  `
);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// ----------------------------------------
// Coding Challenge #3
// ----------------------------------------

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game, The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates).
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average every 9 minutes" (keep in mind that a game has 90 minutes).
4. Loop over the events and log them to the console, marking wether it's in the first half or second half. (after 45min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🟨 Yellow card"],
]);

// 1.
const x = new Set(gameEvents.values());
const events = [...x];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [minutes, event] of gameEvents) {
  console.log(
    minutes <= 45
      ? `[FIRST HALF] ${minutes}: ${event}`
      : `[SECOND HALF] ${minutes}: ${event}`
  );
}

("use strict");

/*
---- Challenge ----
Given a string of parenthesis, return the number of parenthesis you need to add to the string in order for it to be balanced

stringBalanced('()') => 0
stringBalanced('(()') => 1
stringBalanced('))()))))()') => 6
stringBalanced(')))))') => 5
*/

const stringBalanced = function (par) {
  let leftPar = par.split(")").length;
  let rightPar = par.split("(").length;

  if (leftPar === rightPar) {
    return leftPar - rightPar;
  } else if (leftPar > rightPar) {
    return leftPar - rightPar;
  } else {
    return rightPar - leftPar;
  }
};

console.log(stringBalanced("()"));
console.log(stringBalanced("(()"));
console.log(stringBalanced("))()))))()"));
console.log(stringBalanced(")))))"));

// ----------------------------------------
// Coding Challenge #4
// ----------------------------------------

/* 
  Write a program that receives a list of variable names written in underscore_case and covert them to camelCase.

  The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

  THIS TEST DATA (pasted to textarea)
  underscore_case
  first_name
    Some_Variable
   calculate_AGE
  delayed_depature

  Desired OUTPUT (5 seperate console.log() outputs)
  * underscoreCase  ✅
  * firstName       ✅✅
  * someVariable    ✅✅✅
  * calculateAge    ✅✅✅✅
  * delayedDepature ✅✅✅✅✅
  
  HINT 1: Remember which character defines a new line in the textarea 🙂 
  HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
  HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working. 🙂
  HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!  
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.textContent = "Submit";

btn.addEventListener("click", function convertCase() {
  let text = document.querySelector("textarea");
  const rows = text.value.split("\n");

  for (const [i, individualEl] of rows.entries()) {
    const [first, second] = individualEl.toLowerCase().trim().split("_");
    const result = first + second[0].toUpperCase() + second.slice(1);
    console.log(`${result.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

// ----------------------------------------
// String Methods Exerceise
// ----------------------------------------

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type
    .replaceAll("_", " ")
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50);
  console.log(output);
}
