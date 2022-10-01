"use strict";

// Variables
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Open modal when button is clicked
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", modalOpen);
}

// Close modal and overlay when close button and overlay is clicked
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

// Close modal on Esc key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
