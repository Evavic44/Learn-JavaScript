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
