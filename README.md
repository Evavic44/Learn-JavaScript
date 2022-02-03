<h1 align="center">
<img src="https://user-images.githubusercontent.com/62628408/148223749-153f0206-14c4-433c-a06c-b8197d608800.png" width="100%" alt="JavaScript logo">
</h1>

<p align="center">Documenting my learning journey in JavaScript using The Complete JavaScript Course 2022: From Zero to Expert! by <a href="https://github.com/jonasschmedtmann">Jonas Schmedtman</a></p>

# Resources

- <a href="https://www.udemy.com/course/the-complete-javascript-course/">The Complete JavaScript Course 2022: From Zero to Expert!</a>
- <a href="https://github.com/jonasschmedtmann/complete-javascript-course">GitHub Repository</a>

## Books and Articles.

- <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a> by <a href="https://twitter.com/MarijnJH?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Martin Haverbeke</a>

## What is JavaScript?

JavaScript is a High level, object oriented, multi-paradigm programming language.

- A programming language is a tool that allows one to write code that will instruct a computer to do something.
- JavaScript is a high level language, which means that we don't have to worry about a lot of stuffs like managing a computer's memory wile it runs. Which makes JavaScript easier to write and learn.
- JavaScript is object oriented which means the language is mostly based on objects for storing data.
- JavaScript is also a multi paradigm language meaning that it is os flexible and versartile that we can use all kinds of different programming styles. And this styles are just ways of structuring our code.

## What do we use JavaScript for?

Javascript is used to add dynamics and effects to a webpage. Manipulate content (HTML & CSS), load data from remote servers and to build entire applications in the browser, which we call web apps.

Also, JavaScript can also run outside of web browsers. For e.g It is possible to use JavaScript on the web server using a very popular technology called NodeJS which doesn't need any browser at all and this allows us to create backend applications which are simply applications that run on a web server and to interact with databases, ETC.

## JavaScript Releases

<img src="https://user-images.githubusercontent.com/62628408/148416609-79709ae1-9fa5-4058-82d0-0de7e28a7bcb.png" width="100%">

There has been a huge update to the JavaScript language in 2015 which is oficially called ES2015 but porpularly called ES6, because it was the update that came after ES5. Also new releases has been introduced after the ES6 update which encapsulates everything we call Modern JavaScript.

You can also use JavaScript to build native mobile applications as well as native desktop applications thanks to tools like React native, Ionic Framework and Electron.

Now you understand how powerful JavaScript is and what it is used for, let's move on to other stuff.

## How to link a JavaScript File

Usually when building frontend applications, JavaScript is attached to web pages. So our JavaScript needs to be attached to a HTML documnet.

### Inline Linking

This involves writing JavaScript code inside the head of the HTML document. To do that, we can use the dedicated html tag which is the <script></script> element.

Now run the previous code we saw in Hello_Js.

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!');
</script>
```

**Note**
In JavaScript, you usually add a semi-colon(;) at the end of each line, this will let JavaScript know we are done with that line. Sometimes you might see people omit this semi-colon because it is not mandatory, but it is good practice to add it, plus it makes your code look neat.

So we have added our code inside the script tag and now if we open up the `index.html` file, our JavaScript program should give us an alert that says.

> JavaScript is FUN!

You can also add the mathematical calculations in our code.

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!'); 40 + 8
  + 23 + 10;
</script>
```

In order to execute the mathematical operation, we simply need to use a function: `console.log` to tell JavaScript to execute the operation to the console.

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!'); 40 + 8
  + 23 + 10; console.log(40 + 8 + 23 + 10);
</script>
```

### External linking

Usually when writing code, you want to seperate the logic from the content. Which means our JavaScript code should be in a seperate JavaScript file.

So create a new file for your JavaScript code and to link it to the html file, we can use the script tag to link it. `<script src="location of file"></script>`
This code is usually added to the bottom of the body tag.

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

### When to Use JavaScript var?

Always declare JavaScript variables with var, let, or const.

- The var keyword is used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- Var supports older browsers.

## Data Types

In every programming language, values can have different types depending on the type of data we want them to hold. Earlier we looked at string and numbers but there are other data types.

In JavaScript, every value is either an **object** or **primitive** data type.

<!--Screenshot of values types-->

### The 7 Primitive Data Types

### 1. Number:

Floating point numbers are used for decimals and integer.

```js
let js = 23;
```

The value 23 is actually the same as saying 23.0 even though we didn't specify it.

### 2. String:

Strings are sequence of characters used for texts. When using strings, always put them in quotes, wether single or double quotes and backtics **``**. If you don't, JavaScript will confuse it for variable names.

```js
let firstName = "Eke";
let lastName = `Tom Cruise!`;
let hobby = "Programming and coding!";
```

### 3. Boolean

Boolean are logical types that are used for providing two possibilities like: **true** or **false**, **yes** or **no**. So Booleans are mostly used in making decisions.

```js
let fullAge = true;
console.log(fullAge);
```

Now on the console we would see fullAge value is set to true.
In JavaScript, there is a logic you can use to show the type of value of a particular variable. This logic is called `typeof`

```js
let fullAge = true;
console.log(fullAge);

