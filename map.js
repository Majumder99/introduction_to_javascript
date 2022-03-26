// 1. Passing Array
// const fruits = new Map([
//   ["apple", 300],
//   ["banana", 200],
//   ["kola", 6000],
// ]);
// 2. Using Map.set()
const fruits = new Map();
fruits.set("apples", 300);
fruits.set("banana", 200);
fruits.set("oranges", 500);
let text = "";
// for (const x of fruits) {
//   text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
// document.getElementById("demo").innerHTML = fruits.get("apples");
// fruits.delete("apples");
// for (const x of fruits) {
//   text += x + "<br>";
// }
// fruits.forEach(function (value, key) {
//   text += key + " " + value;
// });
for (const x of fruits.entries()) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;
// document.getElementById("demo").innerHTML = fruits.has("banana");
