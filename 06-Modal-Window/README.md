## How to create a simple modal with JavaScript

Modals are example of pop-up menus we see in modern websites and web applications like Facebook and Twitter.

## Modal Functionality

This is super simple, we're simply going to show the modal using the DOM in JavaScript when the button is clicked. In other to do that, we need four classes, the button class `btn`, the modal class `modal`, the X class for `close` and finally the `overlay`.

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".showOverlay");
const btnShowModal = document.querySelector(".show-modal");
const btncloseModalBtn = document.querySelector(".close-modal");
```

We've stored each of the values in variables, so we can now reuse them. The variables are not strict so you can change them up if you want.

Since we have three buttons, using `document.querySelector` will only select the first one. In other to select all of them, we use the `document.querySelectorAll` method.

```js
document.querySelectorAll(".show-modal");
```

In the console, youc an see this stores all the buttons in something called a `NodeList`. This NodeList may work like an array but it is not technically an array. To use the buttons in the NodeList, we use the `for()` loop.

```js
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
}
```

This will log to the console all the text content of the buttons.

## Manipulating classes with JavaScript

For the next step, we'll add an event listener that handles the click event of the button. This event handler takes in an anonymous function (A function without a name) and inside the function, we'll have the code we wish to execute which is to remove the `hidden` class from the modal and overlay.

```js
for (let i = 0; btnOpenModal.length; i++) {
  btnOpenModal.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
```

So we selected the modal element and then added a classList which takes in different methods. We used the `.remove()` method to remove the `"hidden"` class from both the modal and the overlay.

> **Warning**
> Observer that we did not add the dot to the hidden class. That is because the classList already assumes the keyword to contain the `.` so we don't need to add it. Just specify the name of the class without the dot.

Now if we click the modal button, we should see the modal pop-up.

![Screenshot of modal working](https://modal.png)

If we check the console, you'll notice the hidden class is no longer available on the console because we removed it using the `.remove()` method.

The classList object also has the `add()` method which we'll use to add the hidden class when we click the X button. Just like we addded an `eventListener` to the button to close the modal, we'll do the same to the x button but this time, we'll add the `hidden` class back.

```js
closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
```

## Close modal when overlay is clicked

Usually modals are closed when we click outside of box or on the body of the webpage. To do that we'll also add the hidden class when we click on the overlay.

```js
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
```

## Refactoring

We've succesfully created our modal component and it works just as intended. However, it is good to enforce the Don't repeat yourself(DRY) principle and since we repeated the `closeModalBtn` and `openModal` function. To fix this, we'll convert the anonymous functions into a named function that way it can be reusable.

```js
// Close Modal function
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", modalClose);
closeModalBtn.addEventListener("click", modalClose);
```

We can do the same for the open modal.

```js
// Open Modal function
const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", modalOpen);
}
```

Now our code is a lot better and much cleaner.

This example is the most common way of manipulating styles in webpages using JavaScript, however you can also use the DOM styles instead.

```js
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
```

But this is not good practice because it injects the display none to the modal and overlay elements directly. So stick to using the `classList` object.

## Handle events on keypress

Aside from closing the modal when we click the close button and overlay, we can also add an event listener to listen for keyboard events.

Keyboard events are also known as global events because they do not happen on one specific element. So for global events like the keyboard event, we usually listen on the whole document.

```js
document.addEventListener("keydown");
```

Here for the name of the event, aside from the "click" event, we also have other events like, keypress, keydown and keyup. In our use case we want this event to be fired-up when we press down on the key, so we used the `keydown` event.

Doing this alone will fire up the event when we press on any key, but we want that on the <kbd>Esc<kbd> key only.

Anytime an event happens, JavaScript generates an object which contains all the information about that event. So we can access that object and use it anywhere we like.

To do that, we'll pass in a parameter to our function. A common event name you'll see is the letter `e` which stands for event. But of course the name doesn't matter, you can use anything you like.

```js
document.addEventListener("keydown"),
  function (e) {
    console.log(e);
  };
```

If we press on any key and check the console, we'll an object generated by JavaScript that contains information about the key we just pressed.

For example, here's what we see when the Enter key is pressed.

```js
keydown { target: body, key: "Enter", charCode: 0, keyCode: 13 }
// ...
```

What is most important to us is the `key` property. And just like objects, we can use the dot notation to get the property of an object.

```js
document.addEventListener("keydown"),
  function (e) {
    console.log(e.key);
  };
```

Now when the enter key is pressed again, we get only the key which is `Enter`. With this information, we can write a simple condition to close the modal when the key is pressed.

```js
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalClose();
  }
});
```

But we only want the Escape key to work when the key pressed is the escape key and the "hidden" class has being removed, so to do that, we'll combine the AND `&&` & NOT `!` operator write our condition.

```js
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
```

This condition is simply checking if the current key pressed is the escape key and the modal does not contain(written as "contains") the `hidden` class, we want to add the hidden class, in essence, close the modal.

Now when the modal is open and we hit the <kbd>Esc</kbd>, it will close the modal.