console.log(typeof fullAge);
```

Now when we check the console, we will see the data type of **fullAge**, which is a Boolean.

These values types mentioned above are the 3 main value types you'll use the most, but there are still 4 more value types which might be a bit convincing.

### 4. Undefined:

These are values taken by a variable name but is not yet defined('empty value'). In other words, these are variables that have been declared but haven't being assigned a value. For Example:

```js
let children;
console.log(children);
```

As you can see the variable **children** has been declared but has not being assigned a value, in other words, undefined.

If we use the `typeof` operator, we will get an undefined type in our console and an undefined `typeof`.

```js
let children;
console.log(children);
console.log(typeof children);
```

### 5. Null:

This also means 'Empty value', but is used in different circumstances, which we'll look at sometime later.

### 6. Symbol(ES2015)

This data type simply means, value that is unique and cannot be changed. _(Not useful for now)_

### 7. BigInt (ES2020)

These data types is used for large integers that the `number` data type can't hold. So it's basically another type for numbers.

## Dynamic Typing

It's also good to know that JavaScript has a feature called dynamic typing which means when you create a new variable, you don't need to define the data type of the value of that variable. This is a feature unique to JavaScript as other languages will require you to determine the data type.

This distinction between data and the variable is pretty important because in JavaScript, it's the value that has the type, not the variable.

Another important thing to note about dynamic types is that variables can be assigned a new value with a different data type without any problems.  
**For Example**

Variable `X` can intially be a number and then later, a string.

Just like we did before, we can re-assign a new value to a variable we created.

```js
children = 20;
console.log(typeof children);
```

Now when we check our console, we can see the type of `null` we had earlier has been changed to `number` This is the power of dynamic typing in JavaScript.

**Error/bug in typeof**
When we use the `typeof` function to check the data type of an empty variable, the result in the console was **Undefined**, because we did not define the variable, now when we try to check the `typeof` of `null`, we get an error like so.

```js
console.log(typeof null);
```

The console sees the typeof as an **object** This is an error/bug that has not being fixed in JavaScript for legacy reasons. This is an error because `null` is not an object and should return `null` as `null` just like we had `undefined` return as `undefined`.

## 9. Let, Const, Var

There are basically 3 main ways of declaring a variable, which includes:

- let
- const
- var

`let` and `const` were both introduced in ES6 so they are modern JavaScript while the `var` keyword is the old way of declaring variables. Let's learn the differences and which one to use in which situation.

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

This was the old way of declaring variables before (ES6) was introduced in 2015. Even though it is not recommended to use the `var` keyword in this time, it is still good to understand how it works for legacy reasons because you may see this in older codebases or tutorial online.

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

We use these operators to produce `BOOLEAN` values.

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

## 🎉Coding Challenge 1

```
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height \*_ 2 = mass / (height _ height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
```

## Solution

```js
// --------- TEST DATA 1 ------------
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);

const markHigherBMIs = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBMIs);

