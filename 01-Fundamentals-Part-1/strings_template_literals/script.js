// const firstName = "Eke";
// const job = "Software Engineer";
// const birthYear = 1997;
// const year = 2021;

// // ES5 string concatenation
// const eke =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(eke);

// // ES6 Template Strings
// const ekeNew = `I'm ${firstName}, a ${year - birthYear} old ${job}!`;
// console.log(ekeNew);

// // Using backticks in variable names
// console.log(`Just a regular string ol' nation`);

// // Create multi-lined string ES5
// console.log("String with \n multiple \n lines");

// // Create multi-lined string - Template literal ES6
// console.log(`String With
// multi
// lines`);

// Update
const firstName = "Victor";
const job = "Programmer";
const birthYear = 1997;
const year = 2022;

const eke =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(eke);

// Template literals
const ekeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ekeNew);

console.log(`This is Just a string...`);

// Multi lined strings (ES5)
console.log("String with \n\
multiple \n\
line");

// Multi lined template string (ES6)
console.log(`String with
multiple
lines`);
