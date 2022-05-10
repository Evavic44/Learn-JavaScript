## 18 Switch Statement

Switch statement is an alternative way of writing an if/else statement when all we want to do is to compare a value to multiple options.

For example, let's say we have a weekday variable and for each, there is a different activity. Basically we're going to map one activity to each day.

```js
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday": // if the day is eqaul to tuesday?
    console.log("Prepare theory videos"); // execute this code block
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}
```

In the code above, we're basically switching a variable of `day` and inside of the block, we'll have our code.

Next we'll have a `case` which will take in the day of the week. Example: `"monday"`. Finally, underneath the case will be the code we want to execute.

So basically, what the code will do is compare the day to monday in a strict equality way. So only if the day is monday, will the code be executed.

```js
day === monday;
```

#### Break

The `break;` statement is used to tell the code to stop running after the break. So any code that comes after the break has been declared will not run, unless of course the day corresponds wihh the code.

#### Default

Default is like an else block at the end of a long if/else statement.

The switch statement was designed for equality and not for like comparison operations.
To get a better idea of how the switch statement work, we can convert it to an `if/esle` statement.

```js
if (day === "monday") {
  console.log("Plan course structure 🎉");
  console.log("Go to coding meetup 🏆");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
```

In this situation, the switch statement is a better solution because it looks more readable as compared to the `if/else` statement. Though the switch statement is becoming less and less used, but it is still worth learning because there are instances it could be helpful at times.