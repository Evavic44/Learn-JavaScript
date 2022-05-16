## What is Strict Mode

**Strict** mode is a special mode in JavaScript that we can activate to write secure JavaScript code easily.

## How to Enable Strict Mode

Enabling the strict mode is super easy, in other to do that, simply write the following string at the top of your script.

```js
"Use strict";
```

What is important is to remember that this string should be written at the very first line of your code. If you add any code before this command, the strict mode will not be activated. Though comments are allowed because JavaScript will simply ignore them.

Also, the strict mode can be added to a specific `function` or code block. But there isn't any point in doing that. So stick to adding it on the first line.

## Importance and Examples

Strict mode makes it eaiser for JavaScript developers to avoid certain errors in our code, and that is because of two reasons.

- Strict mode forbids us to do certain things
- Strict mode creates visible errors in the developer console where in other situations, JavaScript will just fail silently.

### Example

In the code example below, we intentionally omitted the `"s"` in the `hasDriversLicense` variable. So what we have now is "hasDriverLicense". This is a very common mistake when writing code. When we run the code below, we don't get any results or warning, but if we enable the strict mode, JavaScript now warns us that `hasDriverLicense` variable is not defined.

```js
// "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
```

Another thing that strict mode does is to introduce a shortlist of
variable names that are reserved for features that might be added to the language later.

### Example

let's create a variable called interface and give it a string value of "Audio"

```js
const interface = "Audio";
```

We can see JavaScript throws an error that `interface` is a reserved identifier, thanks to enabling the Strict mode.
There are other reserved identifier, some we have alreadt looked at in section 1 when we learned about Naming conventions in JavaScript.

```js
const private = "444";
const interface = "444";
const function = "test";
const if = "test";
```

## Reserved Keywords in JavaScript

```js
private
interface
function
if
else
```
