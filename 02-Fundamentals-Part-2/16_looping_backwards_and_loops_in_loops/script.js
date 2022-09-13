//? Looping backwards
//* Normal loop: 0, 1, ..., 4
//* Backwards loop: 4, 3, ..., 1

const eke = [
  "Victor",
  "Eke",
  2022 - 1997,
  "Teacher",
  ["Spiff", "Nick", "Zod"],
  true,
];

// Instead of hard-coding the counter(4), we use the .length method to get the total number of items in the array.

// Length: eke.lenght - 1;

// The condition: The loop should keep running if the counter is greater than or equal to 0(i >= 0);

// Counter Update: Since we're looping backwards, we'll decrease the value of the counter: i--
for (let i = eke.length - 1; i >= 0; i--) {
  console.log(i, eke[i]);
}

//? Loops inside of loops
// A loop that runs three times from 1 - 3 and then another loop for each individual loop to run each 5 times to give a total of 15 loops, 5 for each.
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Repition ${rep} 🏃🏽`);
  }
}
