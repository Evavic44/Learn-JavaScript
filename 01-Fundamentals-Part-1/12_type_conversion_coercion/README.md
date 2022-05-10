## 14. Type Conversion and Coercion

Types are one of the fundamentals aspect of programming and converting between them is something we do in every programming language.

For example: converting a `"string"` to a `number`, a `number` to a `Boolean`, etc.

### Definition

Type conversion happens when we manually convert from one data type to another, while type coercion happens when JavaScript automatically converts the data types for us, implicitly.

### Type Conversion

```js
const inputYear = "1991";
console.log(InputYear + 18);
```

The expression above will concatenate the string `inputYear` with `18` and the result will be `199118`
This is because the plus `+` operator cannot convert a string to a number, in other to convert the string, we will need to use the `Number` function together with a bracket and the data type inside.

**For Example**

```js
Number(inputYear);
```

```js
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
```

This function will convert the string to a number and now when the command is executed, the `+` operator can now add the `1991` to `18` and give us `2009`.

There are certain types that are impossible to convert. For example: a string that doesn't contain a number.

```js
console.log(Number("Eke"));
```

JavaScript will try to convert this string to a number but will be prompted by an error:

```js
NaN; // Which stands for: Not a number
```

It is good to note that `NaN` actually means an invalid number because if you use the `typeof` operator to check the data type, the result is a `number`.

```js
console.log(typeof NaN);
```

Not just numbers but we can also convert a number to a string using the same format we used earlier. Ensure you start the type with a capital letter followed by the parenthesis.

```js
console.log(String(23));
```

The last type we can convert is the `Boolean` but this behaves in a seperate way by using somethin we call `truthy` & `falsy` values. We'll be looking at them a lot later.

That is all about type conversion. We rarely use this in JavaScript as it automatically converts data types for us.

### Type coercion

This happens when an operator is dealing with values that have different data types. In that case, JavScript will convert one of the values to match the other value so the calculation can be made.

```js
console.log("I am " + 23 + " years old"); // JavaScript will convert the number to a string that says: I am 23 years old.
```

Naturally, we would need to specify the data type for the number, but in JavaScript this is done automatically.

```js
console.log("I am " Number(23) "years old");
```

Type coercion also works on other operators, like: minus `-`, multiplication `*`, division `/`, boolean `true/false` operator

#### Minus/Subtraction `-` operator

This will convert the strings to a number and will execute the calculation.

```js
console.log("23" - "10" - 3); // Result will be 10
```

In the example above, `23` & `10` is a string but adding the minus operator converted it to numbers, therefore `23 - 10 - 3 = 10`

#### Plus/Addition operator `+`

This will convert the numbers to string and concatenate the numbers.

```js
console.log("23" + "10" + 3); // Result will be 23103
```

#### Division operator `/`

This has the same effect as the multiplication and subtraction operator.

```js
console.log("23" / 18);
```

The string will be converted to numbers and the result will be `23 / 18 = 11.5`

#### Logical operator `True/False`

```js
console.log("23" > "18"); // Result will be true
```

### Guess the output

```js
let n = "1" + 1; // n = "11"
n = n - 1; // 11 - 1 Minus operator converts string to number
console.log(n); // n = 10
```

```js
console.log(2 + 3 + 4 + "5"); // result will be "95"
```

```js
console.log("10" - "4" - "3" - 2 + "5"); // Result will be "15";
```

## 15. Truthy & Falsy Values

Falsy values are values that are not exactly false but will become false when they are converted to a **Boolean**. In JavaScript there are over 5 falsy values:

```
- 0
- ''
- undefined
- null
- NaN
```

These 5 values are not exactly false initially but will become false when we try to convert them to a **Boolean**

Everything else are called: Truthy values. Basically any number that is not `0`, or any string that is not empty will be true when we try to convert them to a Boolean.

```js
console.log(Boolean(0)); // With the number 0 = false
console.log(Boolean(undefined)); // With undefined  = false
console.log(Boolean("Eke")); // With a string = true
console.log(Boolean("")); // With an empty string = false
console.log(Boolean({})); // With an empty object = true
```

In practice, we rarely use the above concept. Conversion to Boolean values is usually done implicitly in other words, it is by type coercion and not conversion.

Now let's look at how type coercion works in an if/else condition.

```js
const money = 0;
if (money) {
  console.log("Don't spend it all. 💵");
} else {
  console.log("You should get a job. 👷🏾‍♀️");
}
```

The result is false: Which will be **You should get a job. 👷🏾‍♀️** and this is because in a logical context of an if/else statement condition, JavaScript will try to coerce any value (in this case: 0) into a Boolean, and this happens using the falsy & truthy value rules.

Since `money = 0`, we know that it is a falsy value therefore the result will be false and as a result, the `else` block will be executed.

Now, if we change the number to something like 100, it will be a truthy value and result will execte the `if` block.

Another use case example is to check if a value is defined or not.

```js
let height;
if (height) {
  console.log("Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}
```

In the example above, height is undefined, because we didn't assign it any value yet and we know from the list we shared earlier, undefined is a falsy value, the height will be converted to a Boolean and the else block will be executed.

If we assign a value to the height, this will execute the if block.

```js
let height = 100;
```

But we may run into problems with this. For example, if the `height: 0` (which is a falsy value), the output will be the `else` block. And this is a bug in our code because we didn't account for the height to be 0 and the result is undefined even though that is not true.

However we can fix this using something called `logical operators` which we'll check later.