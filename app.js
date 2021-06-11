var x = 5;

if (typeof x !== "number") {
  console.log("Not a number!");
} else if (x === 0) {
  console.log("Number is 0");
} else if (x % 2 === 0) {
  console.log("Number is even!");
} else if (x % 2 !== 0) {
  console.log("Number is odd");
}
