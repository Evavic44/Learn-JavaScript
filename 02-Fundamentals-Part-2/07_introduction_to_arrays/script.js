// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

let years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// ["Michael", "Steven", "Peter"];

// friends = ["Bob", "Alice"];

const firstName = "Victor";
const eke = [firstName, "Eke", 2022 - 1997, "Software Engineer"];
console.log(eke);
console.log(eke.length);

const example = ["Name", "Age", friends];
console.log(example);
console.log(example.length);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

years = [1990, 1967, 2022, 2010, 2018];

calcAge(years);

const ageOne = calcAge(years[0]);
const ageTwo = calcAge(years[1]);
const ageThree = calcAge(years[years.length - 1]);
console.log(ageOne, ageTwo, ageThree);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
