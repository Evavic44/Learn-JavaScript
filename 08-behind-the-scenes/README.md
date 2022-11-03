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
