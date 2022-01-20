// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
======================================================
================== MY SOLUTION 🤩 ====================
=======================================================
*/

// ------------------- TEST DATA 1 ----------------------

// Mark's Data
// const markMass = 78;
// const markHeight = 1.69;

// // John's Data
// const johnMass = 92;
// const johnHeight = 1.95;

// // Mark's BMI
// console.log(markMass / markHeight ** 2); // Mark BMI = 27.309968138370508

// // John's BMI
// console.log(johnMass / (johnHeight * johnHeight)); // John BMI = 24.194608809993426

// // markHigherBMI
// const johnBMI = 24.194608809993426;
// const markBMI = 27.309968138370508;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// ------------------- TEST DATA 2 ----------------------
// Mark's Data
const markMass = 95;
const markHeight = 1.88;

// John's Data
const johnMass = 85;
const johnHeight = 1.76;

// Mark's BMI
console.log(markMass / markHeight ** 2); // Mark BMI = 26.87867813490267

// John's BMI
console.log(johnMass / johnHeight ** 2); // John BMI = 27.44059917355372

// markHigherBMI
const markBMI = 26.87867813490267;
const johnBMI = 27.44059917355372;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/*
======================================================
================== JONAS's SOLUTION 🤩 ====================
=======================================================
*/

// // TEST 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMIs = BMImark > BMIjohn;
// console.log(BMImark, BMIjohn, markHigherBMIs);

// // TEST 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMImark > BMIjohn;
// console.log(BMImark, BMIjohn, markHigherBMI);
