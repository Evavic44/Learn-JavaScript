
## 12. Strings & Template Literals

Strings are a very important part of programming and this section will understand what template literals is and how to build strings better and faster.

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

```js
const firstName = "Eke";
const job = "Software Developer";
const birthYear = 1991;
const year = 2021;
```

Now let's concatenate these variables to build a string using quotes.

```js
const eke = 'I'm '
```

The above expression posses a challenge because when using words like I'm or Isn't (basically words that requires you to use single quotes), it won't work because the single quotes you're using with `'I'm` will finish the string.

So in other to use the single quote, we'll have to switch to double quotes for outlining the strings.

```js
const eke =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(eke);
```

We can see this is a pain to write and we have to manage the spacing between each string and text. This brings us to our topic **"Template Literals:"** which is an easy way of writing strings in a normal way and then insert variables directly into the string.

So basically a template literal can assemble multiple pieces in one final string.

**Example:**
To write a template literal, we use a backtick to assemble the strings. In other to add the variable, we'll add the variable in a curly braces and a dollar sign before it. `${variable}`

```js
// Template literals
const ekeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ekeNew);
```

You can see this is easier and shorter to write. No need for adding the plus signs to concatenate the strings.

We can also use the backticks for regular expressions of strings.

```js
console.log(`This is Just a string...`);
```

Many developers adopt this method of using backticks instead of single or double quotes when defining strings, this is a choice you can make, if you want.

Another good use of template literals is to create multi lined strings. Before ES6, we needed to add a `\n\` to create a new line.

<!-- Multi lined strings (ES5) -->

```js
console.log(
  "String with \n\
multiple \n\
lines"
);
```

<!-- Multi lined template string (ES6) -->

```js
console.log(`String with
multiple
lines`);
```