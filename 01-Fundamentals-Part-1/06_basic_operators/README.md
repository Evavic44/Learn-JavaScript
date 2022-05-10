## 10. Basic Operators

An operator allows you to transfer or combine multiple values, and do many more work with values. There are many categories of operators, we have **Mathematical/arithimetic operators**, **comparison operators**, **logical operators**, **assignment operators** and many more.

### Arithimetic Operators

We have already used the minus(-) and plus(+) operators, but we can do all mathematial operations like multilplication, division and so on.

**For example**

```js
const ageEke = 2037 - 1997;
const ageSarah = 2037 - 2018;
console.log(ageEke, ageSarah);
```

The result will be the calculated sum of 2037 - 1997 and 2037 - 2018.
Since we specified 2037 in two different places, it will be good to add it to a variable so we don't have to repeat ourselves.

```js
const now = 2037;
```

Now we can use it in our code like this;

```js
const ageEke = now - 1997;
const ageSarah = now - 2018;
console.log(ageEke, ageSarah);
```

We also have other arithimetic operators:

```js
console.log(ageEke - 2, ageEke / 10, 2 ** 3);
```

`2 ** 3` is an exponent which means 2 raised to power 3 which is `2x2x2 = 8`

We can also use arthimetic operators to join strings or in other words concatenate strings.

```js
const firstName = "Victor";
const lastName = "Eke";
console.log(firstName + lastName);
```

This will combine both values and give use a full string `VictorEke`
You can add space between these values by using an empty string.

```js
console.log(firstName + " " + lastName);
```

### Typeof Operator

We already looked at the typeof operator and how we can use it to know the data type of a variable.

```js
let ageEke = 32;
console.log(typeof ageEke);
```

This will give us the data type of ageEke value which is a `number`

### Assignment Operator

It is also good to note that the equals `(=)` symbol is an operator on it's own.

```js
let x = 10 + 5;
console.log(x);
```

If we run this code in the console, the plus `(+)` operator will be executed before the equal to`(=)` which is based on a couple of rules about operator precedence that we'll be looking at later.

There are other assignment operators:

```js
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
console.log(x);
```

- `x += 10` simply means: The value of x + 10 =
  and since the value of x is 15, x = `10 + 15 = 25`
- `x *= 4` means: The value of x _ 10 = Which will give be the previous value of x multiplied by 4. `x = 25 _ 4 = 100`
- This will also work on the division operator
- `x++` simply means: Add 1 to the value of x = `x + 1 = 101`
- `x--` is the opposite of ++.

### Comparison Operators

We use this operator to produce `BOOLEAN` values.

```js
console.log(ageEke > ageSarah);
```

This comparison is simply saying is the age of Eke (`ageEke`) greater than the age of Sarah (`ageSarah`), if yes, the answer would be true and if not, it will be false.

And the answer is true because Eke's age is 40 and Sarahs's age is 19.

This will be very useful later when we start taking decisions based on certain conditions.

There are more comparison operators:

```js
console.log(ageSarah >= 18) >, <, >=, <=
```

The greater than equal to `>=` simply means if Sarah is greater than 18 or equal to 18. Since Sarah is 19 years old, this statement would be true and if she is less than 18 or the value is increased to 20, the result would be false:

```js
console.log(ageSarah >= 20);
```

Usually when you using this in real world examples, we would probably store the calculation in a variable. For Example:

```js
const fullAge = ageSarah >= 20;
```

We can do all the previous calculations we did in one line and JavScript will execute the ages first and then compare them with the operator in the middle.

```js
console.log(now - 1997 > now - 2018);
```
