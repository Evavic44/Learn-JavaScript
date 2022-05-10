## Data Types

In every programming language, values can have different types depending on the type of data we want them to hold. Earlier we looked at string and numbers but there are other data types.

In JavaScript, every value is either an **object** or **primitive** data type.

<!--Screenshot of values types-->

### The 7 Primitive Data Types

### 1. Number:

These are called floating point numbers, which means every number has a decimal point. For example the number **23** is actually seen as **23.0** Numbers are decimals and integer.

```js
let js = 23;
```

The value 23 is actually the same as saying 23.0 even though we didn't specify it.

### 2. String:

Strings are sequence of characters used for texts. When using strings, always put them in quotes, wether single or double quotes and backtics **``**. If you don't, JavaScript will confuse it for variable names.

```js
let firstName = "Eke";
let lastName = `Tom Cruise!`;
let hobby = "Programming and coding!";
```

### 3. Boolean

Boolean are logical types that are used for providing two possibilities like: **true** or **false**, **yes** or **no**. So Booleans are mostly used in making decisions.

```js
let fullAge = true;
console.log(fullAge);
```

Now on the console we would see fullAge value is set to true.
In JavaScript, there is a logic you can use to show the type of value of a particular variable. This logic is called `typeof`

```js
let fullAge = true;
console.log(fullAge);

console.log(typeof fullAge);
```

Now when we check the console, we will see the data type of **fullAge**, which is a Boolean.

These values types mentioned above are the 3 main value types you'll use the most, but there are still 4 more value types which might be a bit convincing.

### 4. Undefined:

These are values taken by a variable name but is not yet defined('empty value'). In other words, these are variables that have been declared but haven't being assigned a value. For Example:

```js
let children;
console.log(children);
```

As you can see the variable **children** has been declared but has not being assigned a value, in other words, undefined.

If we use the `typeof` operator, we will get an undefined type in our console and an undefined `typeof`.

```js
let children;
console.log(children);
console.log(typeof children);
```

### 5. Null:

This also means 'Empty value', but is used in different circumstances, which we'll look at sometime later.

### 6. Symbol(ES2015)

This data type simply means, value that is unique and cannot be changed. _(Not useful for now)_

### 7. BigInt (ES2020)

These data types is used for large integers that the `number` data type can't hold. So it's basically another type for numbers.

### Dynamic Typing

It's also good to know that JavaScript has a feature called dynamic typing which means when you create a new variable, you don't need to define the data type of the value of that variable. This is a feature unique to JavaScript as other languages will require you to determine the data type.

This distinction between data type and the variable is pretty important because in JavaScript, it's the value that has the type, not the variable.

Another important thing to note about dynamic types is that variables can be assigned a new value with a different data type without any problems.  
**For Example**

Variable `X` can intially be a number and then later, a string.

Just like we did before, we can re-assign a new value to a variable we created.

```js
children = 20;
console.log(typeof children);
```

Now when we check our console, we can see the type of `null` we had earlier has been changed to `number` This is the power of dynamic typing in JavaScript.

**Error/bug in typeof**
When we use the `typeof` function to check the data type of an empty variable, the result in the console was **Undefined**, because we did not define the variable, now when we try to check the `typeof` of `null`, we get an error like so.

```js
console.log(typeof null);
```

The console sees the typeof as an **object** This is an error/bug that has not being fixed in JavaScript for legacy reasons. This is an error because `null` is not an object and should return `null` as `null` just like we had `undefined` return as `undefined`.
