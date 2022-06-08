In JavaScript, there are different ways of writing functions and each type of function works in a slightly different way.

## Function Declaration

The function in the previous lecture is called "function declarations" because we simply used the function keyword to declare a function much like declaring a variable

Let's now write a function declaration this time to calculate an age at a given birth year.

```js
function calcAgeOne(birthYear) {
  //   const age = 2022 - birthYear
  return 2022 - birthYear;
}
```

We can actually simplify this and return the code in one go. So instead of storing the return keyword in a variable `const age = 2022 - birthYear`, we can simply return the result of this expression. `return 2022 - birthYear`.

And once again, this is a generic function that will work for any birth year that we give it. So now let's call/invoke/execute this function.

```js
const ageOne = calcAgeOne(1997);
console.log(ageOne);
```

## Function Expression

Instead of writing a function with a name, we simply do it without a name, but we still define the parameter, the body and then store the whole function as a variable. This type of function is also called an anonymous function.

For example:

```js
const calcAgeTwo = function (birthYear) {
  return 2022 - birthYear;
};
```

So all of these is an expression and remember that an expression produces a value and we stored that value in a varaible, `calcAgeTwo`. Therefore, this variable now becomes the function. Now to call this function is the same way.

```js
const ageTwo = calcAgeTwo(1997);
console.log(ageTwo);
```

The function expression works exactly the same way as the function declaration, we called it the same way, we captured it the same way, and the result is actually the same because the function body is the same. It is important to know that we have these two types of functions in JavaScript because in some places, we will need to write functions in different ways.

It is also good to note that functions in JavaScript are just values, it is not a string or a number but a value and since it's a value, we can store it into a variable.

So finally, what's the big difference between function declarations and function expressions?

The main practical difference is that we can actually call function declarations before they are defined in the code.

For Example:

```js
const ageOne = calcAgeOne(1997)

function calcAgeTwo = function(birthYear) {
   return 2022 - birthYear;
}
```

We defined the function before the declaration and it still worked, but if we try to do that with the expression, it'll give an error because of a process called `Hoisting` in JavaScript. More on that a little later.

## Conclusion

So keep in mind that you can call a function declaration before you define it even though that might not be such a good idea in many cases. So which function should you use why writing your code? It's all about personal preference but it's good you understand how both works because both have their place in JavaScript.
