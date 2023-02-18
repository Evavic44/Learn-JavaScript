/* Write a funciton to convert a name into initials. This strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

/*
1. Create a function that prints a value to the console.
2. The function will return the first letter of each word
*/

function convertInitials(name) {
  const x = name.split(" ");
  console.log(x);

  // console.log(`${name.charAt(0)}.${name.charAt(1)}`);
  // console.log(`${name[0].toUpperCase()}.${name[5].toUpperCase()}`);
}

convertInitials("John Rambo");
convertInitials("ashely bolanle");
