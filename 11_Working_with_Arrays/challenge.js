'use-strict';
/*
 ? ------------Coding Challenge 1------------

  Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing wether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

  Create a function `checkDogs`, which accepts 2 arrays of dog's ages (`dogJulia` and `dogKate`), and does the following things:

  1. Julia found out that the owners of the FIRST and the LAST two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's bad practice to mutate function parameters)

  2. Create an array with both Julia's (corrected) and kate's data
  3. For each remaining dog, log to the console wether it's an adult ('Dog number 1 is an adult, and is 5 years old') or a puppy ('Dog number 2 is still a puppy 🐶')
  4. Run the function for both test datasets.

  HINT: Use tools from all lectures in this section so far. 🙂

  TEST DATA 1: 
  -- Julia's data [3, 5, 2, 12, 17], 
  -- Kate's data [4, 1, 15, 8, 3], 

  TEST DATA 2: 
  -- Julia's data [9, 16, 6, 8, 3], 
  -- Kate's data [10, 5, 6, 1, 4], 
  
  GOOD LUCK 🙂
*/

const checkDogs = function (dogJulia, dogKate) {
  const dogJuliaCorrected = dogJulia.slice(1, -2);
  const dogsJoined = dogJuliaCorrected.concat(dogKate);
  console.log(dogsJoined);
  dogsJoined.forEach(function (dogAge, id) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${id + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${id + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 17], [4, 1, 15, 8, 3]);
console.log('TEST DATA 2');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/*
 ? ------------Coding Challenge 2------------

  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

  Create a function `calcAverageHumanAge`, which accepts an array of dog's ages, and does the following things:

  1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

  2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

  3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 🙂)

  4. Run the function for both test datasets

  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3], 
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4], 

  GOOD LUCK 🙂
*/

// function calcAverageHumanAge(ages) {
//   const humanAge = ages
//     .map(age => {
//       if (age <= 2) {
//         return age * 2;
//       } else {
//         return 16 + age * 4;
//       }
//     })
//     .filter(dogs => dogs >= 18)
//     .reduce((accumulator, currentEl, index, array) => {
//       return accumulator + currentEl / array.length);
//     }, 0);
//   return humanAge;
// }

function calcAverageHumanAge(ages) {
  const humanAge = ages.map(age => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });
  const adultDogs = humanAge.filter(dogs => dogs >= 18);
  console.log(adultDogs);

  const avr = adultDogs.reduce((accumulator, currentEl, index, array) => {
    return accumulator + currentEl / array.length;
  }, 0);
  return avr;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
