'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  e.preventDefault();
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
-------------------------------------------
---------------- Tutorial -----------------
-------------------------------------------
*/
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Creating and Inserting Element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved funtionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// header.prepend(message); // add as the first child of the header element
header.append(message); // add as the last child of the header element
// header.append(message.cloneNode(true)); // allows multiple append.
// header.before(message.cloneNode(true)); inserts element before header.
// header.after(message.cloneNode(true)); inserts element after header.

// Delete elements
const cookieClose = document.querySelector('.btn--close-cookie');
cookieClose.addEventListener('click', () => message.remove());
// cookieClose.addEventListener('click', () => message.parentElement.removeChild(message)); old way of removing elements

// 🔸Styles, Attributes and Classes🔸
message.style.height = '80px';
message.style.backgroundColor = '#333333';
message.style.width = '120%';

// Read Styles
console.log(message.style.height); // fetches styles added inline
console.log(message.style.backgroundColor); // fetches styles added inline
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 60 + 'px';

// Custom properties
document.documentElement.style.setProperty('--color-primary', 'orangered');
console.log(document.documentElement.style.getPropertyValue('--color-primary'));

// Attributes
const logo = document.getElementById('logo');
console.log(logo.getAttribute('aria-hidden'));
logo.setAttribute('motion-blur', 'disabled');
logo.alt = 'This is not a logo 🤡';

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionLength);

// Classes
logo.classList.add('c', 'j'); // add multiple classes
logo.classList.remove('c');
logo.classList.toggle('c');

// Overwrites current classes
logo.className = 'jonas';

// Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());
});
