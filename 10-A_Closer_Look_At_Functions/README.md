# Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```js
const bookings = [];

function createBooking(flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
createBooking("LH123");
```

Here we simply created a function with some empty values, then we called the function with a single argument which is then attached to the first parameter of the `createBooking` function.

Here's how we added default parameters in `ES5` syntax

```js
const bookings = [];

function createBooking(flightNum, numPassengers, price) {
  numPassengers = numPassengers || 1; // 1
  price = price || 199; // 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking("LH123");
```

Here we utilized a concept called `short circuting` which in an `OR` operator, returns the last or next result if a value is a falsy value.

So since the values `numPassengers, price` are `undefined`, which is a falsy value, the result will be the next value.

However this process is a bit cumbersome. So in `ES6`, we can assign default parameters directly where the parameters is being created using the assignment operator `=`.

```js
const bookings = [];

function createBooking(flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking("LH123");
```

Of course we can overwrite this parameters when we specify the arguments.

```js
createBooking("LH123", 2, 800); // numPassengers = 2, price = 800
```

We can also use expressions on the default parameters.

```js
function createBooking(flightNum, numPassengers = 1 + 1, price = 199 - 99) {}
```

We can also calculate the value based on the parameter that was set before it. For example `price * numPassengers`

```js
function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {}

createBooking("LH123", 2); // numPassengers = 2, price = 398
createBooking("LH123", 5); // numPassengers = 5, price = 995
```

In a situation we want to skip a parameter, we can simply assign it `undefined`, which is basically not setting any value, so this will return the default value.

```js
createBooking("LH123", undefined, 1000); // numPassengers = 1, price = 1000
```

# How Passing Arguments Works (Values vs Reference)

Passing a primitive type to a function is the same as creating a copy outside of the function, so the value is simply coppied. On the other hand when we pass an object to a function, it is just like copying the object, so whatever we change in the copy will also affect the original.

For Example:

```js
const flight = "LH234";
const eke = {
  name: "Victor Eke",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 24739479284) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, eke);
console.log(flight); // "LH234"
console.log(eke); // Mr Victor Eke
```

Another example

```js
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(eke);
checkIn(flight, eke);
```

In programming there are two terms used all the time when dealing with functions: `passing by value` and `passing by reference`. JavaScript does not have `passing by reference`, only `passing by value`.

# First Class and Higher Order Functions

First class functions are functions that are treated like any other variable or values. For example, this function can be passed as an argument to other functions. It can also be returned by another function or assigned as a value to a variable.

This of course works this way because functions are essentially just objects

Example

```js
const add = (a, b) => a + b

const counter = {
  value: 23,
  inc: function({this.value++}),
}
```

In the example above, we created a function expression in the first example and an object method in the second example.

We can also pass functions as arguments into other functions.

```js
const greet = () => console.log("Hey Eke");
btnClose.addEventListener("click", greet);
```

We passed the greet function inside the `addEventListener` function as an argument.

- We can also return functions from other functions
- Just like array methods, functions also have built-in methods as well. For example the `bind()` method.

```js
counter.inc.bind(someObject);
```

## Higher Order Function

These are simply fuctions that receives another function as an argument, that returns a new function or both.

This is only possible because of first class functions.
A great example is the `addEventListener()` function we saw earlier.

```js
const greet = () => console.log("Hey Eke");
btnClose.addEventListener("click", greet);
```

In this example, the `addEventListener()` function is the higher order function and this because it receives another function as an input. While the function that is passed in is called a callback function, and this is because the callback function will be called later by the higher order function.

Finally we can also have functions return another function.

```js
// Higher order function
function count() {
  let counter = 0;
  // Callback function
  return function () {
    counter++;
  };
}
```

# Functions Accepting Callback Functions

Callbacks functions are essential for splitting up code into smaller reusable parts.

- Most importantly, they allow us to create abstractions. Which simply mean we hide secondary code implementation because so as to focus on the important parts of the code.

This allows us to think about problems on a higher, more abstract level.

```js
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JavaScript uses callbacks all the time.
const high5 = function () {
  console.log("👋🏽");
};

["Victor", "Martha", "Adam"].forEach(high5);
document.body.addEventListener("click", high5);
```

In the example above, `transformer()` function delegates the string transformation task to the lower level functions.

# Functions Returning Functions

```js
const greet = function (greetMsg) {
  return function (name) {
    console.log(`${greetMsg} ${name}`);
  };
};
// Arrow function
const greetAr = (greetMsg) => (name) => console.log(`${greetMsg} ${name}`);

const gretterHey = greet("Hey");
gretterHey("Victor");
gretterHey("Ben");

greet("Hello")("Caleb");
```

# The Call and Apply Method

```js
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, "Victor Eke");
lufthansa.book(424, "Michale Smith");
```

In the example above, the `this` keyword points to the `lufthansa` object because that is where the book function was called from.

Let's say we have another airline that needs to reuse the `book()` method, hard-coding this will be bad practice so what we can do is store the method in a seperate function(variable).

```js
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Sarah Williams"); // Calling the function this way wont work.
```

We've stored the method inside a variable which is typically different from the method inside the lufthansa object, but in order to use this method on another object, we need to use the call method because the `this` points to the global scope which is undefined at this point. I.e It is no longer a method since we copied it and stored it into the book variable.

So how do we execute this function on either the `eurowings` object or `lufthansa` object? We need to explictly tell JavaScript what object we want it point to.

And to do that, there are three fuction methods we can use: `call()`, `bind()`, and `apply()`.

By using the `call()` method, we can pass in values we want to replace the `this` keyword with.

### Call Method

The call() method calls the function with a given this value and arguments provided individually.

```js
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
book.call(lufthansa, 239, "Mary Slessor");
console.log(lufthansa);
```

First we define the object we want to run the method with, then we add the other arguments.

```js
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Ben Shapiro");
console.log(swiss);
```

### Apply Method

This is similar to the `call()` method except the given arguments are provided as an array.

```js
const fligthData = [135, "Bradley Cooper"];
book.apply(swiss, fligthData);
```

Although the `apply()` method is not really used in JavaScript that much, we can keep using the call method and inject any array using the spread operator.

```js
const fligthData = [135, "Bradley Cooper"];
book.call(swiss, ...fligthData);
```

# The Bind Method

Just like the call method, the `bind()` method also allows us to manually set the `this` keyword for any function call. The difference is that bind does not immediately call the function, instead it returns a new function where the `this` keyword is bound.

```js
const bookEW = book.bind(eurowings);
const bookLH = book.bind(eurowings);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Seagal");
// ...
```

Here we don't have to define the this keyword, just simply pass in the value we want to update.

Similar to the call method, we can also pass in multiple values to the bind method and a good use case is to add another argument to the function.

```js
const bookEW23 = book.bind(eurowings, 3422);
bookEW23("Victor Eke");
bookEW23("Martha Kent");
```

This allows us to set in stone certain arguments. This method of setting argumets beforehand is what we call partial application, and what this means in simple terms is that a part of an argument of an original function is already applied.

A good use-case of the bind method is when we use objects with Event Listeners

### Bind with Event Listeners

```js
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.plane);
};

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
```

This above example shows `NaN` because the handler function `lufthansa.buyPlane` is attached to the higher order function which is the `(".buy").addEventListener`, and since we know that the `this` keyword will point to the higher order function in which it was called, the this keyword in this case will be the button element.

With the `bind` method, we can explicitly change the `this` keyword to point to the `lufthansa` object.

```js
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
```

### Partial Application

We can also prefill default values into functions with the bind method.

```js
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
```

Here we set the rate parameter of the `addTax` function to `0.23` and stored it in another function called `addVAT`. Now when we call the `addVAT` function, it will always contain the value of `0.23`

This may look similar to setting default values in function like so:

```js
const addTask = (rate = 0.23, value) => value + value * rate;
```

But the difference is that the bind method allows us to create a completely different function we can work with.

# Immediately Invoked Function Expressions (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is called or invoked. This function will only run once

```js
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce(); // Can run again
```

The function above can be called again using the `runOnce` variable. What if we want to call this funtion only within itself, we use the `IIFE`

To use the `IIFE`, write a function without a variable name and wrap it inside parethesis(which converts it into an expression), and then we can call it using the parenthesis `()`.

```js
(function () {
  console.log("Hello World");
})();
```

It also works with arrow fucntions

```js
(() => console.log("Hello World 2"))();
```

Since we didn't assign a variable on both functions, we can only run it once and there is no way to call it aside within itself.

### Importance of IIFE

- This **IIFE** is important when we want to handle Async, await operations.
- Variables defined inside an `IIFE` scope will not be avaialble in the global scope. For example.

```js
(function () {
  console.log("Hello World");
  const num = 23;
})();

console.log(num);
```

This will throw an error because `num` is not accessible in the global scope. Another word for this is called encapsulation.

Data encapsulation and Data privacy are extremely important concepts in programming. It allows us to protect variables from being overwritten by external scripts or libraries, and this is primarily the reason why the `IIFE` were introduced in programming.

Although it is not a method specific to the JavaScript language but a pattern developers came up with to enable them protect variables.

This is also similar to declaring variables using the `const` and `let` keywords within a code block.

```js
{
  const isPrivate = 23;
  var notPrivate = 22;
}
```

The `var` keyword points to the global scope and so it will be accessible outside of the code block. While variables declared with `const` and `let` will create their own scope and will not be accessible outside of the code block.

In summary thanks to `ES6`, we do not need to use immediatelt invoked functions if all we want is to hide variables, we can simply declare them using `const` and `let`.

But if we want to run a function only once, `IIFE` is still the way to go, even now with modern JavaScript.

# Closures

WILL COME BACK TO THIS LESSON
