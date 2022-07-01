## Definition of Methods

In the previous lecture, we learned that objects can take in different values, and they can hold arrays and also they could even hold objects inside of objects.

Functions are really just another type of value, and since it is just a value, we can then create a key value pair in which the value is the function. In summary, we can add functions to an object. And functions stored into objects is what we know as methods in JavaScript.

JavaScript methods are actions that can be performed on objects.
Basically, they are functions stored into objects. To add a function in an object, we use the funciton name as the property name and the fucnction body as the property value.

For Example

```js
const eke = {
  firstName: "Victor",
  lastName: "Eke",
  birthYear: 1991,
  job: "Programmer",
  friends: ["Nikolas", "Spiff", "Crusoe"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2022 - birthYear;
  },
};
```

Note that only function expressions can work in an object, and this is because, they produce a value, and since function declarations don't produce a value, it can not work in an object.

To access an object method we use the following syntax:

```js
objectName.methodName();
```

And to print it, we can store it a `console.log`

```js
console.log(eke.calcAge(1997));
```

We can also use the bracket notation.

```js
console.log(eke["calcAge"](1997));
```

Now you might have noticed that the `birthYear` is already defined as a property value in the object itself, we already have this iformation in the object so it is not ideal to repeat yourself while writing code. And this is because, if we want to change the value, we have to change it everywhere.

To access the property, JavaScript has provided a special keyword called `this`. Which we can use to get a property from an object without explicitly using the object name.

Therefore, the `this` keyword or variable is basically equal to the object on which the method is called, or equal to the object calling the method.

```js
const eke = {
  firstName: "Victor",
  lastName: "Eke",
  birthYear: 1991,
  job: "Programmer",
  friends: ["Nikolas", "Spiff", "Crusoe"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2022 - this.birthYear;
  },
};

console.log(eke.calcAge());
```

This works because, `this` is the whole `eke` object, and the `eke` object is the one calling this function. Whatever appears before the dot is the one calling the method.

You might argue that we don't even need the `this` keyword, we can simply do `eke.birthYear` instead, this will work but still violates the don't repeat yourself principle (DRY) and it also poses some issues like manually renaming the object name. By using the `this` keyword, whatever name we use is automatically replaced by the this keyword.
