## 9. Let, Const, Var

There are basically 3 main ways of declaring a variable, which includes:

- let
- const
- var

`let` and `const` were both introduced in ES6 so they are modern JavaScript while the `var` keyword is the old way of declaring variables. Let's learn the differences and which one to use in which situation.

### When to Use JavaScript var?

Always declare JavaScript variables with var, let, or const.

- The var keyword is used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- Var supports older browsers.

#### let

- Use the `let` keyword to declare variables that can change later.
  **For example:**

```js
let age = 24;

age = 25;
```

In the code above, we have a variable with a vlaue of 24 which was later changed to 25. This is known as re-assigning a variable or mutating a variable.

So when we need to mutate a variable, `let` is the perfect use case. This also counts in declaring empty variables.

Declaring empty variables can sometimes be useful in a case where we want to declare all the variables at the top of the file but only assign actual values to them later in the program based on some condition or issue.

**For Example:**

```js
let age;

age = 32;
```

Here we declared a variable without assigning it a value at first and then on the second line, we assigned that empty variable we declared, a value of `32`

#### const

The `const` meaning, Constant keyword is used to declare variables that are not supposed to change at any point in the future.

**For Example:**

```js
const PI = 3.14;
```

In maths, we know that the value of `PI` is 3.14... so we use const to declare this variable because it is a constant that cannot be changed.

If we try to use the `const` keyword to declare a muteable variable, it will give an error in our code. Like so:

```js
const dateOfBirth = 1997;

dateOfBirth = 1998;
```

If we run this code, we will get an error because the const keywords cannot be mutated or reassigned a new value.

Now the fact that variables created with the `const` keywords are immutable, also means that it can not ne used to assign empty variables.

**For Example:**

```js
const job;
```

### let or const

Now having talked about the differences between the `let` and `const` keywords the question is, which one should we use and in what situation?

It is best practice to use the `const` keyword by default and only use let when you are really sure that the variable needs to change at some point in the future.

The reason that makes this a good practice is that we want to have as little variable mutations or changes as possible because changing variables introduces a potential to create bugs. 🪲
So by default, always use `const` and if you think the variable will have to change in the future, use `let`

### var

This was the old way of declaring variables before (ES6) was introduced in 2015. Even though it is not recommended to use the `var` keyword in this time, it is still good to understand how it works for legacy reasons because you may see this in older codebases or tutorials online.

**For Example:**

```js
var job = "programmer";

job = "technical writer";
console.log(job);
```

If we run this code, the result will give us 'technical writer' because the `var` keywords accepts mutating of variables.
Now the `var` keyword might look pretty similar to `let` on the surface but they are actually very different under the hood which we will dive deeper into in further sections.

Now it is good to know that you can use a variable without using one of these keywords we have talked about.

**For Example**

```js
age = 30;
console.log(age);
```

If we run this code, it will give us the age value of 30. In as much as this works, it is a terrible idea and not a good practice. You should always declare your variables properly using the `let`, `const` or `var` keywords.