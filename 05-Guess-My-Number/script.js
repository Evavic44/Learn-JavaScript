"use strict";

/*
// Select the p element using class(.) <p class="message"></p>
// You can also use an ID selector.
console.log(document.querySelector(".message"));

// Select the text content of the p elemenet (Start Guessing)
console.log(document.querySelector(".message").textContent);

// Manipulate or change the content of the p element
document.querySelector(".message").textContent = "Correct Number ✅";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// Select and manipulate the content of an input field
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  const audio = new Audio("cheer.mp3");

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Match ✅";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    audio.play();

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number too low 🔽";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😿";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number too high 🔼";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😿";
      document.querySelector(".score").textContent = 0;
    }
  }
});
