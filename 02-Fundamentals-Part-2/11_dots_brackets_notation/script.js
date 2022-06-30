const eke = {
  firstName: "Victor",
  lastName: "Eke",
  age: 2022 - 1997,
  job: "Programmer",
  friends: ["Nikolas", "Spiff", "Crusoe"],
};

console.log(eke);

// Dot Notation
console.log(eke.lastName); // Get last name from the array

// Bracket Notation
console.log(eke["lastName"]);

const nameKey = "Name";
console.log(eke["first" + nameKey]);
console.log(eke["last" + nameKey]);

// Or

console.log(eke[`first${nameKey}`]);
console.log(eke[`last${nameKey}`]);

const interestedIn = prompt(
  "What do you want to know about Eke? Choose between firstName, lastName, age, job, and friends"
);
console.log(eke[interestedIn]);

// Logic to print a string if value is not in the object
if (eke[interestedIn]) {
  console.log(eke[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Add new properties to an object?
eke.location = "Nigeria"; // dot notation
eke["twitter"] = "@evavic44"; // bracket notation
console.log(eke);

// Challenge
console.log(
  `${eke.lastName} has ${eke.friends.length} friends, and the name of his best friend is ${eke.friends[0]}`
);

// or
console.log(
  eke.firstName +
    " has " +
    eke.friends.length +
    " friends, and his best friend is called " +
    eke.friends[0]
);
