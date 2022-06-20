// Add Elements

// Push = Add elements to the end of an array.
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
console.log(friends);

// Get total number of values in the array.
const newLength = friends.push("Jay");
console.log(newLength);

// Push = Add elements to the beginnig of an array.
friends.unshift("John");
console.log(friends);

// Remove Elements

// Pop = Remove elements at the end of an array.
friends.pop();
friends.pop();
console.log(friends);

// Return last removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Return first removed element
friends.shift();
console.log(friends);

// indexOf() = Tells us which position an element is at in an array.
console.log(friends.indexOf("Steven"));

// Returns -1 if we check an element that is not in the array.
console.log(friends.indexOf("Bob"));

// includes() = Tells us if an element is in an array. Returns a boolean value using the strict equality.

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// False = Checking number using string. Doesn't do type coercion.
friends.push(23);
console.log(friends.includes("23"));

// True = Checking the exact number works. Uses strict equality
friends.push(23);
console.log(friends.includes(23));

// Conditionals in includes()
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
