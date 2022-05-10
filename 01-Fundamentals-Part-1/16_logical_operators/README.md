
## 17 Logical Operators

In the last lecture, we learned what Logical operators are, now let's jump into our code and learn how logical operators work in JavaScript.

We'll be using the Boolean varaibles from the last lecture.

**A**: Sarah has a driver's license <br>
**B**: Sarah has a good vision

```js
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
```

We've created two variables that says, Sarah has a drivers license and has a good vision and set them both to true as the example from the last lecture.

Now we combined both logical values using the `AND(&&)` operator in JavaScript.

The result in the console is `true` because `hasDriversLicense` is true and `hasGoodVision` is also true, but if we change one of the values to `false`, the result will become `false` because in an `And` operation, it is enough for one variable to be false for the result of the operation to be false.

Now let's see what it would look like with the `Or` operator.

```js
console.log(hasDriversLicense || hasGoodVision);
```

Combining the same values but this time with the `OR` operator. The result for this would be `true` because we know that it is enough for one of the variables to be `true`, for the whole operation to be `true`

Finally, we can use the `Not` operator to invert values. In javaScript, the `Not` operator is the exclamation mark `(!)`.

```js
console.log(!hasDriversLicense);
```

So in the console `!hasDriversLicense` will become false because it will invert the values.

Now we know how all of this works, we can use it to take a decision.

```js
const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

// Or you can just add the condition in the if() block

if (hasDriversLicense && hasGoodVision)
```

Our module is that in other for Sarah to drive, she has to have a drivers license and good vision.

If she does, the result would be `true` and it'll execute the `if()` block, if not, it'll execute the `else()` block.

So for our code above, the result is `true` and that is because `hasDriversLicense` is `true` and `hasGoodVision` is `true` and we know that if both conditions are `true` in an `And` operation, the result would be `true`. On the other hand, if one of the variables was false, the result also would be false.

Let's look at another example.
We can also look at the `OR` operator which is the `||` symbol in JavaScript.

```js
const isTired = true; // C

console.log(hasDriversLicense || hasGoodVision || isTired);
```

The result of this would be true because all of the variables are true.

Now we can use all of this to improve our decision making wether Sarah should drive or not.

With this third variable, we want Sarah to be able to drive if:

- She has a drivers License.
- She has good vision
- She is not tired.

```js
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}
```

The `else()` block would be executed because `isTired` is inverted and has become false because it is enough if one variable is false to make all of them false. To fix this, we need to change `isTired` to false and then Sarah can be able to drive.