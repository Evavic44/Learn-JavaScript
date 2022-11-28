## What is JavaScript (Revisited)

JavaScript is a high level, proptotype based object oriented, multiparadigm, interpreted or just in time compiled, dynamic, single-threaded, garbage-collected programming language with first class functions and a non blocking event loop concurrency model.

### High Level Language

JavaScript is a high level language because you don't have to manage the resources manually. It has built-in abstractions that takes all the work away for us. For example managing the memory. Aside from JavaScript, Python is also a high level language.

Languages like C or C++ are low level so reosource management are done manually.

The difference between a high level and a low level language is that high level languages are easier to write and use but slower or less optimized than the low level ones.

## Garbage Collection

Garbage collection is an algorithm inside the JavaScrit engine that removes unused objects from the computer memory in other not to clog it up with unecessary stuff. Garbage collection is an example of JavaScript managing memory for us.

## Mutli Paradigm

A paradigm in programming is an approach and mindset of structuting code which will direct your coding style and technique. There are three main paradigms, namely:

1. Procedural programming
2. Object oriented programming (OOP)
3. Functional programming(FP)

Other languages follow a single programming paradigm unlike JavaScript that uses all three of them.

> **Note**.
> A paradigm can also be classified into two parts: imperative and declarative

## Prototype-based Object Oriented

Almost everything in JavaScript is an object except for primitive values like `booleans, numbers, string`, etc.

A great way to illustrate this concept is understanding how methods work on arrays. Methods work due to prototype inheritance which is basically a blueprint or prototype that contains all the array methods so when we need a method in our code, it will inherit the method from the blueprint so it is usable.

## First Class Functions

In a language with first class functions(like javascript), functions are simply treated as variables that can be passed into other functions and returned from functions.

### For Example

