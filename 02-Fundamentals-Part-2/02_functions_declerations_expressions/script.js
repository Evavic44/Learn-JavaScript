// Function declaration
function calcAgeOne(birthYear) {
  return 2022 - birthYear;
}

const ageOne = calcAgeOne(1997);
console.log(ageOne);

// Function Expression
const calcAgeTwo = function (birthYear) {
  return 2022 - birthYear;
};

const ageTwo = calcAgeTwo(1997);
console.log(ageTwo, ageOne);
