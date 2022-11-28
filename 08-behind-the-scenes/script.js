"use strict";
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1997);

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const eke = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
eke.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = eke.calcAge;
matilda.calcAge();

const f = eke.calcAge;
f() */ // Regular functions vs Arrow functions
var firstName = "Matilda";

/* const eke = {
  firstName: "Victor",
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2
    const isMillenial = () => {
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

eke.greet();
eke.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 4, 6); 
*/

// Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Victor",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(friend);
console.log("Me", me);

// Primitive Types - Call Stack
let lastName = "Williams";
let oldName = lastName;
lastName = "Davis";
console.log(lastName, oldName);

// Refrence Types - Heap
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: "27",
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marraige", jessica);
console.log("After Marraige", marriedJessica);

// marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: "27",

  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before Marraige", jessica2);
console.log("After Marraige", jessicaCopy);
