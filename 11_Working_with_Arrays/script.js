'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE
console.log('🔸 SLICE 🔸');
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // Last two elements ['d', 'e']
console.log(arr.slice(-1)); // Last element of the array ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

console.log('🔸 SPLICE 🔸');
// SPLICE
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // leftover elements after splice ['a', 'b']
// console.log(arr.splice(1, 2)); // ['b', 'c']
// console.log(arr.splice(-1)); // returns last ['a', 'b' 'c', 'd']
// console.log(arr); // returns mutated array without last element ['a', 'b', 'c' 'd']

arr.splice(1, 2);
console.log(arr); // ['b', 'c'] extract 2 elements starting from position [1].

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT
const joinedArr = arr.concat(arr2);
console.log(joinedArr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// JOIN
console.log(joinedArr.join(' - '));

// 🔸 Looping Arrays forEach 🔸
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping using for of loop
for (const transactions of movements) {
  transactions < 1
    ? console.log(`You withdrew ${Math.abs(transactions)}`)
    : console.log(`You deposited ${transactions}`);
}

// Used the `Math.abs` method to provide only the absolute value and remove any commas.

// Looping using forEach
console.log('🔸 forEach 🔸');
movements.forEach(function (transactions) {
  transactions < 1
    ? console.log(`You withdrew ${Math.abs(transactions)}`)
    : console.log(`You deposited ${transactions}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Accessing Index in for of loop
console.log('🔸 Accessing index in for of loop 🔸');
for (const [i, transact] of movements.entries()) {
  transact < 1
    ? console.log(`Transaction ${i}: You withdrew ${Math.abs(transact)}`)
    : console.log(`Transaction ${i}: You deposited ${transact}`);
}

// Accessing Index in forEach method
console.log('🔸 Accessing index in forEach 🔸');
movements.forEach(function (transaction, i, array) {
  transaction < 1
    ? console.log(
        `Transaction ${i}: You withdrew ${Math.abs(transaction)}`,
        array
      )
    : console.log(`Transaction ${i}: You deposited ${transaction}`, array);
});
