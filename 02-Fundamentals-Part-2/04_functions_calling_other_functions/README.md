## Functions calling other functions

Functions calling other functions is something that we do all the time in JavaScript. To illustrate this, we'll use the `fruitProcessor` function we used earlier.

```js
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
```

Remember this function was like a fruit processor that received a certain number of apples and oranges, and based on that, it produced and returned a juice. Now in this example, let's assume the fruit processor can only make juice with smaller fruit pieces.

So before making a juice, the fruit processor now needs another machine to first cut the fruit that we give it into multiple smaller pieces. So let's write that function(machine) that cuts the fruit in multiple pieces.

```js
function cutPieces(fruit) {
  return fruit * 4;
}
```

So we have our new function which will receive a `(fruit)` and return a fruit cut into 4 pieces. So if we get 2 apples, it will return 8 pieces to us.

To use this machine, we'll start by calling fruitPieces in our `fruitProcessor` function with the number of apples we will receive, and the result of calling this function we will capture in a variable called `applePieces`. We'll also do the same for the oranges.

```js
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
```

And the result is 8 pieces of apples and 12 pieces of oranges.

Finally, with time and practice, you will exactly know when you should create your own functions, and when to have multiple functions one after another.
