const eke = [
  "Victor",
  "Eke",
  2022 - 1997,
  "Programmer",
  ["Spiff", "Nicholas", "Jay"],
  true,
];

const types = [];

// console.log(eke[0])
// console.log(eke[1])
// ...
// console.log(eke[4])
// eke[4] does not exisit

for (let i = 0; i < eke.length; i++) {
  // Reading from eke array
  console.log(eke[i], typeof eke[i]);

  // Filling types array
  // types[i] = typeof eke[i];

  // Can also use the push method to add the elements at the end of the array
  types.push(typeof eke[i]);
}
console.log(types);

// Calculate the age of the following birthYear using loops
const years = [1997, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // in each iteration, the calculation is done individually so: years[0], years[1] ... years[3] is same as years[i]
  ages.push(2022 - years[i]);
}
console.log(ages);

//? Continue and Break Statements
//* Continue
// The continue statement is used to exit the current iteration of the loop and move to the next one.

//* Break
// While the break statement is used to end an iteration after a condition is true.

console.log("🔸ONLY STRINGS🔸");
for (let i = 0; i < eke.length; i++) {
  // If the current element is not a string, skip over(continue) to the next line
  if (typeof eke[i] !== "string") continue;
  console.log(eke[i], typeof eke[i]);
}

console.log("🔸BREAK WITH NUMBER🔸");
for (let i = 0; i < eke.length; i++) {
  // Once a number is found in the iteration, end(break) the loop
  if (typeof eke[i] === "number") break;
  console.log(eke[i], typeof eke[i]);
}
