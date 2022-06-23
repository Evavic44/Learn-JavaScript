// Solution
let tip;
const calcTip = function (bill) {
  bill >= 50 && bill <= 300
    ? (tip = (15 / 100) * bill)
    : (tip = (20 / 100) * bill);

  return tip;
};

// 1
const testTip = calcTip(100);
console.log(testTip);

// 2
const bills = [125, 555, 44];
console.log(bills);

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// 4
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];
console.log(total);
