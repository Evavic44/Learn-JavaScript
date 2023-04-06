'use strict';

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

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if the dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

// const recommendedFood = weight ** 0.75 * 28;

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);
console.log(dogs);
console.log(sarahDog);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(owner => owner.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(owner => owner.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
const checkExactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(checkExactFood);

// 6.
const okayAmountFood = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayAmountFood);

// 7.
const okayFoodArray = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayFoodArray);

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
