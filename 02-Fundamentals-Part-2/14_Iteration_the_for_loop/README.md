### Iteration: The for Loop

We talked about `if/else` statements in previous lectures about how they are control structures, but there are other control structures. Another control structure we have are `loops`

### What are loops

Loops are a fundamental aspect of every programming language that allows us to automate repetitive tasks; Tasks we have to perform over and over again.

### Example

Let's say we are trying to represent a repeated weight lifting exercise. This is how we will do it. In other to repeat this process, we have to but this violates the "don't repeat yourself(DRY)" principle because we're repeating the code 10 times and we're only changing the numbers.

```js
console.log("Lifting weights repetition 1 🏋🏽");
console.log("Lifting weights repetition 2 🏋🏽");
console.log("Lifting weights repetition 3 🏋🏽");
console.log("Lifting weights repetition 4 🏋🏽");
console.log("Lifting weights repetition 5 🏋🏽");
console.log("Lifting weights repetition 6 🏋🏽");
console.log("Lifting weights repetition 7 🏋🏽");
console.log("Lifting weights repetition 8 🏋🏽");
console.log("Lifting weights repetition 9 🏋🏽");
console.log("Lifting weights repetition 10 🏋🏽");
```

So instead of doing the above, we can now create a `loop` and put only one of the line of code there and the loop will run the code over and over again until we tell it to stop.

### For Loop

So we'll use the `for` loop, which has a counter for this. Just like a function, we'll use `for()` keyword with an open parenthesis.

The loop statement has 3 parts, namely:

1. The initial value of a counter `in our example(1 - 10)`
2. The logical condition that is evaluated before each iteration of the loop(each time before the loop is executed). For example: if this condition `rep <= 10` is true, then the next loop iteration will run.

What this means is that rep is equal to the number of values in the array. So if we have 10 values, `rep = 9`, so `rep <= 10` is also `9 <= 10`

> **Note** > `rep` here is short for repition so you can name your varaible whatever you want.

But as soon as this condition is false, then the loop stops. (normal code will be executed). In summary,

> The loop will keep running while the condition is true.

3. And the final part is used to increase the counter for each iteration. To do this, we increase rep with 1 for each iteration. Example: `rep + 1`. But there's an operator we can use to write this in a shorter way, `rep++`

```js
for (let rep = 1; rep <= 10; rep++);
```

And the final part we need to do is write the code that needs to be repeated.

```js
for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition 1 🏋🏽");
}
```
