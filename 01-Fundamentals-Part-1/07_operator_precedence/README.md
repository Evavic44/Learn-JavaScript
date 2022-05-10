## 11. Operator Precedence

```js
const now = 2037;
const ageEke = now - 1997;
const ageSarah = now - 2018;

console.log(now - 1997 > now - 2018);
```

Operator precedence is a collection of rules in JavaScript that reflect conventions about which procedure to perform first in a given mathematical expression.

Operators with higher precedence will be executed before the lower ones.

Let's take a look at the precedence of different operators from **MDN**.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"><img src="https://user-images.githubusercontent.com/62628408/150381705-b96dd202-5a28-4b01-8318-25d104909175.png"></a>

**Image Credit:** <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">MDN DOCS</a>

Now we can use this table to understand the precedence of the operators in the code above and how it was executed.

On the table, subtraction `-` has a higher precedence than greater than `>` which is why the numbers were executed first before making the comparison.

On the table, we can also see which operators are executed from left to right.

**For Example**.

```js
console.log(25 - 10 - 5);
```

Since subtraction is executed from left to right, the result of this calculation would be `10`

```js
let x, y; // Declare two variables in one line
x = y = 25 - 10 - 5; // x = y = 10. y = 10, x = 10
conslole.log(x, y);
```

The result in the above example would be `10, 10`.
This is because JavaScript will look at the calculation and run the ones with the higher precedence (in this case `-`) first before the assignment operator (`=`).

```js
const averageAge = ageEke + ageSarah / 2;
console.log(ageEke, ageSarah, averageAge);
```

Here we are calculating the average value of `ageEke` & `ageSarah` and dividing it by `2`

Result would be:
**40 19 49.5**