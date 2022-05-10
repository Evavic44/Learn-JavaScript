## 19. Statements & Expressions

Let's take a high level overview of the difference between statements and expressions. Esentially, an expression is piece of code that produces a value.

For example:

```js
3 + 4; // This is an expression
1991; // Also an expression
true && false && !false;
```

The examples above are all expressions because in JavaScript, they will all produce a value.

Statements on the other hand is a like a bigger piece of code that is executed and does not produce a value by itself. We can compare this with normal spoken language. In this example, a decleration is like a complete sentence and expressions are like words that make up the sentences.

Basically we write our whole programs as a sequence of actions and these actions are statements. For example, take the `if/else` statement.

```js
if (23 > 10) {
  const str = "23 is bigger";
}
```

This `if/else` statement is infact a statement, and the same is true for the `switch` statement. The above example statement doesn't really produce a value, all it does is simply to declare the variable `str`. It performs some actions but it doesn't produce a value.

This statement above is different from

```js
3 + 4;
```

On the other hand, the string `"23 is bigger"` is an expression, and this might be a bit confusing but later in the course you'll understand it better. The aim of this section is not to learn the rules of these examples but to understand that expression produces values and statements are like full sentences that translate an action/program.

Note:

> Whenever something ends with a semi-colon, that is a statement. (Like a complete sentence).

The difference between statements and expressions are important to know because JavaScript inserts statements and expressions in differenct places.

For example, in a template literal, you can only insert expresions but not statements. To demonstare that:

```js
console.log(`I'm ${2037 - 1991} years old`); // This is an expression.
```

The code above worked because we added an expression. Let's say we add a statement, in that case, the code won't work.

```js
console.logconsole.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
  const str = "23 is bigger";
}}`);
```

You can see we get an error because the above code we added is a statement, and this doesn't make sense because JavaScript expects an expression.
But if we have a variable, for example:

```js
const me = "Eke";
console.log(`I'm ${2037 - 1991} years old`);
```

This will also be an expression because the variable `me` will be replaced with the string `"Eke"` which produces a value and will work when we run it.