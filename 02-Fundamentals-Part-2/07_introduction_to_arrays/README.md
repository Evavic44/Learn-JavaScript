## Introduction to Arrays

An array is like a big container in which we can throw variables and then later, reference them. This is extremely important because programming is most of the time all about data, we get data, store data and process data, and then we give some data back.

These datas has to be stored in some place and for that, we use Data Structures to do that. The two most important data structures in JavaScript are Arrays and Objects.

Let's say if we want names of a list of firends, we have to store it in a variable one by one like this:

```js
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
```

This might pose an issue if we want to store several names, this is where data structures like arrays come in.

Instead of doing this, let's create a varaible which we can call friends and then we use a square brackets `[]` to create a new array and we can put different values seperated by a comma. This method is called "The Literal syntax"

```js
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
```

There is another way of writing arrays. By using the Array function. We can just wirte `new`, the array function `Array` followed by a paranthesis of our values.

```js
let years = new Array(1991, 1984, 2008, 2020);
```

An array can hold different as many values as we want and also values of any type that we want, it doesn't have to always be a string.

These other method is actually a function, because we called it using the paranthesis and the `new` keyword which is mandatory because otherwise, it will not work.

Though it is way more usual using the first method which is callled the literal syntax.

Now we've created an array, to use it, we also use a quare bracket again. For Example.

```js
console.log(friends[0]);
```

> Note: Arrays are zero based so the first element is 0, second is 1 and third is 2. The code above will fetch the first value in the array which will be `Michael` To get other data, you can use the same method and input the value of the array having the zero-base syntax in mind.

```js
console.log(friends[1]);
console.log(friends[2]);
```

We can also get the actual number of elements that is in the array.

```js
console.log(friends.length);
```

This property will fetch the exact amount of elements that is in the array, and it is not zero-based, so it will not be 2 even though the last element was 2. If we check the result in the console, we can see it logs the number 3 which is the number of values we have in the array we created earlier.

We can use this property to automatically get the last result in an array, and that is useful so we don't have to count how many elemtents are in the array.

```js
console.log(friends[friends.length - 1]);
```

Since this property is not zero based, it will calculate the values in the array and subtract it by one which will give us the last value. In this case, 3 - 1 = 2 and since the last result is 2, our last value would be `Peter`.

Now the square brackets is not just for retrieving elements from the array, we can also use it to add or mutate elements in the array.

For example, we can change `the name Peter` in the array to something else like so:

```js
friends[2] = "Jay";
console.log(friends);

["Michael", "Steven", "Peter"];
```

Now we can see that the element number 2 is now replaced with `Jay`.

Note: We learnt before that variables declared with the const can not be changed, but in this situation we used const to declare the friends variable but we were still able to changes one element from "Peter" to "Jay".

The reason this happens is because, only primitive values are immutable, but an array is not a primitive value so we can mutate it. This happens because of how JavaScript stores it's memory. We will discuss this more in-depth in another article.

Note: We cannot mutate the entire Array. For Example.

```js
friends = ["Bob", "Alice"];
```

Arrays can actually hold values of different types all at the same time. Let's create an array that contains a basic imformation about me.

```js
const firstName = "Victor";
const eke = [firstName, "Eke", 2022 - 1997, "Software Engineer"];
console.log(eke);
console.log(eke.length);
```

Arrays can take in expressions and variables. You can see in the example, we stored the first name in a variable and used the variable name in the array. Same with the expression `2037 - 1997`, this will calculate the sum of these numbers and the result of the calculation will be the value of the array when we call it.

Now you can see we have all the data about "Eke" in one handy data structure, which makes it convenient for us instead of creating one variable for each data point.

We can also have an array inside of another array.

```js
const example = ["Name", "Age", friends];
console.log(example);
console.log(example.length);
```

// This will call the friends array we created earlier. Now let's work on a simple array exercise

## Exercise

```js
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

years = [1990, 1967, 2022, 2010, 2018];
```

In other to use this array in the calculation, we cannot do this:
calcAge(years);

This won't work because the expression `2037 - birthYear` is expecting a single value. We can only use the calcAge function for single values in an array.

```js
const ageOne = calcAge(years[0]);
const ageTwo = calcAge(years[1]);
const ageThree = calcAge(years[years.length - 1]);
console.log(ageOne, ageTwo, ageThree);
```

This will substitute the birthYear parameter with the first, second and last value in the array.

Finally, since we started with an array, it's usually a good idea to also end with a new array. Remember we said an array can take in an expression, so we can add the result directly into the array like so:

```js
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
```
