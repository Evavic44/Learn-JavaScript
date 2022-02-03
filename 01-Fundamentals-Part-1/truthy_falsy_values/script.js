console.log(Boolean(0)); // With a number = false
console.log(Boolean(undefined)); // With undefined  = false
console.log(Boolean("Eke")); // With a string = true
console.log(Boolean({})); // With an empty object = true
console.log(Boolean("")); // With an empty string = false

// Type coercion in if/else condition
const money = 0;
if (money) {
  console.log("Don't have any money 💵");
} else {
  console.log("You should get a job! 👷🏾");
}

// If a variable is defined or not
let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
