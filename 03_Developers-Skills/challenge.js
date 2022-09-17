"use strict";

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "...17°c in 1 days ...21°c in 2 days ...23°c in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

? TEST DATA 1: [17, 21, 23]
? TEST DATA 2: [12, 5, -5, 0, 4]
*/

/* 
1. Understand the problem
- What do you mean by maximum temperatures? 
All the temperatures in the array I guess.

- What happens if the thermometer forecasts a negative value? 
Go ahead and print it as required.

- Trailing dots before each value?
- Does each array value signify a day?

2. Divide and conquer
- Convert the numbers in the array to strings.
- Concatenate the numbers with the degree symbol and the unit of celsius.
- Loop through the values in the array and increase the day on each temperature by 1 day.
- Log the value to the console.

3. Write sudo code
Not required.
*/

let arr = [17, 21, 23];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${[i + 1]} days`);
  }
};

arr = [12, 5, -5, 0, 4];
printForecast(arr);

// JONAS Solution
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log("___JONAS SOLUTION___");
console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

const printForecastJonas = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForecastJonas(data1);
