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

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
