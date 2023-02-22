# Array Destructuring

This is an ES6 feature that allows you break a complex data structure like array into a smaller data structure like the array.

# Spread Operator

The spread operator (...) is used to quickly copy all or part of an existing array or object into another array or object.

The spread operator is a bit similar to destructuring; it allows you handle complex arrays and break it down into smaller arrays. t

Difference between the spread operator and destructuring is that spread operators does not create new variables. It can only be used in places where values are seperated by commas.

For instance, you can't use it in a template literal like the example below. This is because the literal expects a single value and not an array of values.

```js
const data = [1, 2, 3, 4];
const [a, b, c, d] = [...data];
console.log(a, b, c, d);
console.log(...data);
```

Another use case of the spread operator is for passing in multiple values into a function.

# Rest Pattern and Parameters

The rest pattern is the opposite of the spread operator. It uses the exact same syntax, however, it it used to collect multiple elements and condense them into an array, whereas, the spread operator is used for unpacking an array into multiple elements or array.

### 1. Rest: Destructuring

Here's an example of the spread operator below. We know we're working with the spread syntax because it is declared on the right side of the assignment operator `=`.

```js
// SPREAD: Because [...] is on the right side of assignment operator =
const arr = [1, 2, ...[3, 4]];
```

We can also use it on the left side along with destructuring. For Example:

```js
// REST: Because [...] is on the left side of assignment operator =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
```

The output will be `1 2 [3 4 5]` because 1 and 2 will be stored in the a and b variables and then the rest of the value will be stored together in a new array.

This is where the name; Rest is coined from. It collects the elements that are unused in a destructuring assignment.

We can also have the `[...]` dots on both side of the operator.

```js
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
```

Here we stored the value of Pizza and Risotto into two new variables `pizza, risotto` and then the rest of the `(...restaurant.mainMenu and ...restaurant.starterMenu)` array was stored into a new array called `otherFood`.

> **NOTE**
> It's good to remember that the rest pattern should always be the last element in a destructuring assignment otherwise JavaScript will not know what till when it should collect the rest of an array.

For example: You Cannot Do This!

```js
const [pizza, , risotto, ...otherFood, bread]
```

The rest pattern will have to be the last element in other for the operation to work. As a result of this, there can only be one rest pattern in any destructuring assignment.

### Rest in Objects

Just like the spread operator, the rest operator also works on objects.

### 1. Rest: Functions

Just like the spread operator that allows passing in multiple values in a function all at once, the rest operator can do the opposite.

```js
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
```

### Finally!

The subtle distinction that tells you when and where to use spread and rest.

- Use Spread when you want to write values seperated by commas.
- Use Rest when you want to write variable names seperated by commas.

# Short Circuting (&& and ||)

In the past, we've looked at the `&&` and `||` operators but we only crossed the surface. In this section, we'll look at how to use these operators for something called circuting.

### Properties of logical operators

1. They can use any data type
2. They can return any data type
3. They can perform short circuting (aka short circuit evaluation)

### Short Circuting Or ||

For example:

```js
console.log(3 || "Eke");
```

In the case of the OR operator, short circuting means that if the first operand is a truthy value, it will return that value and not even evaluate the other value.

```js
console.log("🔸Short Circuting🔸");
console.log(3 || "Eke");
console.log("" || "Eke");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);
```

From the example above, we can see that the result of the OR operator doesn't have to be a boolean. It will simply short circut the entire operation and return the first truthy value.

```js
restaurant.numGuests = 23;
const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest);

// In the example above before numGuest was assigned the number 23, restaurant.numGuest was undefined, which makes it a falsy value. And as such the operand will skip to the next value which is 10.

// Instead of using a tenary operator, we can use short-circuting in the OR operator.

const guest2 = restaurant.numGuests || 10;
console.log(guest2);
```

### Short Circuting And &&

Short circuting the And operator works exactly the opposite of the OR operator. This means that if the first operand is a falsy value, it will return that value and not evaluate the other operand.

For Example

```js
// Short Circuting (AND &&)
console.log(0 && "Eke");
console.log(7 && "Eke");

console.log("Hello" && 23 && null && "Eke");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");
```

