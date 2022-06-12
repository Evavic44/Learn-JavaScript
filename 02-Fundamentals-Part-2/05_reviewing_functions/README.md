## Reviewing Functions

To finish this part about functions, let's review everything important that we have learned so far.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}
```

Here is the function in the previous lecture. The first thing we'll be doing is to convert it to a more normal funciton. To do that, we simply remove the arrow `=>` and then write the function keyword before the parameters in parenthesis. `function()`. 

Next step, we could export the `age` calculation in it's own function. So we're doing what we did earlier which is to declare a function within another function.

```js
const calcAge = function(birthYear) {
   return 2037 - birthYear;
}
```

We don't need to store the age calculation in a variable since it's a one liner, we can just return the calculation. If you notice, the previous function has the `birthYear` parameter with this new function. That is not a problem at all, the `birthYear` parameters (variable) in both functions do not relate with each other in any way. Each variable are local to their own function.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;
   return retirement;
   // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, "Eke"));
```

### Workflow
`1997` will be the `birthYear` in this function, then the `yearsUntilRetirement` function will call the `calcAge` function. In that case, `birthYear` in the `calcAge` function becomes `1997`

Even if you change the `birthYear` in the `calcAge` function, the function will still work because as explained earlier, there is no relationship between the parameters in both functions.

The result will be `25` because `65 - 40 = 25`
Let's try another argument.

```js
console.log(yearsUntilRetirement(1970, "Mike"));
```

The result will be `-2` because `65 - 67 = -2` which means Mike has already retired. So ler's account of that using the if/else condition.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;

   if(retirement > 0) {
      return retirement;
   } else {
      return -1;
   }

   // return `${firstName} retires in ${retirement} years`;
}
```

We're basically saying if the retirement is greater than 1, we want to return the retirement number in this case `25`, and if not, we return `-1`. 

### Note
The return keyword exists the function which means after returning the value we tell it to return, the function is done and we can also say, the function has returned. To demonstrate that, let's log a string to the console below the return keyword in both statements.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;

   if(retirement > 0) {
      return retirement;
      console.log(`${firstName} retires in ${retirement} years`);
   } else {
      return -1;
      console.log(`${firstName} has already retired`);
   }
}
```

The result will give us an error `unreachable code after return statement` or it will be blank depending on the browser and the reason is because the return statements has already returned the function so the string we logged to the console has not being reached. 

To fix this, we simply have to move the string above the return keyword and it will work.
To finish this part about functions, let's review everything important that we have learned so far.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}
```

Here is the function in the previous lecture. The first thing we'll be doing is to convert it to a more normal funciton. To do that, we simply remove the arrow `=>` and then write the function keyword before the parameters in parenthesis. `function()`. 

Next step, we could export the `age` calculation in it's own function. So we're doing what we did earlier which is to declare a function within another function.

```js
const calcAge = function(birthYear) {
   return 2037 - birthYear;
}
```

We don't need to store the age calculation in a variable since it's a one liner, we can just return the calculation. If you notice, the previous function has the `birthYear` parameter with this new function. That is not a problem at all, the `birthYear` parameters (variable) in both functions do not relate with each other in any way. Each variable are local to their own function.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;
   return retirement;
   // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, "Eke"));
```

### Workflow
`1997` will be the `birthYear` in this function, then the `yearsUntilRetirement` function will call the `calcAge` function. In that case, `birthYear` in the `calcAge` function becomes `1997`

Even if you change the `birthYear` in the `calcAge` function, the function will still work because as explained earlier, there is no relationship between the parameters in both functions.

The result will be `25` because `65 - 40 = 25`
Let's try another argument.

```js
console.log(yearsUntilRetirement(1970, "Mike"));
```

The result will be `-2` because `65 - 67 = -2` which means Mike has already retired. So ler's account of that using the if/else condition.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;

   if(retirement > 0) {
      return retirement;
   } else {
      return -1;
   }

   // return `${firstName} retires in ${retirement} years`;
}
```

We're basically saying if the retirement is greater than 1, we want to return the retirement number in this case `25`, and if not, we return `-1`. 

### Note
The return keyword exists the function which means after returning the value we tell it to return, the function is done and we can also say, the function has returned. To demonstrate that, let's log a string to the console below the return keyword in both statements.

```js
const yearsUntilRetirement = (birthYear, firstName) => {
   const age = calcAge(birthYear)
   const retirement = 65 - age;

   if(retirement > 0) {
      return retirement;
      console.log(`${firstName} retires in ${retirement} years`);
   } else {
      return -1;
      console.log(`${firstName} has already retired`);
   }
}
```

The result will give us an error `unreachable code after return statement` or it will be blank depending on the browser and the reason is because the return statements has already returned the function so the string we logged to the console has not being reached. 

To fix this, we simply have to move the string above the return keyword and it will work.


## Summary 
Now let's take a look at some of the things we've already learned about functions.

[Functions](https://images.img)

In the diagram above, we can see all three types of functions:

### Function declarations
These are functions that can be used before it is declared.

### Function Expression
Essentially function values stored in a variable.

### Arrow Fucntion
These are also function expressions but special ones great for one-line functions where we don't need to explicity use the return keyword or curly braces. Has no `this` keyword.

The important thing to note here is that these are three different ways of writing functions but they all work in a similar way. All of them receive, transform and then output data.

## Anatomy of a Function
Usually a function needs a function name `(calcAge)`, parameters `(birthYear, firstName)` which are placeholders to receive input valuses. 

They are like local variables of a function, and remember as we already know, we use functions to re-use pieces of code and these codes are found inside the function body. This is where the function input data is usually processed and then returned. 

By the end of the function, we usually have a return statements which we use to output a value from a function, and as we said earlier, the return statement also immediately terminates the function execution. 

Calling the function, we do that using parenthesis (), so we write the name of the function like we did in `calcAge`, and then with the parenthesis, we call the function, because without it, the function is just a value. We can also say that we run the function, call the function or execute the function.

In this case, since the `calcAge` function actually has parameters, we then call the function with arguments which are actual values of the function parameters. So we use it to replace the placeholders that are the parameters. 

When the `calcAge` function has finally done it's job, then all the expression will be replaced with the return value.

Finally, the `console.log` we have in the function has nothing to do with returning a value. It is actually another function called inside the `calcAge` function because it is a function on it's own.