/* Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant, In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called "tip" for this. It's not allowed to use an if/else statement 😿 (If it's easier for you, you can start with an if/else statement and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: "The bill was 275, the tip was 41.25, and the total value 316.25"

TEST DATA: Test for bill values 275, 40, 430 */

// Sudo Code
// Tip 15% if bill === 50 && 300 (275)
// Tip 20% otherwise === 40 (430)

// If/else Example
const bill = 257;
const bill2 = 430;
let tip;

if (bill2 >= 50 && bill2 <= 300) {
  tip = (15 / 100) * bill2;
} else {
  tip = (20 / 100) * bill2;
}

console.log(tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// Conversion to Ternary Operator
const billValue =
  bill >= 50 && bill <= 300
    ? (tip = (15 / 100) * bill)
    : (tip = (20 / 100) * bill);

console.log(billValue);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
