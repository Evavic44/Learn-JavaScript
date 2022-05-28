Fundamental building blocks of real world JavScript applications are function. They are one of the most important concepts in the language.

## What is a Function

A function is simply a piece of code that we can re-use over and over again in our code. It is similar to the variable but for whole chunks of code.

Remember, a variable holds a value, but a function can hold one or more complete lines of code.

```js
function name() {}
```

To create a function, we first write the keyword `function` followed by the function name, a parenthesis `()`, and some curly braces `{}` at the end that will contain the function body. The body is the piece of code that will be executed when we run the function.

```js
function logger() {
  console.log("My name is Eke");
}

logger();
```

Let' say we need to execute a log many times in our program. We've created the function and we can now use it.
To do that, simply write the function name, example `logger()` followed by a parenthesis

This process of using the function is called:

- invoking the function
- running the function
- calling the function

They can be used interchangeably, so anytime you see either of them, understand that they mean the same thing.

We can use the or call the function multiple times. Anytime we call the function, the code that is within the function will be executed. If you call it 3 times, it will be executed 3 times.

Usually, when we write functions, we also pass in data and additionally, a function can also return data as well. Which means it can give us data back which we can then use to do something else in the program.

### Example

Let's imagine a food processor, we put food in the processor which does something, and then in the end, the food processor returns the processed food.

```js
function fruitProcessor()
```

## Parameters and Arguments

In this function above, we specified someting called parameters which are like variables that are specific only to a given function, and they will get defined once we call the function.

So let's give this function two parameters. These parameters represent the input data of this function, so when we call these function, the two parameters will run.

In the example below, we want to simulate that this fruit processor produces a juice out of the apples and oranges we give it.

```js
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}
```

Inside of the function, we created a variable called `juice` and assigned a template literal that will specify how many apples and oranges is required to make our fruit.

These parameters are wrapped with a template literal `${apples}` `${oranges}` because they will be a number when we call it. For instance if we set the apples to `3`, then the string will be `Juice with 3 apples`

We've built a string using the input data that we get into the function.

And now for the best part, we used the `return` keyword, which will help us return any value from the function. Which means it can be used anywhere later in our code. Basically, the `juice` will become the result of running this function.

Now let's do that, which is calling, running or invoking this function.

```js
fruitProcessor(5, 0);
```

So we've used the `fruitProcessor()` and assigned actual values for the parameters, `5 apples` and `0 oranges`. So this will be the input of the fruit processor function. We can think of the parameters as placeholders that we need to assign a value. These actual values are called `arguments`

When we run this in the console, we get `5 0` but the juice variable is not executed and that is because the `juice` variable was returned from this function which means the result of running this function will replace the `juice` string that we produced.

So if we want to use the value that we returned, we need to store it in a variable.

```js
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
``;
```

Now when we run this, we get "Juice with 5 apples and 0 ranges." We can also run this directly in the console without having to store it in a variable.

```js
console.log(fruitProcessor(5, 0));
```

And now, thanks to the power of function, we can reuse the function with different input values which will give us a different output.

```js
const appleOrangeJuice = fruitProcessor(2, 4);
```

Once again we are simply defining different arguments which will get passed into the funtion as parameters. So what we did was create a generic function that works for any number of apples and oranges.

As said earlier, apples and oranges are placeholders that will hold the arguments when we call the function.

Now we can run the function with these new arguments.

```js
console.log(appleOrangeJuice);
```

This will give us two juices:

- One with 5 apples and 0 oranges.
- One with 2 apples and 4 oranges.

Of course we can run this function as many times as we want but we should call it at least once, if not the code that is within the function will never run.

## Conclusion

As a concliusion to this lecture, we can say that function allows us to write more maintainable code because with functions we can create reusable chunks of code instead of having to manually write the same code over and over again.
And when you know that, you will know when you should actually use functions.

This is actually a very important principle for writing clean code, used in programming all the time. And this principle is called `Don't Repeat Yourself(DRY)`. Functions are perfect for implementing `DRY` code because they are reusable code blocks that together, make up our application.

By the way `console.log()` is actually a function, but a built-in function that we do not have to write ourselves but we can call it like our own functions. We call it using the parenthesis`()`, and a value which will give us the result stored in the value.

The same can be said with the function used to convert a string to a number.

```js
Number("23");
```

We passed the argument `(23)` inside the function and when executed, the function will return the string as a number.
