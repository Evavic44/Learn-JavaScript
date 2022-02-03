// Type conversion and coercion
const inputYear = "1991";

console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log("number" - inputYear + 22); // Nan
console.log(Number(inputYear) + 18); //
console.log(Number("Eke")); // Nan
console.log(typeof NaN); // Number
console.log(String(23), 23);

console.log("I am " + 13 + " years old"); // "I am 13 years old"
console.log("I am " - 13 - " years old"); // NaN
console.log("2" + 2 + "2" + 2); // 2222
console.log("23" + "10" + 3); // "23103"
console.log("23" - "10" - 3); // 10
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // True

// Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // "95"
console.log("10" - "4" - "3" - 2 + "5"); // "15"

console.log("I am " + Number(23) + " years old");
