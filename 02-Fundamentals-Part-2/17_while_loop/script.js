// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep} 🏋🏽`);
// }

// It's called a while loop because it runs while a condition is true. Just like the for() loop, it requires the counter, the condition and a counter update.

// Unlike the for() loop, while() loop requires the counter and counter update to be explicitly defined outsied of the loop.

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repition ${rep} 🏋🏽`);
  rep++;
}

// The while loop is more versatile than the for loop, it can be used in a wider variatey of situations, and this is because it does not need a counter. All it needs is a conditon for it to keep running.

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) {
    console.log(`The loop is about to end 6️⃣`);
  }
}

//! Use the while() loop when you don't know how many iterations the loop will have, and the for() loop when you do know.
