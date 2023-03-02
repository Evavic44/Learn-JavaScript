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
