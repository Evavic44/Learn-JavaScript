'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Victor Eke',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
const loginForm = document.querySelector('.login');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    loginForm.style.display = 'none';

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    loginForm.style.opacity = 1;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////

// // SLICE
// console.log('🔸 SLICE 🔸');
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); // Last two elements ['d', 'e']
// console.log(arr.slice(-1)); // Last element of the array ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// console.log('🔸 SPLICE 🔸');
// // SPLICE
// // console.log(arr.splice(2)); // ['c', 'd', 'e']
// // console.log(arr); // leftover elements after splice ['a', 'b']
// // console.log(arr.splice(1, 2)); // ['b', 'c']
// // console.log(arr.splice(-1)); // returns last ['a', 'b' 'c', 'd']
// // console.log(arr); // returns mutated array without last element ['a', 'b', 'c' 'd']

// arr.splice(1, 2);
// console.log(arr); // ['b', 'c'] extract 2 elements starting from position [1].

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// // CONCAT
// const joinedArr = arr.concat(arr2);
// console.log(joinedArr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// // JOIN
// console.log(joinedArr.join(' - '));

// // 🔸 Looping Arrays forEach 🔸
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Looping using for of loop
// for (const transactions of movements) {
//   transactions < 1
//     ? console.log(`You withdrew ${Math.abs(transactions)}`)
//     : console.log(`You deposited ${transactions}`);
// }

// // Used the `Math.abs` method to provide only the absolute value and remove any commas.

// // Looping using forEach
// console.log('🔸 forEach 🔸');
// movements.forEach(function (transactions) {
//   transactions < 1
//     ? console.log(`You withdrew ${Math.abs(transactions)}`)
//     : console.log(`You deposited ${transactions}`);
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// // Accessing Index in for of loop
// console.log('🔸 Accessing index in for of loop 🔸');
// for (const [i, transact] of movements.entries()) {
//   transact < 1
//     ? console.log(`Transaction ${i}: You withdrew ${Math.abs(transact)}`)
//     : console.log(`Transaction ${i}: You deposited ${transact}`);
// }

// // Accessing Index in forEach method
// console.log('🔸 Accessing index in forEach 🔸');
// movements.forEach(function (transaction, i, array) {
//   transaction < 1
//     ? console.log(
//         `Transaction ${i}: You withdrew ${Math.abs(transaction)}`,
//         array
//       )
//     : console.log(`Transaction ${i}: You deposited ${transaction}`, array);
// });

const num = movements.find(mov => mov > 3000);
console.log(movements);
console.log(num);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
console.log(account.owner);

for (const val of accounts) {
  if (val.owner === 'Jessica Davis') {
    console.log(val);
  }
}

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
});

// Strings
const names = ['John', 'Zach', 'Adam', 'Martha'];
console.log(names.sort());

console.log(movements);

// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => a - b);
movements.sort((a, b) => b - a);
console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3);
x.fill(1);
arr.fill(23, 0, 6);
console.log(arr);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_curr, i) => i + 1);
console.log(z);

const randomDiceRoll = Array.from({ length: 100 }, (curr, i) => {
  return Math.floor(Math.random(i) * 100 + 1);
});
console.log(randomDiceRoll);

// Array method practice
// Exercise 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2. Get values at least 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// 2. Get values at least 1000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((acc, i) => (i >= 1000 ? acc + 1 : acc), 0);
  .reduce((acc, currEl) => (currEl >= 1000 ? acc + 1 : acc), 0);
console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a++);

// 3.
const { depo, withd } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, currEl) => {
      // currEl > 0 ? (acc.deposits += currEl) : (acc.withdrawals += currEl);
      acc[currEl > 0 ? 'deposits' : 'withdrawals'] += currEl;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(depo, withd);

// 4.
// this is a nice title > This is a Nice Title.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'is',
    'of',
    'at',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
console.log(convertTitleCase('nothing TO sEE hErE ON sundaY wiTH ME'));

// 🔸Converting and Checking Numbers🔸
console.log(23 === 23.0);

// Base 10 = 0 to 9. (1/10 = 0.1), (3/10 = 0.333333∞)
// Base 2 = 0, 1

// Convert strings to numbers
console.log(0.1 + 0.2 === 0.3);
console.log(+'22');
console.log('22' - 0);

// Parsing Integer => Numbers without decimals
console.log(Number.parseInt('50px', 10));
console.log(Number.parseInt('ae34', 10)); // won't work, value must start with a number

// Parsing Float => Numbers with decimals
console.log(Number.parseInt('2.5rem')); // Will only return first number
console.log(Number.parseFloat('2.5rem'));

// Are also global functions: Though not recommended
console.log(parseFloat('22rem'));

// isNan: Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0)); // infinity so won't work

// Checking if value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite(+'23px'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// 🔸Math and rounding🔸
console.log(Math.sqrt(25)); // square root
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // cubic root

// min and max numbers
console.log(Math.max(5, 20, 93, 2, 18)); // Get maximum value
console.log(Math.max(5, 20, '93', 2, 18)); // Also does type coercion
console.log(Math.max(5, 20, '93ss', 2, 18)); // Does not do parsing

console.log(Math.min(5, 20, '93', 2, 18));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// random numbers
console.log(Math.trunc(Math.random() * 6 + 1));
// random numbers from a range of two integers
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);
// console.log(randomInt(10, 20));

// rounding integers
console.log(Math.trunc(16.5)); // return number without decimals
console.log(Math.round(23.9)); // Round a number

console.log(Math.ceil(23.9)); // Round a number
console.log(Math.floor(-23.9)); // Truncate integers including decimals

// rounding decimals(floating point numbers)
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));

// 🔸Remainder Operator🔸
console.log(5 % 2);
console.log(5 / 2);

console.log(6 % 2);
console.log(6 % 3);

// checking if a number is even or odd
const checkEvenOdd = num =>
  num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
checkEvenOdd(22);
checkEvenOdd(16);
checkEvenOdd(3);

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (
    row,
    index
  ) {
    // 0, 2, 4, 6, ...
    if (index % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9, ...
    if (index % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// 🔸Working with BigInt🔸
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 2);

console.log(235972592735792702175273597235n); // the n keyword converts numbers >= 2^53 - 1 into BigInt
console.log(BigInt(235972592)); // this conversion only works with smaller BigInt numbers
console.log(BigInt(235972592));

// operations with bigint
console.log(10000 + 10000);
console.log(1000000000000000000000n * 45252332523n);

const huge = 57935737592739325723523n;
const number = 23;
// console.log(huge * number); // can't convert bigint to number
console.log(huge * BigInt(number));

// exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === '20');

console.log(huge + ' is Really big!');
console.log(11n / 3n);
console.log(12n / 3n);
