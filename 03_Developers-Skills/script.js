"use strict";

//? PROBLEM 1
// We work for a company building a smart home themometer. Our most recent task is this.
// Given an array of tempratures of one day, calculate the temprature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//? 1. Understanding the problem
// —What is temp amplitude? Answer: The difference between the highest and lowest temprature.

// —How to compute max and min temperature?
// What's a sensor error? And what do you do?

//? 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//? PROBLEM 2
// Function should now receive 2 arrays of tempertatures.

//? 1. Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// No just merge two arrays.

//? 2. Breaking up into sub-problems
// -Merge 2 arrays?

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

//! Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    // C. FIX
    // value: Number(prompt("Degrees Celsius:")),
    value: 10,
  };

  // B. FIND
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A. IDENTIFY
console.log(measureKelvin());
