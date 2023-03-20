# Simple Array Methods

Methods are functions attached to objects and since arrays have methods themselves, arrays are basically objects as well.

We use this built-in methods for manipulating arrays and handling several operations.

## Slice Method (Array.slice(start index, end index))

Similar to the slice method on strings, we use this method to extract parts of an array without changing the main array.

We simply do this by using the `.slice()` keyword and pass in the start and end index we want to slice from.

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(2); // Result will be ['c', 'd', 'e']
```

This will slice the first [0], second [1] elements and start extracting at position [2] of the array, as defined in the method.

We can also define start and end positions of this method.

```js
arr.slice(2, 4); // ['c', 'd' ]
```

What this will basically do is return [2] and [3]. And remember the length of the output array will be the end position minus the start position.

So `4 - 2 = 2` and so the result are two elements `['c', d]`

> **Note**
> It does not mutate the original array but rather creates a copy or clone from the original array with the extracted parts

We can also use negative numbers. For example

```js
arr.slice(-2); // This will give us the last two elements of the array.
```

Finally we can use the slice method to create a shallow copy of the array which is similar to how we used the spread operator to create a shallow copy of the array.

```js
arr.slice(); // ['a', 'b', 'c', 'd', 'e']
[...arr]; // ['a', 'b', 'c', 'd', 'e']
```

You can use either methods to create a shallow copy of an array, but you only use the `.slice()` method when we want to chain multiple array methods.

## Splice Method (Array.splice(start index, delete count))

This works the same way with the slice method, except it mutates the original array.

```js
arr.splice(2); // ['c', 'd', 'e']
console.log(arr); // Remaining elements after splice method ['a', 'b']
arr.splice(-1);
console.log(arr); // returns last element only ['e']
```

In real-world scenario, we don't usually have need for the remaning elements in an array, a good use case of the splice method is removing the last element from an array.

```js
arr.splice(-1); // ['a', 'b' 'c', 'd']
console.log(arr);
```

The splice method also takes in a second argument. Except instead of selecting the last element of the array, it is used to specify the number of elements we want to delete starting from the first index. I.e `deleteCount`

```js
arr.splice(1, 2); // ['b', 'c'] Starts from index [1] and select only 2 elements
```

## Reverse Array.reverse(Array)

The reverse array method is used to reverse the order of an array.

```js
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']
```

The reverse method also mutates the array. Using this method will reverse the original array.

## Concat Array.concat(object)

This method is used to concat arrays together.

```js
const joinedArr = arr.concat(arr2);
console.log(joinedArr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
```

The concat method of course does not mutate the original array.

## Join (Array.prototype.join(seperator))

The join method as we've seen is used to concatenate all the elements of an array using a specified seperator string

# Looping Arrays forEach()

Previosuly we used the `for of` loop to loop between arrays, the `forEach` method also allows us to loop between array but in a more different way.

### Looping with for of loop

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const transactions of movements) {
  transactions < 1
    ? console.log(`You withdrew ${Math.abs(transactions)}`)
    : console.log(`You deposited ${transactions}`);
}
```

### Looping with forEach

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (transactions) {
  transactions < 1
    ? console.log(`You withdrew ${Math.abs(transactions)}`)
    : console.log(`You deposited ${transactions}`);
});
```

The callback function executes at every iteration, so:

```js
0: function(200)
1: function(450)
2: function(-400)
// ...
```

The `forEach` method is a higher order function that takes in a callback function that is executed at it iteration of looping through an array.

As the `forEach` method calls the callback function in each iteration, it will pass in the current element of the array as an argument passed into the function.

The `forEach` method also uses arrow functions.

```js
movements.forEach(transactions =>
  transactions < 1
    ? console.log(`You withdrew ${Math.abs(transactions)}`)
    : console.log(`You deposited ${transactions}`)
);
```

### Accessing Index in forEach

Previously we looked at how to access indexes of arrays with the `for of` loop:

```js
for (const [i, transactions] of movements.entries) {
}
```

The `forEach` method also does this and even returns the element, the index, and even the entire array we're looping.

```js
movements.forEach(transcations, i, arr) {
  transact < 1
    ? console.log(`Transaction ${i}: You withdrew ${Math.abs(transact)}`, arr)
    : console.log(`Transaction ${i}: You deposited ${transact}`, arr);
}
```

The names does not matter but the order has to be `element, index, array`

> **Note**
> The order of values is different in the `for of` loop and `forEach` method.

`for of (index, element)`
`forEach (element, index, array)`

### forEach or for of Loop?

- The forEach method does not have the `continue` and `break` keywords, so use the for of loop if you absolutely want to break or continue a looping operation.

# Data Transformations (Maps, Filter & Reduce)

The Map, Filter, and Reduce array methods are the three biggest array methods in JavaScript for data transformations. They allow us manipulate and change arrays and store them into newer arrays.

In recent years, these tools have become really popular because of their importance.

## Map Method (Array.prototype.map())

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

This method is similar to the `forEach` method but the difference is that the `Map` methods creates a brand new array based on the original array.

![map](https://user-images.githubusercontent.com/62628408/226436590-6e16b20e-89b4-4e7f-883e-cef00552d67a.png)

## Filter Method (Array.prototype.filter())

The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function (a certain condition).

![filter](https://user-images.githubusercontent.com/62628408/226436576-7fa26cd8-0f97-42e0-9f01-4acd6eafe9e3.png)

## Reduce Method (Array.prototype.reduce())

The `reduce()` method executes a 'reducer' callback function on each element of an array and returns the sum of all the elements in the array to a single value.

![reduce](https://user-images.githubusercontent.com/62628408/226436582-8618c570-cb79-40b4-b1dd-096320b5b385.png)
