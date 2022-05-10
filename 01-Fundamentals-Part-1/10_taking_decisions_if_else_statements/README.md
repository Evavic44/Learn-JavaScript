
## 13. Conditional Statements - if else

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
