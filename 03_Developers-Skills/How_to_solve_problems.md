## How to effectievly solve problems

1. Make sure you 100% understand the problem. **Ask the right questions** to get a clear picture.

### Example

**💬Project Manager: We need a function that reverses whatever we pass into it.**

**Questions**

- What does "whatever" even mean in this context? What should be reversed?
  **Answer:** Only strings, numbers, and arrays make sense to reverse

- What to do if something else is passed in?
- What should be returned? Should it always be a string, or should the type be the same as passed in?
- How to recognize wether the argument is a number, a string, or an array?
- How to reverse a number, a string, and an array?

2. **Divide and Conquer**: Break a big problem into smaller sub-problems.

### Sub problems:

- Check if arugment is a number, a string, or an array
- Implement reversing a number
- Implemement reversing a string
- Implement reversing an array
- Return reversed value

3. Don't be afraid to do as much **research** as you have to.

### Example

- How to check if a value is a number in JavaScript.
- How to check if a value is a string in JavaScript.
- How to check if a value is an array in JavaScript.
- How to reverse a number in JavaScript.
- How to reverse a string in JavaScript.
- How to reverse an array in JavaScript.

4. For bigger problems, **write pseudo-code** before writing the actual code.

```
Sudo code is an informal description of the actual code we need to write that humans can understand.
```

```js
function reverse(value)
if value type !string && !number && !array
return value

if value type == string
reverse string

if value type == number
reverse number

if value type == array
reverse array

return reversed value
```

## What is a Software Bug?

A bug is a defect or problem in a computer program. Basically, any **unexpected or unintended behavior** of a computer program is a software bug.

Bugs are **completelty normal** in software development.

### Debugging

This is the process of finding, fixing and preventing bugs.

### 1. INDENTIFY

Ways bugs are indentified.

- During development.
- Using testing software.
- User reports during production.
- Context browsers, users, etc.

### 2. FIND

- Developer console (simple code).
- Debugger (complex code).

### 3. FIX

- Replace wrong solution with new correct solution.

### 4. PREVENT

- Searching for the same bug in similar code.
- Writing tests using testing software.

## Debugging with the console and Breakpoints

We have other `console` funtions

```js
console.log(); // normal result
console.warn(); // for showing result as warnings
console.error(); // for showing results as errors
```

We also have another special `console` function

```js
console.table();
```

This is used for showing objects in a tabular format. Pretty handy for bigger objects.
