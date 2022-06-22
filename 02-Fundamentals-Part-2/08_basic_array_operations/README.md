## Basic Array Operations (Methods)

JavaScript has some built-in function that we can basically apply on arrays, and these are called methods. Methods are simply array operations.

There are countless array methods in JavaScript. We have a whole section dedicated to arrays alone. That is how important they are in JavaScript. In this section, we're going to be looking at the very crucial ones that we need to know.

<!-- Add Elements -->

## Push Method

The `.push()` method is an array method that adds an element to the end of an array.

```js
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");

console.log(friends);
```

### Result

```js
["Michael", "Steven", "Peter", "Jay"];
```

Push is essentially a function that is attached to the friends array. using the `dot`. We will explain why this happens in this way later on.
When we check this in the console, we can see that `"Jay"` is now added to the end of the array, and the total count of the array is now changed to 4.

Now, since `push` is a function, it can also return something. We can store the push function in a variable and run this variable to get the total number of values in the array.

```js
const newLength = friends.push("Jay");
console.log(newLength);
```

### Result

```js
["Michael", "Steven", "Peter", "Jay", "Jay"];
```

## Unshift Method

The `.unshift()` method is an array metohd that adds an element to the beginning of an array.

```js
friends.unshift("John");
console.log(friends);
```

### Result

```js
["John", "Michael", "Steven", "Peter", "Jay", "Jay"];
```

<!-- Remove Elements -->

## Pop Method

Removes the last element in an array. It is basically the opposite of the push element.

```js
friends.push;
console.log(friends);
```

The `pop()` method doesn't require passing any arguments, and that is because there is no information needed to really remove the last element.

```js
friends.pop();
friends.pop();
```

### Result

```js
["John", "Michael", "Steven"];
```

The pop method also returns something, this time it returns a removed element which can sometimes be useful.

```js
const popped = friends.pop();
console.log(popped);
```

## Shift Method

The shift method removes the first element in an array.

```js
friends.shift();
console.log(friends);
```

### Result

```js
["Michael", "Steven"];
```

## indexOf method

This method tells us where an element is at in an array.

```js
console.log(indexOf("Steven"));
```

If we try this method with an element that is not present in the array, it will return -1.

```js
console.log(indexOf("Bob"));
```

## includes() Method

Similar to the `indexOf` method, the `includes()` method is used to check if an element is in an array and the result is a boolean value: True if the element is in the array, and false if it is not. The `includes()` method is an ES6 feature.

```js
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
```

The `includes()` method uses the strict equality for this check. So if we push a number to this array and checked for `"23"` string using the `includes()` method, it'll return false because this method doesn't do type coercion.

```js
friends.push(23);
console.log(friends.includes("23"));
```

But if we added the number directly and checked this number, it will return true.

```js
friends.push(23);
console.log(friends.includes(23));
```

One of the useuful applicaitons of the `includes()` method is that it can be used to write conditionals.

```js
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
```

This of course will check the array for the string `"Steven"`, and if it is found, the result will be true, which will return the if statement.`
