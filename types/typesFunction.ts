let userName = "Matheus";

// receive parameter as string
function returnCalc(a: number, b: number) {
  return a + b;
}

// return string
function returnString(): string {
  return userName;
}

function returnVoid(): void {
  console.log("no return");
}

console.log("====================================");
console.log(returnCalc(10, 2));
console.log("====================================");

console.log("====================================");
console.log(returnString());
console.log("====================================");

console.log("====================================");
returnVoid();
console.log("====================================");
