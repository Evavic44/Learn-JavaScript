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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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
? Difference btw spread operator and destructuring is that spread operators does not create new variables. It can only be used in places where values are seperated by commas.
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

//? Spread operators can only be used when building an array or when values are passed into a funciton.
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

// 🔸Rest Pattern and Parameters🔸
const data = [1, 2, ...[3, 4]];

// Rest: Destructuring
const [j, k, ...others] = [1, 2, 3, 4, 5];
console.log(j, k, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

// Rest: Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("Mushrooms", "Onions", "Olives", "Spinach");
restaurant.orderPizza("Mushrooms");

// 🔸Short Circuting (OR ||)🔸
console.log("Short Circuting");
console.log(3 || "Eke");
console.log("" || "Eke");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// Short Circuting (AND &&)
console.log(0 && "Eke");
console.log(7 && "Eke");

console.log("Hello" && 23 && null && "Eke");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");

// 🔸Nullish Coalescing Operator🔸
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests || 10;
console.log(guest3);

// 🔸Looping Arrays (For-Of Loop)🔸
const newMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < newMenu2.length; i++) {
//   console.log(`FOR: ${newMenu2[i]} is a Cheese Recipe`);
// }

for (const foo of newMenu2) console.log(foo);
for (const [i, el] of newMenu2.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${el}`);
}

// Enhanced object literals
const testing = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
};

const other = {
  // ES5
  testing: testing,
  // ES6
  testing,

  // ES5
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  // ES6
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// 🔸Optional Chaining🔸
// Using conditional statements
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Using optional chaining
console.log(restaurant.openingHours.mon?.open);

// Real-world Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chanining on Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exisit");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exisit");

// Optional chanining on Arrays
const users = [{ name: "Eke", email: "hello@eke.com" }];
console.log(users[0]?.name ?? "User array empty");

// 🔸Looping Objects, Keys, Values, and Entries🔸
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

// Entries Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// 🔸Sets🔸
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risoto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(ordersSet.size);

// Has
console.log(ordersSet.has("Bread"));
console.log(ordersSet.has("Pizza"));

// Add & Delete
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);

ordersSet.delete("Risoto");
console.log(ordersSet);

// Clear
// ordersSet.clear();

for (const order of ordersSet) {
  console.log(order);
}

// Use Case
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);

// Convert values to arrays
const staffUniqueAr = [...new Set(staff)];
console.log(staffUniqueAr);

// 🔸Maps🔸
const rest = new Map();
// Add elements
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

rest
  .set(categories, [])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);
console.log(rest.get(true));

// Get elements
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// Check for elements
console.log(rest.has(categories));

// Remove elements
rest.delete(2);
console.log(rest);

// Size of elements
console.log(rest.size);

// Clear elements
// rest.clear();
// console.log(rest);

// We can also use object inside of maps
rest.set([1, 2], "Test");
console.log(rest);

// This will not work because it is not present in the same memory.
console.log(rest.get([1, 2])); // Undefined

const s = [1, 2];
rest.set(s, "Test");
console.log(rest.get(s));

// DOM elements
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
