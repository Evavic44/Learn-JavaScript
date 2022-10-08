## Build a Pig game using JavaScript

when building a project or functionality, one good practice you can emmulate is creating a flowchart to understand how the project works.

## What are flowcharts?

A flowchart is simply a graphical representation of the functionality of an application. For instance here's a Diagram explaining the functionality of this pig game. You can create flowcharts by visiting [diagrams.net](https://diagrams.net)

![Pig Game fLow chart](./pig-game-flowchart.png)

- The yellow box shows the possible actions a user can take
- The green box shows options that can be chosen when the action has being taken.
- The blue box shows conditions like (true of false) conditions.
- Finally the red box shows the result of a condition.

## Building the game

As usual we'll store our classes and IDs in variables. In the previous lecture, we learned how to select elements using `document.querySelector()`, but there is a special way of specifically selecing IDs in a webpage and that is:

```js
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
```

But unlike the `querySelector`, we're only passing in the name of the ID without the class selector(`#`)

For the first conditions, we need to set the scores to 0 by default and hide the dice.

```js
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
```
