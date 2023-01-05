# Array Destructuring

This is an ES6 feature that allows you break a complex data structure like array into a smaller data structure like the array.

# Spread Operator

The spread operator (...) is used to quickly copy all or part of an existing array or object into another array or object.

The spread operator is a bit similar to destructuring; it allows you handle complex arrays and break it down into smaller arrays. t

Difference between the spread operator and destructuring is that spread operators does not create new variables. It can only be used in places where values are seperated by commas.

For instance, you can't use it in a template literal like the example below. This is because the literal expects a single value and not an array of values.

```js
const data = [1, 2, 3, 4];
const [a, b, c, d] = [...data];
console.log(a, b, c, d);
console.log(...data);
```

Another use case of the spread operator is for passing in multiple values into a function.

# Rest Patter and Parameters

The rest pattern is the opposite of the spread operator. It uses the exact same syntax, however, it it used to collect multiple elements and condense them into an array, whereas, the spread operator is used for unpacking an array into multiple elements or array.

### 1. Rest: Destructuring

Here's an example of the spread operator below. We know we're working with the spread syntax because it is declared on the right side of the assignment operator `=`.

```js
// SPREAD: Because [...] is on the right side of assignment operator =
const arr = [1, 2, ...[3, 4]];
```

We can also use it on the left side along with destructuring. For Example:

```js
// REST: Because [...] is on the left side of assignment operator =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
```

The output will be `1 2 [3 4 5]` because 1 and 2 will be stored in the a and b variables and then the rest of the value will be stored together in a new array.

This is where the name; Rest is coined from. It collects the elements that are unused in a destructuring assignment.

We can also have the `[...]` dots on both side of the operator.

```js
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
```

Here we stored the value of Pizza and Risotto into two new variables `pizza, risotto` and then the rest of the `(...restaurant.mainMenu and ...restaurant.starterMenu)` array was stored into a new array called `otherFood`.

> **NOTE**
> It's good to remember that the rest pattern should always be the last element in a destructuring assignment otherwise JavaScript will not know what till when it should collect the rest of an array.

For example: You Cannot Do This!

```js
const [pizza, , risotto, ...otherFood, bread]
```

The rest pattern will have to be the last element in other for the operation to work. As a result of this, there can only be one rest pattern in any destructuring assignment.

### Rest in Objects

Just like the spread operator, the rest operator also works on objects.

### 1. Rest: Functions

Just like the spread operator that allows passing in multiple values in a function all at once, the rest operator can do the opposite.

```js
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
```

### Finally!

The subtle distinction that tells you when and where to use spread and rest.

- Use Spread when you want to write values seperated by commas.
- Use Rest when you want to write variable names seperated by commas.
