// Drivers license check
const age = 19;
const isOldEnough = 18;

if (age >= 18) {
  console.log(`Sarah can start her drivers license. 🚗`);
} else {
  const requirement = isOldEnough - age;
  console.log(`Sarah is too young. Wait ${requirement} more years. 👶🏾`);
}

// Century
const birthYear = 1997;
let century;

if (birthYear <= 2000) {
  // Person was born below or at year 2000.
  century = 20; // if true, execute 20th century
} else {
  century = 21; // if false, execute 21st century
}
console.log(century);