In summary:

- The OR operator will return the first truthy value of all the operands or simply return the last value if all the operands are falsy.

- The AND operator will return the first falsy value or the last value if all the operands are truthy.

In practical real world examples, the OR operator can be used for setting default values and the AND operator for setting executing code in the second operand if the first operand is true.

# The Nullish Coalescing Operator ()

In the example below, the result for the OR operation will be 10 because the first value `restaurant.numGuests` is a truthy value, but if `restaurant.numGuets` becomes 0(a falsy value), the result will 20, the second option in the OR operation.

```js
restaurant.numGuests = 10;
const guests = restaurant.numGuests || 20;
console.log(guests);
```

In other to fix this issue, JavaScript introduced a new property called "The Nullish Coalescing Operator" that is similar to the OR operator.

```js
const guestCorrect = restaurant.numGuests ?? 20;
console.log(guestCOrrect);
```

This works because the Nullish operator works with the concept of Nullish values instead of falsy values. So it works with `Undefined` and `Null` as falsy values and considers empty string and 0 as truthy values.

In other words, the condition will work only if the first value is null or undefined. Since 0 is not a falsy value in the Nullish Coalescing operator, the condition will move to the next option.

# Looping Arrays - The For Of Loop

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.

Let's say we want to loop the array below, a typical `For` loop will look like this:

```js
const newMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i = 0; i < newMenu2.lenght; i++) {
  console.log(newMenu2[i]);
}
```

But there is an easier way to loop between this array without having to specify all these conditions. This method is called the `For Of loop` and it was introduced in ES6.

```js
for (const foo of newMenu2) console.log(foo);
```

You can also use the `continue` and `break` keywords in the `for of` loop.

Now what if we need the current index of each value? It's more of a pain to get the current index in a for of loop, and that is because, the for of loop was built to give us the current element. However you can get both the element and it's index.

Example

```js
for (const bar of newMenu2.entries()) {
  console.log(bar);
}

console.log([...newMenu2.entries()]);
```

# Enhanced Object Literals

Object literals are objects written literally, using the curly braces syntax. With ES6, enhanced object literals introduced three ways that allows you write object literals in an easy way.

It provides a shorthand syntax for initializing properties from variables.
It provides a shorthand syntax for defining function methods.
It enables the ability to have computed property names in an object literal definition

For Example.
Consider the object below which has two methods and nested objects. With enhanced object literal, we don't need to assign a key: and it's value pair, we simply just write the object name.

```js
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
```

Here we removed the colon `:` and the property `name` and simply passed in the object as a variable, and wrote the function like a regular function without the function keyword and colon.

These all balls down to personal preference. You can choose which one you want to use.

# Optional Chaining (?.)

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

For example

```js
console.log(restaurant.openingHours.mon); // Result will be undefined
```

The code above will output undefined because `restaurant.mon` does not exist in the restaurant object. When working on real world projects, usually you get your data from a web service (API) so you need a way to check if a property exist.

We could use conditional statments

```js
if (restaurant.openingHours) console.log(restaurant.openingHours.mon.open);
```

and even logical operators. But when we have several conditions we need to check for, it can get very messy using these methods. This is where the ES2020 optional chaining comes in.

```js
console.log(restaurant.openingHours.mon?.open);
```

The syntax uses a question mark after the element we want to check conditionally. In the example above the code is checking if `restaurant.openingHours.mon` exists, and if not, the code after the question mark will not even be evaluated.

So the result in this operation will be `undefined` and the error we saw earlier will be avoided.

# Looping Objects, Object Keys, Values, and Entries

We can also loop Objects which are not iterables using the `For of` loop, though in an indirect way.

With objects, we can loop through property names(keys) or values.

### Property names(keys)

```js
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
```

This will fetch all the key names (thu, fri, sat) of the openingHours object.

We can also get property values using a similar fashion.

### Property values

```js
for (const val of Object.values(openingHours)) {
  console.log(val);
}
```

But in other to get the full content of the array, we need a property called `entries`. Which is basically a method that returns both `keys` and `values` together.

In objects it works a bit differently, as we don't call it as a method.

