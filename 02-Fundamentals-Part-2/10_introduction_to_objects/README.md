## Introduction to Object

A JavaScript object is a collection of named values

After arrays, objects are another type of data structure. Usually in arrays, we have different values combined into one entity.

For example, a variable called `ekeArray` can hold basic information about a person called `Eke`.

### Note

> It is a common practice to declare objects with the const keyword.

```js
const ekeArray = [
  "Victor",
  "Eke",
  2022 - 1997,
  "Programmer",
  ["Michael", "Peter", "Steven"],
];
```

In arrays, we reference these values by their order number in which they appear, E.g `[0, 1, 2]` we can't reference them with a name. To solve that problem, we use objects.

In objects, we define key value pairs. So we can give each value in the array a name.

To do that we wrap the objects using curly brackets instead of the square brackets.

```js
const eke = {
  firstName: "Jonas",
  lastName: "Jonas",
  age: 2022 - 1997,
  job: "Programmer",
  friends: ["Michael", "Peter", "Steven"],
};
```

The key here is the variable name on the left, followed by a colon and the value. The value can be any type we want. Key values are seperated by a comma just like in the arrays.

We can see we created an object with 5 key value pairs. Now each of these keys are also called a property. So the example above `eke` has 5 properties.

Objects are probably the most fundamental concepts in the whole JavaScript language, there are multiple ways of creating an object, but the easiest is the one we used in this example which is called the `object literal syntax`. This is called this way because, we are literally writing down the object content.

The big difference between objects and arrays is that in an object, the order of the values does not matter when we want to retrieve the elements. Unlike arrays that are actually accessed using their order number.

Therefore, we should use arrays for more ordered data and objects for more unstructured data, that we want to name and retrieve using that name.
