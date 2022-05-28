function logger() {
  console.log("My name is Eke");
}

// Calling / Running / invoking function

logger();
logger();
logger();

function furitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

// furitProcessor(5, 0);

// Store the argument in a varaible
const appleJuice = furitProcessor(5, 0);
console.log(appleJuice);

// Or log it to the console directly
console.log(furitProcessor(5, 0));

// Second argument
const appleOrangeJuice = furitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
