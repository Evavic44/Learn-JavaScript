## Coding Challenge

Let's improve Steven's tip calculator even more, this time using loops.

1. Create an array `bills` containing all 10 test bill values.
2. Create empty arrays for the tips and the totals (`tips` and `totals`)
3. Use the `calcTip` function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.
   Use a for loop to perform the 10 calculations!

```js
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
```

Hint: Call `calcTip` in the loop and use the push method to add values to the tips and totals arrays 🙃

4. BONUS: Write a function `calcAverage` which takes an array called `arr` as an argument. This function calculates the average of all numbers in the given array.

This is a DIFFICULT challenge (we haven't done this before)!

### Hint

4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop.

In each iteration, add the current value to the `sum` variable. This way, by the end of the loop, you have all values added together.

4.2 To calculate the average, divide the sum calculated before by the length of the array (because that's the number of elements).

4.3. Call the function with the `totals` array.

Good Luck 🙃
