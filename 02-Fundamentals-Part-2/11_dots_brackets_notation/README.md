## How to retieve elements from an Object

In this section, we're going to learn how to retrieve and change data from an object using both the dot and bracket notation.

```js
const eke = {
  firstName: "Victor",
  lastName: "Eke",
  age: 2022 - 1997,
  job: "Programmer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(eke);
```

The values in an object is arranged alphabetically, but this doesn't matter because we simply get the properties from the object using the property name itself.

There are two ways to do that, the `dot notation` and the `bracket notation`

## Dot Notation

Now let's get the last name from our object array.

```js
console.log(eke.lastName); // Get last name from the array
```

This dot here is an operator that will go to this object and retrieve the property using the name we specified `(lastName)`

## Bracket Notation

We can do the same thing using the brackets notation. It looks similar to how we retrieve data from an array but here we need to specify a string with the property name.

```js
console.log(eke["lastName"]);
```

Now the big difference between these two is that in the bracket notation `eke["name"]`, we can put an expression inside. So we don't have to explicitly write the string here, we can compute it from an operation.

For example, imagine we have a variable in which we store a repeating part `(name)` in firstName and lastName.

```js
const nameKey = "Name";
console.log(eke["first" + nameKey]);
console.log(eke["last" + nameKey]);
```

JavaScript will start by executing the plus operation and create the string firstName and lastName.

The same thing will not work with the dot notation.

## Situations to use dot Notation?

- And when do we have to use the bracket notation.

To recap what was said earlier, we use the bracket notation when we need to first compute the property name. In any other case, just use the dot notation which looks a lot cleaner and is easier to use.

### Bracket Notation Use Case

Let's look at another example to make the need for the bracket notation even more clear.

Let's say that we don't know yet which property we want to show, instead we get this from some user interface, what we can do is:

```js
const interestedIn = prompt(
  "What do you want to know about Eke? Choose between firstName, lastName, age, job, and friends"
);
console.log(eke[interestedIn]);
```

Here the `eke` object will replace the `interestedIn` variable with the values in the string.

If we use the bracket notation, we get and `Undefined` error. This errors happens anytime we try to access a property on an object that does not exist. In our example, eke does not have a property called `interestedIn`

Instead of using the dot notation, we use the bracket notation. Because then we can put any expression here, which will be interestedIn.

Now if we pass in a propery or value that is not available in the object, we also get an undefined errorr. We can of course write a logic that will print a custom string whenever the user tries to access a property that doesn't exisit.

```js
if (eke[interestedIn]) {
  console.log(eke[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
```

## Adding new properties to an object?

- Using the dot and bracket notation.

```js
eke.location = "Nigeria"; // dot notation
eke["twitter"] = "@evavic44"; // bracket notation
console.log(eke);
```

## Challenge

Write a code to print the string below, dynamically.
`"Eke has 3 friends, and his best friend is called Michael"`

```js
console.log(
  `${eke.lastName} has ${eke.friends.length} friends, and the name of his best friend is ${eke.friends[0]}`
);
```
