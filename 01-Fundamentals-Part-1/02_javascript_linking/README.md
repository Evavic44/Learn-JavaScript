## How to link a JavaScript File

Usually when building frontend applications, JavaScript is attached to web pages in the HTML document.

### Inline Linking

This involves writing JavaScript code inside the head of the HTML document. To do that, we can use the dedicated html tag which is the `<script></script>` element.

Now run the code in <a href="github.com/evavic44/javascript-course/1_Hello_world.js">Hello_Js.</a>

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!');
</script>
```

**Note**
In JavaScript, you usually add a semi-colon(;) at the end of each line, this will let JavaScript know we are done with that line. Sometimes you might see people omit this semi-colon because it is not mandatory, but it is good practice to add it, plus it makes your code look neat.

So we have added our code inside the script tag and now if we open up the `index.html` file, our JavaScript program should give us an alert that says.

> JavaScript is FUN!

You can also add the mathematical calculations in our code.

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!'); 40 + 8
  + 23 + 10;
</script>
```

In order to execute the mathematical operation, we simply need to use a function: `console.log` to tell JavaScript to execute the operation to the console.

```js
<script>
  let js = 'amazing'; if (js === 'amazing') alert('JavaScript is FUN!'); 40 + 8
  + 23 + 10; console.log(40 + 8 + 23 + 10);
</script>
```

### External linking

Usually when writing code, you want to seperate the logic from the content. Which means our JavaScript code should be in a seperate JavaScript file.

So create a new file for your JavaScript code and to link it to the html file, we can use the script tag to link it. `<script src="location of file"></script>`
This code is usually added to the bottom of the body tag.