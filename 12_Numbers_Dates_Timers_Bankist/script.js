'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

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

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount = account1;
// FAKED LOGIN
updateUI(currentAccount);
containerApp.style.opacity = 100;

const today = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'long',
};

const locale = navigator.language;
console.log(locale);

const day = `${today.getDate()}`.padStart(2, 0);
const month = `${today.getMonth() + 1}`.padStart(2, 0);
const year = today.getFullYear();
const hours = `${today.getHours()}`.padStart(2, 0);
const minutes = `${today.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(today);

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

  const amount = Number(inputLoanAmount.value);

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
/////////////////////////////////////////////////
// LECTURES

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

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (
//     row,
//     index
//   ) {
//     // 0, 2, 4, 6, ...
//     if (index % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0, 3, 6, 9, ...
//     if (index % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

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

// 🔸Creating Dates🔸
const now = new Date(); // date constructor
console.log(now);

// get specific date
console.log(new Date('Apr 13 2023 03:46:30'));
console.log(new Date('December 25 2022 00:00:00'));
console.log(new Date('July 21 1997'));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 11, 19, 15, 23, 5)); // month is zero-based so 0 = January & 11 = December
console.log(new Date(2037, '01', 33, 15, 23, 5));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(1997, 7, 21, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // timestamp
console.log(new Date(872173385000)); // get date based off timestamps

// current date
console.log(Date.now());

// date set() methods
// future.setFullYear(2099);
console.log(future);
console.log(Number(future)); // convert date to timestamp(How many miliseconds that have passed since the invention of Unix time)
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (24 * 60 * 60 * 1000));
const days1 = calcDaysPassed(new Date(2022, 3, 14), new Date(2022, 3, 24));
console.log(days1);

const option = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false,
};

const numbs = 2323253;
console.log('US:', new Intl.NumberFormat('en-US', option).format(numbs));
console.log('Germany:', new Intl.NumberFormat('de-DE', option).format(numbs));
console.log('Syria:', new Intl.NumberFormat('ar-SY', option).format(numbs));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(numbs)
);

// 🔸Timers setTimeout and setInterval🔸
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} & ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
