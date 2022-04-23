// Template Literals

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
