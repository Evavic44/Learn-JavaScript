## 22. JavaScript Releases (ES5, ES6+ and ESNext)

Now that you are familiar with the fundamentals of the JavaScript language, we need to talk about it's releases or versions before moving on. We brifely talked about it in the intro video, but not let's go into more depth because it's important to know about how JavaScript releases work and how we use them.

### A Brief History of JavaScript

After the internet was invented, and the first web browsers were developed, developers wanted to make websites more interactive. In other words, they needed a programming language for the browser.

### 1995

In 1995, the [Netscape Navigator](https://isp.netscape.com/) which by the time was the dominant browser, hired [Brandon Eich](https://twitter.com/brendaneich) to create the very first version of JavaScript in just 10 days. It was called **Mocha** at the time, and it already had many of the fundamental features modern JavaScript had today.

### 1996

In 1996, Mocha was renamed to LiveScript and then to JavaScript to attract Java developers, However, **The Java in JavaScript has absolutely nothing to do with Java.** I was renamed for marketing reasons.

### 1996

Microsoft launched the Internet Explorer(IE) which basically copied JavaScript from Netscape. But they called it JScript for legal reasons.
The issue with this was we now had two very similar but competing languages.

The internet grew rapidly in that time and so people realized that they needed to standardize JavaScript. Therefore, the language was submitted to an independet organization called [Ecma](https://www.ecma-international.org/).

### 1997

In 1997, Ecma released ECMAScript 1 or ES1. This was the first official standard for JavaScript, and with this, everyone could now implement the same standard of JavaScript.

### 2009

ES5 (ECMAScript 5) was released with a lot of great new features.

### 2015

ES6/ES2015 (ECMAScript 2015) was releaesd: The biggest update to the language ever! It contained a ton of new exciting features which we will explore throughout this course.

ES6 is also called ES2015 because ECMAScripr changed to an annual release cycle in order to ship less feature per update. This was because they preffered to just add a small number of features each year instead of shipping a huge new feature every couple of years like they did with ES6, and so this way, it will be much easier for everyone to keep up to date.

### 2016 - ♾️ Release of ES2016/ES2017/ES2018/.../ES2098

ECMAScript will keep releasing new features in JavaScript every year until the end of time.

### Backwards Compatibility

JavaScript is backwards-compatible. This means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. JS code written in 1995 - however primitive or limited - should still work now.

The idea is that JS developers can write code with confidence that their code wouldn’t stop working unpredictably because a browser update is released.

### Forwards Compatibility

JS is not forwards-compatible. This means that including a new addition to the language in a program would cause that program to break if it were run in an older JS engine. So if you run a program that uses an ES2019 feature in an engine from 2016, the program will very likely break and crash.

### Babel (Transpiler)

Typically forwards-compatibility problems related to syntax are solved by using a transpiler to convert from a newer JS syntax to an equivalent older version. The most common transpiler being used is Babel, which is mainly used to convert ECMASCRIPT-2015+ code into backwards compatible version of JavaScript in current and older browsers or environments.
