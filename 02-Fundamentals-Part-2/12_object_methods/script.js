const eke = {
  firstName: "Victor",
  lastName: "Eke",
  birthYear: 1997,
  job: "Programmer",
  friends: ["Nikolas", "Spiff", "Crusoe"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     2022 - birthYear;
  //   },

  //   calcAge: function () {
  //    console.log(this)
  //     return 2022 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(eke.calcAge());

console.log(eke.age);
console.log(eke.age);
console.log(eke.age);

// Challenge
// Victor is a 25 year old Programmer, and he has a(no) driver's license.
console.log(eke.getSummary());
