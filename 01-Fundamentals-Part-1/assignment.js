// Values & Variables
const country = "Nigeria";
const continent = "Africa";
let population = 206100000;

console.log(country, continent, population);

// Data Types
const isIsland = true;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// Let, Const, & Var
language = "English";

// Basic Operators
const halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

const finland = 6000000;
const isMore = population > finland;
console.log(isMore);

const isAverage = population < 33000000;
console.log(isAverage);

let description =
  "Nigeria is in \n Africa, and its 203 million \n people speak English";

console.log(description);

// Strings & Template Literals
description = `${country} is in 
${continent} and it's ${population} 
people speak ${language}`;

console.log(description);

// Taking Decision: If/Else Statements
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${population - 33000000} million below average`
  );
}

// Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Equality Operators == vs ===
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 borders");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 borders");
// } else {
//   console.log("No Borders");
// }

// Logical Operators
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country} 🙂`);
} else {
  console.log(`${country} does not meet your criteria 😔`);
}

// The Switch Statement
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("Second place in number of native speakers!");
    break;
  case "English":
    console.log("Third Place");
    break;
  case "Hindi":
    console.log("Number Four");
    break;
  case "Arabic":
    console.log("Fifth most spoken language");
    break;
  default:
    console.log("Great language too. :D");
}

// The Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
