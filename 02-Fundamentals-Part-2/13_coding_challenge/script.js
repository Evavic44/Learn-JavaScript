/* ## Coding Challenge 3

Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!

### Remember

`BMI = mass / height **2 = mass / (height * height).`
Mass in `kg` and height in `meter`.

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).✅
2. Create a `calcBMI` method on each object to calculate the `BMI` (the same method on both objects). Store the `BMI` value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.

### Example:

`"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"`

### Test Data:

Marks weighs `78kg` and is `1.69m` tall. John weighs `92kg` and is `1.95m` tall.

Gooluck 😁
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}!`
  );
}
