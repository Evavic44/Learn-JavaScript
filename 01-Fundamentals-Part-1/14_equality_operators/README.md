## 15. Equality Operators

So far we have only used comparions operators to take decisions in an if/else statement but instead of checking if a value is greater or lesser than the other, with equality operator, we can check if these values are exactly the same.

To do that, we have different equality operators.

### Strict Equality Operator `===`

This is a type of equality operator that doesn't perform type coercion and only returns true when both values are exactly the same.

Example:

```js
const age = 18;

if (age === 18) console.log("You just became an adult! 😊");
```

In this situation, we used a triple equals to check if the age is exactly 18. Now if we run this on the console, we can see it is true, because the age is exactly 18. But if the age is higher or lesser than 18, nothing will show on the console.

```js
18 === 18; // True
"18" === 18; // False because `18` the string is not the same as 18 the number
```

Now don't confuse the assignment which is just a single equal (=) with the comparison operator which is the (===) equal.

### Loose Equality Operator `==`

This is the opposite of the strict equality which deals with double equals and it supports type coercion.

For example, JavaScript will convert a string to a number in the loose equality operation.

```js
"18" == 18; // True "18" the string is the same as 18 the number
```

Using the **loose** equality operator can introduce a lot of bugs in our code, so as a general rule of writing clean code, avoid the **loose** equality operator as much as you can. When comparing values, always use **strict** equality operator with the === **equal** signs

More Examples

There is a pretty simple way of getting a value from any webpage using the prompt function.

```js
prompt("What is your favourite number?");
```

This will prompt an input field with the question or text "What is your favourite number?"

In other to store the value someone enters into the input field, we need to store it in a variable.

```js
const favNumber = prompt("What is your favourite Number?"); // Stores the inputed value
console.log(favNumber); // Log to the conole.
```

Now when we input a number, it will be stored in the console as a string. You can see that if we use the typeof function, it is a string

```js
console.log(typeof favNumber); // Data type is a string
```

Now let's write a logic here to check if the number inputted is the right number.

```js
if (favNumber == 23) {
  // '23' == 23
  console.log("Cool! 23 is an amazing number!");
}
```

This worked because we used the **loose** equality operator which supports type coercion.

However if we used the strict operator, this will not work unless because it doesn't support type coercion, unless we manually convert the strings to numbers.

```js
const favNumber = Number(prompt("What's your favourite number?"));

if (favNumber === 23) {
  // 23 === 23 True
  console.log("Cool! 23 is an amazing number!");
}
```

### Else if statement

We can also add more conditions to an `if/else` statement.

```js
if (favNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favNumber === 7) {
  console.log("7 is also a cool number!");
} else if (favNumber === 100) {
  console.log("100 is also a cool Number!");
} else {
  console.log("Number is not 23 or 7 or 100");
}
```

Now if we type in 7, the `else/if` block will be executed and the value will be **"7 is also a cool number"** and if we type in a value that is neither 23 nor 7, the `else` block will be executed to say **"Number is not 23 or 7"**

All this statements worked with the strict `(===)` equality operator because we manually converted the string `favNumber` to a number.

We can also keep adding more `else/if` block if we want. So we are not restricted to one option if a certain condition is true or false, it will go through other `else/if` statements before it gives us a result.

So basically, it will check for 23, if it doesnt find it, it will move to 7 if it still doesn't find it, it will move to the next number until it reaches the final stage which is running the `else` block.

### Different operator

The different operator is the opposite of the equality operator. It also have the `loosy` and `strict` type. The symbol for this operator is `!==` for the strict different operator and `!=` for the loose different operator.

Example

```js
if (favNumber !== 23) console.log("Why not 23?");
```

Now if we input a value that is not 23, the result in the console will be "Why not 23?" because we have specified a condition if the value is not `23`. What if we use the 23, then we won't have any result on the console concerning the different operator block of code.

Sometimes we need the equality operator and sometimes we need the different operator, just choose whatever you need to solve any particular problem. In both cases, make sure you always use the strict version of the operator.