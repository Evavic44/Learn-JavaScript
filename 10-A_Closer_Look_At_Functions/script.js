"use strict";

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2); // "LH123" 2 * 199 = 398
createBooking("LH123", 5); // "LH123" 5 * 199 = 995
createBooking("LH123", undefined, 1000); // 1(default value), 1000

const flight = "LH234";
const eke = {
  name: "Victor Eke",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  // if (passenger.passport === 24739479284) {
  //   alert("Check in");
  // } else {
  //   alert("Wrong passport");
  // }
};

checkIn(flight, eke);
console.log(flight); // "LH234"
console.log(eke); // Mr Victor Eke

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(eke);
checkIn(flight, eke);

// 🔸 First Class Function vs Higher Order Functions 🔸
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// const greet = () => console.log("Hey Eke");
// btnClose.addEventListener("click", greet);

// Higher order function
function count() {
  let counter = 0;
  // Callback function
  return function () {
    counter++;
  };
}

// 🔸 Functions Accepting Callback Functions 🔸
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JavaScript uses callbacks all the time.
const high5 = function () {
  console.log("👋🏽");
};

["Victor", "Martha", "Adam"].forEach(high5);
document.body.addEventListener("click", high5);

// 🔸 Functions Returning Functions 🔸
const greet = function (greetMsg) {
  return function (name) {
    console.log(`${greetMsg} ${name}`);
  };
};
// Arrow function
const greetAr = (greetMsg) => (name) => console.log(`${greetMsg} ${name}`);

const gretterHey = greet("Hey");
gretterHey("Victor");
gretterHey("Ben");

greet("Hello")("Caleb");

// 🔸 The Call and Apply Method 🔸
