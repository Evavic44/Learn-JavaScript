
## 16. Boolean Logic (And, Or & Not Operators)

Boolean Logic is a branch of computer science which uses true and false values to solve complex logical problems. To do that, it uses several logical operators to combine true and false values, much like we use arithimetic opertors to combine numeric values.

Now we're only going to scratch the surfacce and talk about only the most basic logical operators, which are the `AND`, `OR` and `NOT` operators.

Note that Boolean logic is not specific to only JavaScript but true to all other programming languages as well.

### Boolean Logic Operators

Let's use an example to illustrate:

<img src="https://user-images.githubusercontent.com/62628408/165135822-c5936d06-77d1-4423-8248-f873f335b885.png" width="300px" alt="Sarah has a driver's license and Sarah has good vision">

In the example above, we have two `Boolean` variables that can either be true or false, because

- i. Sarah could have no driver's license.
- ii. Sarah could have no good vision.

and of course on the other hand,

- i. She could have a driver's license.
- i. She could have a good vision.

### AND Operator

Now using the `AND` operator like `A and B`, we can combine these two Boolean varaible like "Sarah has a driver's license `And` good vision and the result can be gotten using something called: "Truth Table".

<img src="https://user-images.githubusercontent.com/62628408/165135933-b3a337f2-d7a2-4c88-8c14-f5c64d6c1aa1.png" width="300px" alt="And operator">

Here we have the two possible values for each of the varaibles, `A & B`, which gives us four possible combination or results. From the table, we can see that only if `A and B` are true will the result of the operation be true as well. Afterall, it's called the `And` operator.

In all other situations, if either `A or B` are false, then `A and B` would be false. Now this can also extend this to more than just two values. like we could do `A and B and C` and the result will be true only if all of them are true, and if one of them is false, then the result will be false as well.

### OR Operator

The `OR` operator works in the opposite way. With the current example, we could determine if Sarah has a driver's license `Or` good vision.

The `Or` operator would be true if just one of the varaibles is true,
and if we look at the truth table, we can confirm that.

<img src="https://user-images.githubusercontent.com/62628408/165137086-332680f4-7733-47c3-87e9-431e435fa81a.png" width="200px" alt="Or operator">

So unlike the `And` operator, even if one of the the variables is false, the outcome will still be true. And if we have multiple variables, it is enough for one of them to be true to make the whole operation true as well.

### NOT Operator

Finally, we have the `NOT` operator, which is a lot simpler because it dosen't combine multiple values, instead, the not operator acts on only one Boolean values and basically inverts it.

So if `A` is true, it will become false and if it is false, then `!A` would become true.

### How do these Logical Operators work?

```js
age = 16;
```

**BOOLEAN VARAIBLES**

👉🏽 **A**: Age is greater or equal 20

👉🏽 **B**: Age is less than 30

If `age = 16;` then `A` would be false and `B` true, because 16 is lesser than 20 and 30.

<img src="https://user-images.githubusercontent.com/62628408/165136271-5958059d-3227-4f64-8637-8e272292a978.png" width="500px" alt="Logical operators example">

That's the basic explanation. Now let's combine these variables using the logical operators.

#### !A

```js

!A        true

// A is false, therefore !A is true
```

We know that A is false in our example, therefore the result of `!A` as we learnt is true, because all it does is invert the logical value of the variable.

#### A AND B

```js
A     AND    B

// A is false and B is true
```

From the look at our truth table, we can see that the result of this will be false because, when we have the `AND` operator, it is enough for one of the operands to be false to make the result of the operation false.

#### A OR B

```js
A   OR    B

// A is false and B is true
```

In this case, we have true because it is enough for one value to be true to make the whole operation true as well.

#### !A AND B

```js
!A   AND  B

// !A is true and B is true
```

Looking at our truth table, we already know that `true` and `true` would be `true` as well.

#### A OR !B

```js
A   OR   !B

// A is false and !B is false
```

A is `false` and since `B` is `true`, `!B` would be false, and therefore the whole operation would be `false`. On a side note, the `NOT` operator actually has precedence over the `OR` & `AND` operators, so basically the values are inverted first before being combined with the `AND` or `OR` operators.

Actually, this is the only way for the `OR` operator to be `false`, when `A` & `B` is false.

In the next lecture, we'll learn how to use this operator in our code and it'll make more sense to you and by then, we probably wouldn't need the truth table anymore because it'll become quite intuitive how these operators work.