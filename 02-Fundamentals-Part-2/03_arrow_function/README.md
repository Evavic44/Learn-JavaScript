## Arrow Function

So we learned about function declarations and expressions in the last lecture but there is actually a third type of function that was added to JavaScript in ES6.

Arrow function is simply a special form of function expression that is shorter and therefore faster to write.

For Example

```js
(birthYear) => 2022 - birthYear;
```

First we write the parameter `birthYear`, followed by an arrow `=>` (which is why this is called an arrow function) and then simply write what we want to return `2022 - birthYear`. To run this, we need to store it into a variable just like we did in the previous lecture.

```js
const calcAgeThree = (birthYear) => 2022 - birthYear;
```

This is a special form of function expression because it is still an expression, and that is because all of `(birthYear) => 2022 - birthYear` will produce a value. You can see that it is basically similar to the Function Expression but Arrow function is much easier to write.

The difference between arrow function and other ways of writing functions is that

- We don't need the curly braces like we have previously in the code block
- The `return` happens implicitly. The value will automatically be returned without us having to explicitly use the `return` keyword. So this is excellent for simple one-liner functions and very important in JavaScript.

To call this function, it works exactly the same way as all the other functions. And again to use it, we need to store it inside a variable, and then log it to the console.

```js
const ageThree = calcAgeThree(1997);
console.log(ageThree);
```

This is actually the simplest form, when we have only one parameter and only basically one line of code which we want to run something. Though it gets a bit more complex when we add more parameters or code.

Example
Let's calculate how many years a person has till retirement.
We'll call this function `yearsUntilRetirement` and then we set that equal to a function. To calculate the retirement age, we first need to calculate the age and then from there, the retirement age - the current age, so we need more lines of code which brings us back to using the curly braces.

First we calculate the current age.
`const age = 2022 - birthYear;`

And then calculate the years before retirement (let's say the retirement age is 65)

`const retirement = 65 - age;`

Now to return this retirement, we actually need to wrtie the return keyword explicitly. We can only ommit the return when it is a one-liner function.

```js
const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1997));
```

So that is the scenario when we have one parameter and more than one line of code. But what if we had multiple parameters, then we need to wrap the parameters into parenthesis and then return a string.

We can use template strings like "First name retires in X years."

```js
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Eke"));
console.log(yearsUntilRetirement(1993, "John"));
```

Now when we run this in the console, we get:

- Eke retires in 40 years
- John retires in 36 years

So that is essentially how the arrow function works. You just need to keep in mind the couple of different scenarions that there are regarding the number of code or/and parameters.

As you add more code and more parameters, it becomes more complex and we kind of lose the advantage of using an arrow function.

## What function should I use?

Now we understand the different functions, it might be a bit confusing to decide which one to use. Should you use the arrow function which is easier to write everytime? The answer is No, and a bit complicated, because there is another fundamental difference between arrow functions and more traditional functions.

The differnce is that Arrow functions does not get the `This` keyword. Which is a topic for later.
