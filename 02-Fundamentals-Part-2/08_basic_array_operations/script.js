// ARRAY METHOD
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// [Length] Sets or returns the number of elements in an array
console.log(friends.length);

// [Push] - Add elements to the end of an array
friends.push("Jay");
console.log(friends);

// [Unshift] - Add elements to the beginning of an array
friends.unshift("John");
console.log(friends);

// [Pop] - Removes last element of the array
friends.pop();
const popped = friends.pop();
console.log(popped);

// [Shift] - Removes first element of the array
friends.shift();
console.log(friends);

// [IndexOf] - Tells us the position of an element in the array.
console.log(friends.indexOf("Michael"));

// Returns -1 if we check an element that is not in the array.
console.log(friends.indexOf("Bob"));

// Includes() - Check if an array contains the specified element using strict equality.
friends.push(23);
console.log(friends.includes("23"));

// Conditionals with includes()
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
