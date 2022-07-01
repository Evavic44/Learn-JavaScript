const eke = {
  firstName: "Victor",
  lastName: "Eke",
  birthYear: 1997,
  job: "Programmer",
  friends: ["Nikoals", "Spiff", "Crusoe"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2022 - birthYear;
  //   },

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(eke.calcAge());
console.log(eke["calcAge"]());
