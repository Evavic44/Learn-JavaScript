## Looping Arrays, Breaking and Continuing

One of the most used applications of `for()` loops is looping through arrays.

For example, let's say we want to loop through the array below and individually log every element of the array to the console.

```js
const eke = [
  "Victor",
  "Eke",
  2022 - 1997,
  "Programmer",
  ["Spiff", "Nick", "Jay"],
];
```

> **Note**
> In loops, the traditional name for counters is `i`

As usual, we'll start the counter from `0`, and that is because arrays are zero-based when it comes to reading the elements.

Next, we'll write our condition and finally increase the counter by `1`.

Inside the loop, we'll write the code we want to be executed. Remember all we want to log is each element of the array. We can do that by simply doing this:

```js
console.log(eke[0])
console.log(eke[1])
console.log(eke[2])
...
console.log(4)
```

But instead of hard-coding the zero, we will use the counter varaible.

For the condition, we want to run the loop when `i` is `0, 1, 2, 3, 4,`. Here `4` is the last element since arrays are counted from `0`. So at `5` the loop will no longer run.

```js
// console.log(eke[5]) does not exist.
```

So the condition will be

```js
// Run the loop if the position is 0 or less than 5
i < 5;
```

```js
for (let i = 0; i < 5; i++) {
  console.log(eke[i]);
}
```

Doing this will work, however, when we update the array by adding or removing an element, the counter does not get updated automatically.

So to fix that, we'll use the array method `.lenght()` to dynamically check any changes made to the array.

```js
for (let i = 0; i < eke.length; i++) {
  console.log(eke[i]);
}
```

And that's how you read values of an array using the `for()` loop. We can also create a new array based on the value of the previous array.

```js
const types = [];

for (let i = 0; i < eke.length; i++) {
  // Reading from eke array
  console.log(eke[i], typeof eke[i]);

  // Filling the types array
  types[i] = typeof eke[i];

  // Can also use the push menthod to add the elements at the end of the array.
  types.push(typeof eke[i]);
}

console.log(types);
```

> **Important**
> When pushing elements to an array, make sure you add it to the end of the array using `push()` and not the beginning using `unshift()`.

### In Summary

- The loop starts with the counter being 0
- The condition specifies the current index always needs to stay below the lenght of the array that we're looping through.
- In the loop itself, we always get the current element using the current counter. `(0 to the lenght of the array)`

A more practical example is to calculate the age from an array of birth years.

```js
const years = [1997, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);
```

> **Note**
> Repeating the counter name(i) does not affect the previous counter.

### Continue and Break Statements

The continue statement is used to exit the current iteration of the loop and move to the next one.

Break is used to completely terminate the whole loop.

### Example Continue

Let's say for instance we want to print only elements from the loop that are strings, we can use the continute statement for that.

Here we created an if condition to check if the `typeof` of the element is not a string, then we want to continue. So this means the current iteration of the loop is exited and the next one starts immediately.

```js
// ONLY STRINGS
for (let i = 0; i < eke.length; i++) {
  if (typeof eke[i] !== "string") continue;

  console.log(eke[i], typeof eke[i]);
}
```

So this will skip any element in the array that is not a string, and then `continue` till the end of the iteration.

### Example - Break

We can use the break statement if we want to end the iteration after a condition is true.

```js
// BREAK WITH NUMBER
for (let i = 0; i < eke.length; i++) {
  if (typeof eke[i] === "number") break;

  console.log(eke[i], typeof eke[i]);
}
```

In this example, as soon as the number is found, the loop breaks(stop).