### Entire Object

```js
const entries = Object.entries(openingHours)
for(const [key, {open close}] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`)
}
```

# Sets

In the past, we only had two data structures: Arrays and Objects, but in ES6, two other data structures were added to the list: Sets and Maps.

A set is a collection of unique values. Which means that a set can never have any duplicates.

```js
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risoto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
```

The result of this will be `'Pasta', 'Pizza', and 'Risoto'`. It will eliminate all duplicates. You can also pass in a string.

## How to work with sets

- Size
  You can get the number of unique values in a set using the `size`
  property. This is similar to the `.length` method in arrays

```js
console.log(ordersSize.size);
```

- If an element is in a set
  With the `has` property, you can check if a value exists in a set. This property is similar to the `includes()` method in Arrays

```js
console.log(ordersSize.has("Bread"));
```

- Add and delete elements in a set

```js
ordersSet.add("Garlic Bread");
ordersSet.delete("Garlic Bread");
```

You can't get values from a set. If you need to get a list of values, we still use Arrays.

- Clear
  Use this property to clear all the elements inside a set.

```js
ordersSet.clear();
```

Since sets are iterables, we can also loop over them.

```js
for (const order of ordersSet) {
  console.log(order);
}
```

## Use case for Sets

The main use case for sets is to remove duplicate values in arrays. For example, let's say we need to get the unique values in an array and avoid all duplicates, here's how we can do that using a set.

```js
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);
```

The result will still a set. To convert it into an array, we use the spread operator

```js
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
```

Sets are not intended to replace arrays at all but only for working with unique values.

# Maps

Map objects are a collection of key-value pairs. Similar to objects, their keys only occur once and it is unique in a collection.

The main difference is that `objects` only support string and `symbol` keys where as Maps supports any key type.

Maps are created by defining a new map and to add items to the map, we use the `set()` method, which takes in any key `name` and a value.

```js
const rest = new Map();
rest.set("name", "Classico Italiano"); // String as key
rest.set(1, "Firenze, Italy"); // Number as key
```

We can also chain the set method with other items.

```js
rest
  .set(categories, [])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);
