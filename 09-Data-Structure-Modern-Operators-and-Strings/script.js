"use strict";

// 🔸Destructuring Arrays🔸
/* 
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo, Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(`Test`, nested);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// 🔸Desructuring Objects🔸
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo, Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring objects within methods (lots of parameters)

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 1,
    time = "19:30",
    address = "Dublin, England",
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is yout declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// Calling orderDelivery method with new object parameters
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// Calling orderDelivery method with only two parameters, the missing parameters will be gotten from the default values
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing object names using variables.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables in objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(obj);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);

/* 🔸Spread Operators🔸
The spread operator (...) is used to quickly copy all or part of an existing array or object into another array or object.
*/
let arr = [7, 8, 9];
console.log(arr);

const bad = [1, 2, arr[0], arr[1], arr[2]];
console.log(bad);

// Copy the arr array and add it to the good array
const good = [1, 2, ...arr];
console.log(good);

// Also used for passing arguments into functions
console.log(1, 2, 7, 8, 9); // ⛔
console.log(...good); // ✅

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

/* 
? Difference btw spread operator and destructuring is that  spread operators does not create new variables. It can only be used in places where values are seperated by commas.
*/

// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menus);

// Iterables: arrays, strings, maps, sets, NOT objects

const str = "Eke";
const letters = [...str, "", "S"];
console.log(letters);

// Spread operators can only be used when building an array or when values are passed into a funciton.
// console.log(${...str} 'Victor'); Will not work

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name, restaurant.name);
