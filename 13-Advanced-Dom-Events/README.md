## Advanced DOM

The DOM is simply a data representation of all object that comprises of the structure and content of a web document

Each DOM elements is called a node and it is simply an object that has various properties that can be used to manipulate or make changes to the element.

## NodeList

A `nodelist` is simply an object collection of nodes. It is usually returned by properties like `Node.childNodes` and methods like `document.querySelectorAll()`

### Elements that returns a NodeList:

- `document.querySelectorAll()`
- `document.getElementByName()`

> Note: Nodelists are not arrays but they can be iterated using the `forEach()` method and converted to an array using `Array.from()`

NodeLists returned from the `document.querySelectorAll` methods are static, which means updates made to the DOM does not affect the collection.

## HTML Collection

HTMLCollection is an array-like object collection of HTML elements. It is similar to a nodeList except it is live and not static, this means it is automatically updated when changes are made to it's underlying document.

### Elements that returns a HTMLCollection:

- `document.getElementsByClassName()`
- `document.getElementsByTagName()`

## Creating and Inserting Elements

Previously we looked at how to add elements in the DOM using the `.insertAdjacentHTML()` property, but there is another property that allows us even more flexibility, and this property is called the `createElement()` property.

- By using `document.createElement()` property:

```js
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved funtionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

header.prepend(message);
```

`prepend` adds the element as the first child of the element the prepend is called with.
`append` adds the element as the last child.
`before` adds the element before the element the before is called with
`after` adds the element after the element the after is called with
