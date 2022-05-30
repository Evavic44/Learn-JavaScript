// Arrow Function
const calcAgeThree = (birthYear) => 2022 - birthYear;

const ageThree = calcAgeThree(1997);
console.log(ageThree);

// const yearsTillRetirement = (birthYear) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;

//   return retirement;
// };

// console.log(yearsTillRetirement(1997));

const yearsTillRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsTillRetirement(1997, "Eke"));
console.log(yearsTillRetirement(1993, "John"));
