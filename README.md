<h1 align="center">
<img src="https://user-images.githubusercontent.com/62628408/148223749-153f0206-14c4-433c-a06c-b8197d608800.png" width="100%" alt="JavaScript logo">
</h1>

<p align="center">Documenting my learning journey in JavaScript using The Complete JavaScript Course 2022: From Zero to Expert! by <a href="https://github.com/jonasschmedtmann">Jonas Schmedtman</a></p>

# Resources

- <a href="https://www.udemy.com/course/the-complete-javascript-course/">The Complete JavaScript Course 2022: From Zero to Expert!</a>
- <a href="https://github.com/jonasschmedtmann/complete-javascript-course">GitHub Repository</a>

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
If we wrap it in a `console.log()` we should see in in the console.

```js
console.log("Eke");
```

You can have multiple values as well. For example the calculation we did earlier; `console.log(40 + 8 + 23 - 10)` had multiple numbers(values) which was combined with the math operators to give us one single value: `61`

An extremely useful thing is to store data in variables so it can be reusable.

### What is a variable?

Variables are containers for storing values.

When to Use JavaScript var?
Always declare JavaScript variables with var,let, orconst.
The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
If you want your code to run in older browser, you must use var.

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
If we change the variable value from **Eke** to **John**, everywhere we referenced the variable will automatically get changed to the new **John**.

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
