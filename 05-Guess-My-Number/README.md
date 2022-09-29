## What is DOM and DOM Manipulation

DOM stands for **Document Object Model** which is a structured representation of HTML Documents. The DOM allows us to use JavaScript to access HTML elements and styles to manipulate them.

For example, we can change text, HTML attributes and even CSS styles. In summary, you can say the DOM is the connection point between HTML documents and JavaScript code.

The DOM is automatically created by the browser as soon as the HTML page loads, and it is stored in a tree like structure.

For example, here's a basic structure of a HTML document and what the corresponding DOM tree looks like:

```HTML
<html>
  <head>
    <title>A Simple Page</title>
  </head>
  <body>
    <section>
      <p>Paragraph with <a>Link</a></p>
      <p>A second paragraph</p>
    </section>
    <section>
      <img src="dom.png" alt="The DOM" />
    </section>
  </body>
</html>
```

![dom-tree](https://user-images.githubusercontent.com/62628408/190997064-0f5c948c-a986-4a97-aef3-5f385927877d.png)

- The DOM always start with the `Document` object at the top of the tree, and it serves as an entry point to the DOM. For example `document.querySelector()`

- The first child element of document is the `HTML` element.
- The HTML elements has two child elements: `Head` and `Body`
- The Head and Body elements also have child elements and it goes even deeper.

## Dom !== JavaScript

The methods and properties that can be used to manipulate the DOM like: `document.querySelector()` and more are not a part of JavaSscript, there are part of what we call WEB APIs.

These APIs are libraries that browsers implement we can access from JavaScript. Asides the DOM, there are a ton of other APIs like Timers, Fetch, etc.

## Selecting and Manipulating elements

Select the p element using class `.` `<p class="message"></p>`

```js
console.log(document.querySelector(".message"));
```

You can also use an ID selector. As long as it matches with the one in the HTML document.

```js
console.log(document.querySelector("#message"));
```

Select the text content of the p elemenet.

```js
console.log(document.querySelector(".message").textContent);
```

Manipulate or change the content of the p element

```js
document.querySelector(".message").textContent = "Correct Number ✅";
```

Select and manipulate the content of an input element.

```js
document.querySelector("number").value;
document.querySelector("number").value = 23;
```

In this section, we've seen how to select and manipulate some HTML elements using the DOM API.

- Text: `.textContent`
- input: `.value`

## Handling Click Events

In other to make our application do something when a button is clicked, we need to use an `Event Listenter`

An Event is something that happens on the page like: mouse click, mouse scroll, page load, key press, and many more. With an Event Listener, we can wait for a certain event to happen and react to it.

The Event Listener uses a method called `addEventListener` to check for events. As usual, we'll use the querySelector method to select the element we want to attach the event to, and then the event listener method. There are other ways to attach an event listener to an element but this is the most common way.

Next we need to pass in the type of event `(click)` and finally what we want the event to do, and that can be done by defining a function. Basically, this function will run whenever we click on the button.

This function is known as an event handler. It is a special kind of function that will be passed into the `addEventListener` as a parameter, and then inside the function, we'll write the code we want to run.

```js
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
```

Also, note that we did not call this function, the JavaScript engine is responsible for calling this function as the event happens.

By default, the result of the input filed will be a string, but since we're expecting a number, we can convert that using the `Number()` function.

For the logic, we need to check if there is a value in the input field, and we'll do that using an if/else statement.

So we're going to check if there is no value and to do that, we use the Not `(!)` operator to convert the number to true`(!guess)`, we can print a response. If the input is empty or 0, it is treated as a falsy value(0 is a falsy value).

```js
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";
  }
});
```

## Implementing the game logic

This is simply Implementing how the game works and this is broken down into three conditions:

1. What happens when the guess is correct, so equal to the secret number.
2. What happens when the guess is too low
3. What happens when the guess is too high.

To start, we need to define the secret number, and we'll do this outside of the button handler because if we do it inside, everytime the button is clicked, it will generate a new number which defeats the whole purpose of the game.

To get the random secret number, we'll use the `Math` object which has methods we can use like `.random()`, and this gives us a number between 0 and 1. To get a number between 0 and 20, we multiply the object with 20.

```js
Math.random() * 20;
```

By default, these numbers have decimal points so to remove that, we'll use another Math object method `Math.trunc`.

```js
Math.trunc(Math.random() * 20);
```

Also, the random number will never give us 20 but will stop at 19 or 19.99999. To fix that, we'll add 1 to it.

```js
Math.trunc(Math.random() * 20 + 1);
```

So this will be our secret number.

Next, we can add that

## Coding Challenge

Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the `again` class and attach a click event handler.
2. In the handler function, restore initial value of the score and secretNumber variables.
3. Restore the initial conditions of the `messgae`, `secretNumber`, `score` and `guess` input field.
4. Also restore the original background color `(#222)` and number width `(15rem)`
