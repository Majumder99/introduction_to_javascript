// // Creating sets
// // 1. Passing arrays
// const letters = new Set(["a", "b", "c"]);
// document.getElementById("demo").innerHTML = letters.size;
// 2.create set and add() to add values
// const letters = new Set();
// letters.add("1");
// letters.add(0);
// letters.add(10);
// document.getElementById("demo").innerHTML = letters.size;
// 3.create set and add() to add variables
// const letters = new Set();
// const a = "a";
// const b = "b";
// const c = "c";
// letters.add(a);
// letters.add(b);
// letters.add(c);
// document.getElementById("demo").innerHTML = letters.size;
// const letters = new Set(["a ", "b ", "c "]);
// let text = "";
// letters.forEach(function (value) {
//   text += value;
// });

const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
