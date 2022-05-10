## 20. Conditional (Ternary) Operator

We've already seen two ways of writing conditionals, the `if/else` statement and the `switch` statement. Now, we'll look at another one called the `conditional operator`.

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

Source: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

For example, let's define our age variable and write a piece of code to check if a person is old enough to do something or not.

```js
const age = 23;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💦");
```

When we execute the code above, of course it'll be true because the age is up to 18, which will execute the if statement. We can see this whole condition was done in one line.

The conditional operator is actually an "operator" as the name says, and remember an operator always produces a value. In other words, an operator is an expression. What this means is that if we have a value, we can then assign that value to a variable.

With this, we can make the ternary operator really useful to conditionally declare variables.

Instead of writing the above example, we can do it like this.

```js
age >= 18 ? "wine 🍷" : "water 💦";
```

We can see that this whole operator is an expression, and expressions produces a value. Now we can store that value into a variable like this and print it to the console.

```js
const drink = age >= 18 ? "wine 🍷" : "water 💦";

console.log(drink);
```

We can see that drink is defined conditionally all in one simple line. Without this conditional operator, we would have used the `if/else` statement which wouldn't be so easy. Remember when we want to declare a varaible inside of an `if/else` block, we need to declare that variable outside.

```js
let drink2;

if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}

console.log(drink2);
```

Again, we need to define the "drink2" variable outside of the `if/else` blocks. So we declared the varaible outside first, then we reassigned it inside the blocks.

Now we really just did this for the sake of comparison, so you can see the tremendous difference that the ternary operator introduces in the code. In this example, the ternary operator is a lot easier to understand and write.

Using the ternary operator, we were able to transform the big `if/else` block of code into one small operation.

To take it a step further, since the ternary operator is an expression, we can also use it in a template literal, unlike using an `if/else` statement that we tried and failed in the previous lecture.

```js
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);
```

Finally, the ternary operator is not thought as a replacement of `if/else` statement. We still need if/else for bigger blocks of code that we need to execute based on a condition. In that case, the ternary is not going to work. So the ternary is perfect for simple expressions.