// --------- TEST DATA 2 ------------
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBMI);
```

## Strings & Template Literals

Strings are a very important part of programming and this section will understand what template literals is and how to build strings better and faster.

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

```js
const firstName = "Eke";
const job = "Software Developer";
const birthYear = 1991;
const year = 2021;
```

Now let's concatenate these variables to build a string using quotes.

```js
const eke = 'I'm '
```

The above expression posses a challenge because when using words like I'm or Isn't (basically words that requires you to use single quotes), it won't work because the single quotes you're using with `'I'm` will finish the string.

So in other to use the single quote, we'll have to switch to double quotes for outlining the strings.

```js
const eke =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(eke);
```

We can see this is a pain to write and we have to manage the spacing between each string and text. This brings us to our topic **"Template Literals:"** which is an easy way of writing strings in a normal way and then insert variables directly into the string.

So basically a template literal can assemble multiple pieces in one final string.

**Example:**
To write a template literal, we use a backtick to assemble the strings. In other to add the variable, we'll add the variable in a curly braces and a dollar sign before it. `${variable}`

```js
// Template literals
const ekeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ekeNew);
```

You can see this is easier and shorter to write. No need for adding the plus signs to concatenate the strings.

We can also use the backticks for regular expressions of strings.

```js
console.log(`This is Just a string...`);
```

Many developers adopt this method of using backticks instead of single or double quotes when defining strings, this is a choice you can make, if you want.

Another good use of template literals is to create multi lined strings. Before ES6, we needed to add a `\n\` to create a new line.

<!-- Multi lined strings (ES5) -->

```js
console.log(
  "String with \n\
multiple \n\
lines"
);
```

<!-- Multi lined template string (ES6) -->

```js
console.log(`String with
multiple
lines`);
```

## Conditional Staements - if else

Conditional statements are used to perform different actions based on different conditions.

Very often when you write code, you want to perform different actions for different decisions.

### if statement

The `if` statement is used to specify a block of JavaScript code to be executed when a condition is true.

**For Example**

```js
if (condition) {
  // condition is a boolean
  // Execute this code if condition is true.
}
```

Now let's write a program that checks if a person is allowed to start taking a drivers license or not. And if not, it will print how many years are left until the person can start taking their drivers license.

```js
const age = 19;
const requirement = age >= 18;
if (requirement) {
  console.log("Sarah can have her driving license 🚗");
}
```

This will execute the command because the result is `true` because Sarah is 19 years old. But if we make Sarah 15 years the result will be false because the required age is 18.

Now let's write an `else statement that will print when the result is false.

### else statement

The else statement is basically a block of code to be executed if the condition is false.

```js
if () {

}  else (condition) {
   // Execute this code if the condition is false.
}
```

```js
const age = 16;

if (age >= 18) {
  console.log(`Sarah can start her driving license! 🚗`);
} else {
  const requirement = 18 - age;
  console.log(
    `Sarah is too young. Wait another ${requirement} more year(s) 👶🏾`
  );
}
```

The Else block is not compulsory, if the condition of a code block is `false`, it will not output any code.

Now the combination of the `if` and `else` statement is called a control structure. And this is reffered to as a structure because it allows us to have more control of the way the code is executed. For example, with the `if, else` statement, we specified the code blocks that should execute and the one that shouldn't, this gives us more control over how the code works.

There are more control structures, but we'll be discussing more about that in the future.

Let's see another example. In this example, we'll write a code that detects what century a person falls into using their year of birth.

```js
const birthYear = 1997;
let century;

// Person was born below or at year 2000.
if (birthYear <= 2000) {
  century = 20; // if true, execute 20th century
} else {
  century = 21; // if false, execute 21st century
}

console.log(century);
```

It is good to note that, any variable defined inside a code block will not be accessible outside of the code block.

## 🎉Coding Challenge 2

```
Use the BMI example from Challenege #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's BMI (23.9)!"

Hint: Use an if/else statement. 😉

GOOD LUCK 🤩
```

## Solution

```js
// TEST 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TEST 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}
```

## Type Conversion and Coercion

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
n = n - 1;
console.log(n); // n = 10
```

```js
console.log(2 + 3 + 4 + "5"); // result will be "95"
```

```js
console.log("10" - "4" - "3" - 2 + "5"); // Result will be "15";
```

## Truthy & Falsy Values

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
console.log(Boolean(0)); // With a number = false
console.log(Boolean(undefined)); // With undefined  = false
console.log(Boolean("Eke")); // With a string = true
console.log(Boolean({})); // With an empty object = true
console.log(Boolean("")); // With an empty string = false
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

In the example above code, height is undefined, because we didn't assign it any value yet and we know from the list we shared earlier, undefined is a falsy value, the height will be converted to a Boolean and the else block will be executed.

If we assign a value to the height, this will execute the if `statement`

```js
let height = 100;
```

But we may run into problems with this. For example, if the `height: 0`, (which is a falsy value) the output will be the `else` block. And this is a bug in our code because we didn't account for the height to be 0 and the result is undefined even though that is not true.

However we can fix this using something called `logical operators` which we'll check later.
