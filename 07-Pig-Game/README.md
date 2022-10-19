## Build a Pig game using JavaScript

when building a project or functionality, one good practice you can emmulate is creating a flowchart to understand how the project works.

## What are flowcharts?

A flowchart is simply a graphical representation of the functionality of an application. For instance here's a Diagram explaining the functionality of this pig game. You can create flowcharts by visiting [diagrams.net](https://diagrams.net)

![Pig Game fLow chart](./pig-game-flowchart.png)

- The yellow box shows the possible actions a user can take
- The green box shows options that can be chosen when the action has being taken.
- The blue box shows conditions like (true of false) conditions.
- Finally the red box shows the result of a condition.

## Selecting the Elements

As usual we'll store our classes and IDs in variables. In the previous lecture, we learned how to select elements using `document.querySelector()`, but there is a special way of specifically selecing IDs in a webpage and that is:

```js
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
```

But unlike the `querySelector`, we're only passing in the name of the ID without the class selector(`#`).

For the first conditions, we need to set the scores to 0 by default and hide the dice.

```js
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
```

Just like before, we added a hidden class to the element which hides the image from the DOM. Now let's break down the next steps into smaller task. From the functionality flow chart, here are the following things we need to do next:

### Generate a random dice roll

Before we implement our dice roll functionality, we need to select the button and add an `eventListener` so when we click, it will execute that function and then for the random dice roll, we'll use the `Math.random()` function.

And remeber this will generate a number from 0 to almost one so 0 - 0.9999999e, we'll multiply it by 6 and then add 1 to it. Since we want a number without a decimal point, we'll use the `Math.trunc()` function.

### Display the dice

Since we hid the dice earlier by adding the hidden class using the `classList()` property, we'll show the dice by removing the class this time. To show a random dice image, we'll use the `.src()` property to define what image we want to show based on the random generated number.

```js
const currentScore = 0;

btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trun(Math.random() * 6) + 1;

  // 2. Display the dice
  dice.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
});
```

Here `dice` represents the random dice number from 1 - 6. The next step is to write our condition to check if the dice rolled is a 1, if it is, then the score of the current player will be 0 and it will switch to the next player or else, the point gets added to the current score. But we need to capture that current score and not just have it changed on the DOM.

We'll use the let keyword since the current score will be constantly updated and also declare this variable outside of our handler function because we want to persist that value and not have it set to 0 every time the btnRoll function is executed.

```js
// 3. Check for rolled 1: If true
let currentScore = 0;

if (dice !== 1) {
  // Add dice to current score
  // currentScore = currentScore + dice0El; // Can also be written as
  currentScore += dice;
  // display score on current element (on the first player for now).
  current0El.textContent = currentScore;
} else {
  // switch to next player
}
```

### Switcing the players

Next step is switching between the players if the score is 1. In other to do that, we need to capture the player that is currently playing, essentially the active player. To do that, we'll store the value of the active player in a variable and set it to 0 because player 1 is 0 and player 2 is 1.

The reason we're doing this is because we'll store the score of each player in an array and since arrays are zero based, the first score will be at position 0 and second score at positon 1.

With this activePlayer variable, we can now dynamically set the score of the current player and not just for the first player alone.

For the else block, we want to

```js
// 3. Check for rolled 1: If true
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

if (dice !== 1) {
  // Add dice to current score
  // currentScore = currentScore + dice0El; // Can also be written as
  currentScore += dice;
  // display score on current element (on the first player for now).
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
} else {
  // switch to next player
}
```
