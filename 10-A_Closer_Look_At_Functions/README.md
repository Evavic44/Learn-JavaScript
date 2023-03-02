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

## How Passing Arguments Works (Values vs Reference)

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