```

To get items inside a `Map`, we use the `get()` method, with the key name we want to get. The key name data type also matters.

```js
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
```

The rest also contains the `has()` method for checking for elements.

```js
rest.has(categories); // True
```

To remove elements from the Map, we use the delete method.

```js
rest.delete(1);
```

We can also use objects as Map keys

```js
rest.set([1, 2], "Test");
```

However, if we try to use the `get()` method on `[1, 2]`, it will not work because they are not in the same memory. In other to get the value `Test`, we store the element key in a variable and use that variable to get the element.

```js
const arr = [1, 2];
rest.set(arr, "Test");
rest.get(rest.get(arr));
```

We an also use the `rest` on `DOM` elements, which allows us to do advanced functionalities.

```js
rest.get(document.querySelector("h1"));
```

# Maps Iteration

Elements are added to a `Map` using the `set()` method. But this can be cumbersome if you're trying to add multiple elements at the same time. To fix that, we can create a new `map` using an array inside the `map`.

For example:

```js
const question = new Map([
  ["Question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Try Again 💔"],
]);
```

This method makes it easier but in any case where we need to keep adding elements to the `Map` programtically, the `set()` method is best.

### Convert Objects to Map

```js
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
```

```js
// Quiz App
console.log(question.get("Question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt("What is your answer?"));
console.log(
  answer === question.get("correct")
    ? `${answer} ${question.get(true)}`
    : `${answer} ${question.get(false)}`
);
```

Finally, it can be important to know how to convert a `Map` back to an array. To do that, simply use destructure the `Map`.

```js
console.log(...question);
```

Finally, `Maps` also contains the keywords for getting elements:

```js
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
```

# Summary: Which Data Structure to Use

Initially we had two main data structures, Arrays and Objects but we have looked at other data structures introduced to JavaScript from ES6.

It's important to know the pros and cons of all the data structures and which one to use at any given point.

## Sources of Data

There are three main sources of Data,

- The Program: Data written directly in source code (E.g: Status Message)
- From the UI: Data input from the user or Data written in DOM (E.g tasks in a todo app).
- From External Sources: Data fetched for example from Web API (E.g recipe, objects)

## Data Structures to Use

- Simple List: Arrays or Sets
- Key/Value Pairs: Objects or Maps

The most common source of Data is the Web API which commonly comes in a `JSON` format and for storing such data, arrays is usually the way to go.

Now there are other data structures not built into JavaScript like:

### Other Built-In

- WeakMap
- WeakSet

### Non-Built In

- Stacks
- Queues
- Linked Lists
- Trees
- Hash Tables

## Arrays vs Sets & Objects vs Maps

### Arrays

```js
const tasks = ["Code", "Eat", "Code"];
// ["Code", "Eat", "Code"]
```

1. Use arrays when you need **ordered** list of values(with duplicates).
2. Use arrays when you need to **manipulate** data

### Sets

```js
const task = new Set(["Code", "Eat", "Code"]);
// ["Code", "Eat"]
```

1. Use Sets when you need to work with **unique** values.
2. Use Sets when **high performance** is really important.
3. Use Sets to **remove duplicates** from arrays.

### Objects

```js
const task = {
  task: "code",
  date: "today",
  repeat: true,
};
```

1. More traditional key/value store
2. Eaiser to write and access values with `.` and `[]` notations
3. Use when you need to include `functions` (methods)
4. Use when working with `JSON` (can covert to `Map`)

### Maps

```js
const task = new Map([
  ["task", "code"],
  ["date", "today"],
  [false, "start coding!"],
]);
```

1. Better performance
2. Keys can have any data type
3. Easy to iterate
4. Easy to compute size
5. Use when you simply need to map key to values
6. Use when you need keys that are not strings.

# Working with Strings - Part 1

In JavaScript we work a lot with strings and there are some important `string methods` worth knowing. This methods are very similar with the `array methods`

We can get elements in a string using the dot notation and the postion number. (Like arrays, strings are also zero-based)

```js
const airline = "Dana Air Nigeria";
const plane = "Boeing 700";

console.log(plane[0]); // output B
console.log(plane[1]); // output o
console.log(plane[2]); // output e
console.log("B737"[0]); // output B
```

We can also get the lenght of a string and the position of an element in a string.

```js
console.log(airline.length); // output 16
console.log("B737".length); // output 4

console.log(airline.indexOf("a")); // output 1
console.log(airline.lastIndexOf("a")); // output 15
console.log(airline.indexOf("Codo")); // output -1 (since result is not found)
```

### Slice Method

The `slice()` method returns a shallow copy of a portion of an array or string into a new array object selected from `start` to `end`

Syntax

```js
slice();
slice(start);
slice(start, end);
```

The importance of using these indexes is using the `slice()` method to get `indexOf` of a string element or array.

**Start**

```js
const airplane = "Dana Air Nigeria";
console.log(airplane.slice(5));
```

This will slice the string `Dana Air Nigeria` by five positions and output the remaining result, which will be `Air Nigeria`

The result of a sliced string is referred to as a **sub string** because it does not change the original string. Of course this is because strings are immutable.

If you need to change the string, you would have to store it in a variable or data structure.

**End**

```js
console.log(airplane.slice(4, 7));
```

The result will be `Ai` because 4 will slice `Dana ` and 7 will slice `r Nigeria`

> **Note**
> The lenght of the extracted string(sub string) will always be `start - end`. In the example above `7 - 4 = 2` hence the result(Ai)

In real world example, we may not know the string we wish to extract. So how do you extract a string if we didn't know what it is? We use the `indexOf()` method.

```js
console.log(airline.slice(0, airline.indexOf(" ")));
```

Here we're starting from 0 and slicing the first occurence of the space`(' ')`, which will give us `Dana`

And if we want to start from the last item:

```js
console.log(airline.slice(0, airline.lastIndexOf(" ")));
```

We can also use negative values:

```js
console.log(airline.slice(-2)); // ia
console.log(airline.slice(-6)); // igeria
console.log(airline.slice(-11)); // Air Nigeria
console.log(airline.slice(1, -11)); // ana
```

Let's practice what we just learned by writing a function that recieves an airplane sit and logs to the console if it is a middle sit or not.

Note that there are 6 sits in a row from `A - F`

```js
const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const x = seat.slice(-1);
  if (x === "B" || x === "E") {
    console.log(`${x} is a middle seat`);
  } else {
    console.log(`${x} is not a middle seat`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
```

The result will be:

- B is a middle seat
- C is not a middle seat
- E is a middle seat

# Working with Strings - Part 2

### Capitalization `(toLowerCase() & toUpperCase())`

```js
const passenger = "vICtOR";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Function
const correctName = function (name) {
  const low = name.toLowerCase();
  const correct = low[0].toUpperCase() + low.slice(1);
  return correct;
};

console.log(correctName("jOHn"));
```

### Comparing strings

```js
const email = "hello@eke.io";
const loginEmail = "  Hello@eKE.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
```

Similar to the `Map` `set()` method, we can join string methods together.

```js
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail); // output hello@eke.io
console.log(email === normalEmail); // output true
```

### Replacing

Let's try replacing a currency type and the trailing period with a comma

```js
const priceNG = "₦288.97";
console.log(priceNG);
const priceGB = priceNG.replace("₦", "£").replace(".", ",");
console.log(priceGB);
```

Replace words.

```js
console.log(announcement.replace("door", "gate")); // Replace first occurence of the word 'door'
console.log(announcement.replaceAll("door", "gate")); // Replace all occurence
```

Another way we can do this is by using a regular expression.

```js
console.log(announcement.replace(/door/g, "gate"));
```

Just like all of the previous methods, the replace method is also case sensitive.

### Booleans

There are three methods that returns a boolean (`includes()`, `startsWith()`, `endsWith()`)

```js
const planes = "Airbus A320neo";
console.log(planes.includes("A320")); // true
console.log(planes.includes("Boeing")); // false
console.log(planes.startsWith("Air")); // false

if (planes.startsWith("Airbus") && planes.endsWith("neo")) {
  console.log("Part of the New Airbus family");
}
```

#### Practice Exercise

```js
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Get some snacks and a gun for protection");
```

### Capitalize Name

```js
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Using replace
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
```

### Padding

This allows us to add a number of elements to a string until a string is at a desired length.

```js
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // +++++++++++Go to gate 23!
```

This will add 11 plus symbols to the beginning of the string because using the `padStart()` method, we specified the string to be 25 characters long including the symbol and since the string `"Go to gate 23"` is 14 characters, the `padStart` method will fill it up with 11 + symbols.

If the string we want to pad is the same number of chracters on `padStart()` method, no value will be added to the string.

For example:

```js
const message = "Hey";
console.log(message.padStart(3, "+")); // Hey
```

We also have the `padEnd()` method, which is the opposite of `padStart()`

Let's add 1 plus symbol at the end and beginning of a string.

```js
console.log("Victor".padStart(10, "+").padEnd(14, "+")); // ++++Victor++++
```

### Repeat

This method allows you to repeat a string multiple times.

```js
const message2 = "Hello ";
console.log(message2.repeat(3)); // Hello Hello Hello
```

```js
function planesInline(n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
}

planesInline(10); // There are 10 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
planesInline(3); // There are 3 planes in line ✈️✈️✈️
planesInline(5); // There are 5 planes in line ✈️✈️✈️✈️✈️
```

## Summary of the String Methods

- `toLowerCase()`: Converts all the alphabetic characters in a string to lowercase.
- `toUpperCase()`: Converts all the alphabetic characters in a string to uppercase.
- `trim()`: Removes the leading and trailing white space and line terminator characters from a string
- `replace()`: Replaces text in a string, using a regular expression or search string.
- `replaceAll()`: Replaces all occurence of text in a string, using a regular expression or search string.
- `indexOf()`: Returns the position of the first occurrence of a substring.
- `lastIndexOf()`: Returns the last occurrence of a substring in the string.
- `slice()`: Returns a section or the index to the beginning of the specified portion of stringObj
- `starsWith()`: Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
- `endsWith()`: Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
- `padStart`: Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
- `padEnd`: Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
- `repeat()`: The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
