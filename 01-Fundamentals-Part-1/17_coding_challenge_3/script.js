/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The team with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 🙂

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy,

TEST DATA
Dolphins score 96, 108, 89.
Koalas score 88, 91, 110

TEST DATA BONUS 1:
Dolphins score 97, 112 and 101.
Koalas score 109, 95, 123

TEST DATA BONUS 2:
Dolphins score 97, 112 and 101.
Koalas score 109, 95, and 106

GOOD LUCK 🙂
*/

// =============== MY SOLUTION ========================
// =============== MY SOLUTION ========================

// Solution One 😁✅ // Got this right
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

console.log(dolphins, koalas);

if (dolphins > koalas) {
  console.log("Dolphins won the competition! 🐬");
} else if (dolphins < koalas) {
  console.log("Koalas won the competition! 🐨");
} else if (dolphins === koalas) {
  console.log("The match is a draw! 🤝🏽");
} else {
  console.log("Nobody Won!");
}

// Bonus 1 😭❌ // Got this wrong
const dolphinsOne = (97 + 112 + 101) / 3;
const koalasOne = (109 + 95 + 123) / 3;
const hasMinimumScore = 100;

console.log(dolphinsOne, koalasOne);

if (dolphinsOne > koalasOne && hasMinimumScore) {
  console.log("Dolphins won the competition! 🐬");
} else if (dolphinsOne < koalasOne && hasMinimumScore) {
  console.log("Koalas won the competition! 🐨");
} else if (dolphinsOne === koalasOne) {
  console.log("The match is a draw! 🤝🏽");
} else {
  console.log("Nobody Won!");
}

// Bonus 2 😭❌ // Got this wrong
const dolphinsTwo = (97 + 112 + 101) / 3;
const koalasTwo = (109 + 95 + 106) / 3;
const score = 100;

if (dolphinsTwo === koalasTwo) {
  console.log("Game is a draw", dolphinsTwo, koalasTwo);
} else if (dolphinsTwo >= score) {
  console.log("Dolphins Won!");
} else if (koalasTwo >= score) {
  console.log("Koalas Won!");
}

// =============== JONAS'S SOLUTION ========================
// =============== JONAS'S SOLUTION ========================

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
