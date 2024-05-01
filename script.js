//  lines

let result = "";

for (let i = 0; i < 3; i++) {
  result += prompt("Enter line", "line");
}

alert(result);

// second variant
// let line1 = prompt("Enter first line", "first line");
// let line2 = prompt("Enter second line", "second line");
// let line3 = prompt("Enter third line", "third line");

// alert(`${line1} ${line2} ${line3}`);

// numbers

let userNumber = prompt("Enter a five-digit number", "12345");
let res = "";
let number = userNumber.split("");
alert(number.join(" "));


// second variant
// let num = +prompt("Enter a five-digit number", "12345"); // 123
// let res = "";

// while (num > 0) {
//   const remainder = num % 10;
//   num = (num - remainder) / 10;
//   res = remainder + " " + res;
// }

// alert(res);