![first-class-functions](https://user-images.githubusercontent.com/62628408/199624970-abf000d5-0254-4975-9128-9954a9486732.png)

In the example above, we passed a function into another function as an argument. It's a really helpful concept but not available in all languages.

## Dynamically-typed Language

In JavaScript, we don't assign data types to variables, they only become known when the JavaScript engine executes our code. This makes it very easy to manipulate or change in JavaScript. This is different for languages like `C++`, `C#`, `Java`, `Ruby`, etc we have to define the data types manually.

Manually defining the types of data in languages like the ones mentioned above is safer and less prone to bugs. To use JavaScript with types, you can look at `TypeScript`.

## Single Thread & Non-blocking Event Loop

- Concurrency model is how the JavaScript engine handles multiple tasks happening at the same time. This is important because:

- JavaScript runs in one **single thread**, so it can only do one thing at a time. For long-running tasks, this will block the single thread. To achieve non-blocking behaviour:

- We use an **event** loop, which essentially takes long running tasks, executes them in the `background`, and then puts them back in the main thread once they are finished.

# The JavaScript Engine

A JavaScript engine is essentially a program that executes JavaScript code. Every browser has it's own engine but the most popular one is Google's V8 engine.

The V8 engine powers google chrome and also NodeJS; The JavaScript runtime that we can use outside of the browser to run server side code.

Every JavaScript engine contains a call stack and a heap. The call stack is where the code is executed using the execution context. While the heap is an unstructured memory pool that stores all the objects needed by our applications.

![javascript engine - call stack and heap](https://user-images.githubusercontent.com/62628408/199706182-a2f6663f-21dd-4a8f-9f1f-d91b0621e9ba.png)

# Compilation vs Intepretation

Computer processors only understand 0s and 1s which is not humanly readable, so JavaScript has built in compilers that transform JS code into machine code that the computer can understand.

These are esentially the ways in which programs are converted into machine code (0 and 1). The human-readable code we write and understand are called abstractions, and it is an important concept for every programming language.

- In compilation, the entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. For instance, every application on your computer has being compiled`(converted to machine code)` sometime before and you're executing it way after the compilation.

![compilation](https://user-images.githubusercontent.com/62628408/199716120-afe887bd-163b-4327-9511-0f4cf8c726ae.png)

On the other hand:

- In intepretation, the intepreter runs through the source code and executes it line by line. The source code still needs to be converted to machine code, but this happens before being executed not ahead of time.

# Intepreted or Just in Time Compilation

JavaScript is popular termed an intepreted language, but this is not the case. Modern JavaScript uses a mix between compilation and intepretation, which is what we call; `Just in time(JIT) compilation`

![intepretation](https://user-images.githubusercontent.com/62628408/199717968-98a7647e-7531-4070-9983-ff99dceadbc4.png)

- Just in time(JIT) compilation
  This is a mixture between compilation and interpretation. The JavaScript code is first converted into machine code but it doesn't get stored as a portable file, instead it is executed immediately after it's compilation.

![just-in-time-compiation](https://user-images.githubusercontent.com/62628408/199719647-1952979e-395c-4871-850d-3cf6a4078af9.png)

The Just in time compilation

![just-in-time-compiation-diagram](https://user-images.githubusercontent.com/62628408/199721208-927e5ada-0329-47d8-b4af-29185327b9aa.png)

# The JavaScript Runtime

![javascript-runtime-in-browser](https://user-images.githubusercontent.com/62628408/199721867-7434152f-3520-45fa-95c9-3f6585b9d863.png)

# The This Keyword

The this `keyword/variable` is a special variable that is created for every execution context(every function). Takes the value of (points to) the owner of the function in which the `this` keyword is used.

The this keyword is one of the three component of any execution context, along with the `variable environment` and `scope chain`.

Therefore, the value of the `this` is not static, it depends on how the function is called.

- The value of the this keyword is only assigned when the function is actually called. To illustrate this, let's look at the ways in which functions are actually called.

## Four ways functions can be called

### 1. Through Methods

Methods are functions attached to objects so when we call a method, the this keyword points to the object calling the method.

```js
method 👉🏽 this = <Object calling the method>
```

### E.g

```js
const eke = {
  name: 'Victor',
  year: '1997',
  calcAge: function() {
    rerturn 2022 - this.year;
  }
}

calcAge(); // 26
```

In the example above, `calcAge()` is the method and `this` inside the method is `eke` the object. So `this.year` is the same as `eke.year` but doing it this way is a much better solution than `eke.year`

### 2. Simple function calls

Another way we call functions is by calling them as normal functions so not as methods(not atttached to any object).

In this case, the `this` keyword will be undefined but only on `strict mode` otherwise, the `this` keyword will point to the global object(window object in the browser).

```js
Simple function call 👉🏽 this = undefined
```

### 3. Arrow Functions

Arrow functions are not exactly a way of calling functions but it is an essential function to consider. Remember arrow functions do not contain the `this` keyword.

If you use the `this` keyword in an arrow function, it will simply be the this keyword of the surrounding(parent) function.

In technical terms, this is called the `lexical keyword` because it gets picked up from the outer lexical scope of the arrow function.

```js
Arrow Functions 👉🏽 this = <this of surrounding function (lexical this)>
```

### Always Remeber

> Arrow functions do not get their own this keyword.

### 4. Event Listener

When the function is called as an `Event Listener`, the this keyword will be the `DOM element` the handler function is attached to.

```js
Event Listener 👉🏽 this = <DOM element that the handler is attached to>
```

### Note

The `this` keyword in arrow functions does not point to the function itself, and also does not point to it's variable environment.

Finally, it's good to note that there are other ways of calling a function like using the `new, call, apply, bind` methods.

# The This Keyword in Practice

- If you run the this keyword alone outside of a function, the result will be the global(window) object.

E.g

```js
console.log(this);
```

- If the `this` keyword is executed in a regular function, the result will be undefined.

E.g

```js
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(); // Result = undefined
```

Note that a regular function is referred to a function that isn't attached to any object.

- Next up if you run the `this` keyword in an arrow function, the result will be the window object, same as when we run it outside of a function, and this happens because the `this` keyword in an arrow function points to the lexical scope, which in this case is the parent scope. And since the parent scope is the window object, this keyword in an arrow function will be the same.

```js
const calcAge = (birthYear) => {
  console.log(birthYear - 2022);
  consol.log(this);
};

calcAge(1997); // result = window object
```

- In using the `this` keyword in an object, the result will be the object calling the function. For example:

```js
const eke = {
  year: 1997,
  calcAge: function () {
    console.log(this);
  },
};
eke.calcAge();
```

This here will be the object `eke` itself.

With this we can do some opertion using the this keyword.

```js
const eke = {
  year: 1997,
  calcAge: function () {
    console.log(2022 - this.year);
  },
};
eke.calcAge();
```

This will give us `25` because we used the `this` keyword to get the year property in the object. So `eke.year === this.year`.

Another important concept to understand is that the `this` keyword points to the method in which it is called and not to the object in which the method was written.

In the example above, the `calcAge` method was written inside the `eke` object but that is not the reason why the `this` keyword points to the `eke` object. Rather it is because we called the `calcAge` method with the `eke` object.

What this means is that any object that calls the method, will be the object the `this` keyword is attached to. Even if the method was not written inside it.

### Example

```js
const matilda = {
  year: 2017,
};

matilda.calcAge = eke.calcAge;
```

Here we created a new object called `matilda` and then assigned the value of `eke.calcAge` to `matilda.calcAge`. Since functions are simply values, the calcAge function will be assigned to `matilda` as well.

And now if we call `calcAge` with `matilda`, the result will be `5`.
This means in this method call, the `this` keyword now points to `matilda`.

This example explains why the `this` keyword is dynamic, it's not static and it depends on how the function is called.

Another example is when we call the `calcAge` function without any object. For example:

```js
const f = eke.calcAge;
f(); // undefined
```

We get undefined because `f` is not attached to any object. It is just an ordinary function and since the `this` keyword is undefined in an regular function, the result of `f` will too be undefined.

# Regular Functions vs Arrow Functions

There are a few pitfalls related to using the `this` keyword in regular functions and arrow functions that require mentioning.

```js
const eke = {
  firstName: "Victor",
  year: 1997,
  calcAge: function () {
    console.log(2022 - this.year);
    console.log(this);
  },

  greet: () => console.log(`Hey, ${this.firstName}`),
};

eke.greet();
```

In the code example above, the result of calling the greet method —which is an arrow function is undefined. Because remember an arrow functions does not get it's own `this` keyword, it will then use the `this` keyword from the global scope. In this scenario, `firstName` is not in the global scope therefore, the result will be `undefined`.

This can be quite dangerous in a situation `var` is used to create variables because variables declared with `var` creates properties on the global object.

```js
var firstName = "Matilda"; // Result of eke.greet will now be Hey, matilda
```

The reason this happens is because `this` keyword points to the window object in the `greet` method, and since `firstName` was declared as Matilda using the `var` keyword, `this.firstName` will now produce Hey, Matilda.

This is another good reason to not use the `var` keyword to declare a variable. From this example, the big takeaway is to not use an arrow function as a method but normal functions. Just following this rule will prevent the bug we illustrated in the example above.

Another final example of one of the pitfalls of using the `this` keyword is when we have a function inside a method.

# Primitive vs Objects (Primitive vs Reference Types)

Primitive values inclues:

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Objects
Everyting else are basically objects

- Object literal
- Arrays
- Functions
  and many more..

For the sake of memory management, we refer to primitive as primitive types and objects as refrence types.
Primitive types are stored in the `Call stack` while refrence types are stored in the `Heap`.

It's a misconceptionn that all variables declared with the `const` keyword are immutable. However this is only true for primitive values but not for refrence values.

# Primitive vs Objects in Practice
