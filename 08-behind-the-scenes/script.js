"use strict";

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
// f();
