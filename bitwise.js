// Converting Decimal to Binary
// document.getElementById("demo").innerHTML = dec2bin(10);
// function dec2bin(dec) {
//   return (dec >>> 0).toString(2);
// }

// Converting Binary to Decimal
document.getElementById("demo").innerHTML = bin2dec(111);
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
