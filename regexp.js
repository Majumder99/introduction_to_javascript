// i,g,m = modifer
// let Str = "Visit memorial hospital and visit denamrk hospital";
// let t = Str.search(/hospital/i);
// let t = Str.match(/hospital/g);
// let t = Str.replace(/hospital/i, "medical");
let neww =
  "hi there how are you? are you red or green or black or violet and my phone number is 123456789";
// let t = neww.match(/[h]/g);
// let t = neww.match(/[1-2]/g);
let t = neww.match(/(red|green)/g);
document.getElementById("demo").innerHTML = t;
