//Object call using this
const person1 = {
  firstName: "Sourav",
  lastName: "Majumder",
  id: 444,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
//Calling person2 and calling method person1
// const person1 = {
//   fullName: function () {
//     return this.fristName + " " + this.lastName;
//   },
// };
const person2 = {
  firstName: "John",
  lastName: "Majumder",
};
document.getElementById("demo").innerHTML = person1.fullName.call(person2);
