// const eke = [
//   "Victor",
//   "Eke",
//   2022 - 1997,
//   "Programmer",
//   ["Spiff", "Nicholas", "Jay"],
//   true,
// ];

// const types = [];

// // console.log(eke[0])
// // console.log(eke[1])
// // // ...
// // console.log(eke[4])
// // eke[4] does not exisit

// for (let i = 0; i < eke.length; i++) {
//   // Reading from eke array
//   console.log(eke[i], typeof eke[i]);

//   // Filling types array
//   // types[i] = typeof eke[i];

// Can also use the push menthod to add the elements at the end of the array
//   types.push(typeof eke[i]);
// }
// console.log(types);

// const years = [1997, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// console.log("__ONLY STRINGS__");
// for (let i = 0; i < eke.length; i++) {
//   if (typeof eke[i] !== "string") continue;
//   console.log(eke[i], typeof eke[i]);
// }

// console.log("__BREAK WITH NUMBER__");
// for (let i = 0; i < eke.length; i++) {
//   if (typeof eke[i] === "number") break;
//   console.log(eke[i], typeof eke[i]);
// }

//

const eke = [
  "Victor",
  "Eke",
  2022 - 1997,
  "Programmer",
  ["Spiff", "Nick", "Jay"],
];

const types = [];

for (let i = 0; i < eke.length; i++) {
  console.log(eke[i]);

  types[i] = typeof eke[i];
  types.push(typeof eke[i]);
}

console.log(types);

// Example 2
const years = [1997, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// ONLY STRINGS
for (let i = 0; i < eke.length; i++) {
  if (typeof eke[i] !== "string") continue;

  console.log(eke[i], typeof eke[i]);
}

// BREAK WITH NUMBER
for (let i = 0; i < eke.length; i++) {
  if (eke[i] === 25) break;

  console.log(eke[i], typeof eke[i]);
}
