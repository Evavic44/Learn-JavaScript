const age = 18;
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");

// Strict equality operator
console.log(18 === 18); // True because 18 is the same as 18
console.log("18" === 18); // False because "18" the string is not the same as 18 the number in a strict equality operator
console.log(18 === 19); // False because 18 is not the same as 19

// Loose equality operator
console.log(18 == 18); // True
console.log("18" == 18); // True because "18" the string is the same as 18 the number in a loose equality operator

// How to get a number from a webpage using prompt
// prompt("What is your favourite Number? 🔢");

// Store the value inputed.
// Manually convert the strings to number
const favNumber = Number(prompt("What is your favourite Number❓")); // Prompts the question

console.log(favNumber); // Stores the inputed value
console.log(typeof favNumber); // Log to the conole.

// else if conditions
if (favNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favNumber === 7) {
  console.log("7 is also a cool Number!");
} else if (favNumber === 100) {
  console.log("100 is also a cool Number!");
} else {
  console.log("Number is not 23 or 7 or 100");
}

// Different operator

if (favNumber !== 23) console.log("Why not 23?");
