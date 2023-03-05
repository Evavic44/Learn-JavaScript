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
