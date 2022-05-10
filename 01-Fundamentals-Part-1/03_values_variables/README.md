## Values and Variables

A value is a piece of data which is the most fundamental unit of information in programming.

**E.g:**

`'Jonas', 'Eke'` are example of values.
If we wrap it in a `console.log()` we should see it in the console.

```js
console.log("Eke");
```

You can have multiple values as well. For example the calculation we did earlier; `console.log(40 + 8 + 23 - 10)` had multiple numbers(values) which was combined with the math operators to give us one single value: `61`

An extremely useful thing is to store data in variables so it can be reusable.

### What is a variable?

Variables are containers for storing values.
In JavaScript, you can store a value in a variable with the assignment operator `(=)`.

**For example:**

```js
let firstName = "Eke";
```

In the code above, we have a container of `firstName` and this container holds or stores a value of `Eke` and now if we want to use this value, all we have to do is to use the variable name; `firstName` in this case.

```js
let firstName = "Eke";

console.log(firstName);
```

Now in other to use the variable, we can do a `console.log()` and the variable name.

```js
console.log(firstName);
```

You can use this variable multiple times in your code, and anytime JavaScript sees the variable `firstName`, it'll replace it with the value we assigned to it.

This is extremely useful because if you want to change the value of the variable, you only have to do it in one place.

**For Example:**
If we change the variable value from **Eke** to **John**, everywhere we referenced the variable will automatically get changed as well.

```js
let firstName = "John";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
```

### Variable Naming Conventions

Now we have know what a variable is, we need to uderstand the rules and conventions for naming variables because we shouldn't use random names for variables.

Variable names are called **identifiers** and can be short names (like x and y) or more descriptive (age, sum, firstName)

#### Camel case

This is a very popular naming convention in JavaScript, which involves writing the first word in lower case and all the next words in uppercase:

**Like so:** `first`, `firstPerson`, `countNumber`. `selectMainUser`. Another popular one is using underscores: `first_name` count_number, ETC.

### Rules in naming variables

There are also some strict rules in JavaScript on how you can name variables.

- You can't start a variable name with a number.

**Example:**

```js
let 2boys = '3';
```

Infact variables names can only contain numbers, letters, underscores and dollar sign.

**Example**

```js
let jonas&Matilda = 'name';
```

This will prompt an error because **&** is not allowed to be used in variable names.

- Another rule is to not start a variable name with an uppercase letter.

**Example**

```js
let Person = "Eke";
```

Though this is not illegal to do, it is just that upper case letters are reserved for a specific use case in JavaScrit Object Oriented Programming.

Starting a variable with uppercase are also reserved for constants that we know will never change.

**Example:**

```js
let PI = 3.14;
```

We know the value of PI will never change, which makes it a constant and the convention for writing contants is using uppercase.

- Writing descriptive variable names
  When writing JavaScript, it is good practice to write our variable names are descriptive. This helps the code to be more readable and will be easy to understand what the variable does just by reading the name.

**For Example:**
This variable name is more descriptive than

```js
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
```

Than writing this.

```js
let job1 = "Programmer";
let job2 = "Teacher";
```

```js
console.log(myFirstJob);
```

### Reserved keywords

You will also encounter errors in your javascript naming if you use reserved keywords like:

- new
- function
- name, ETC.
