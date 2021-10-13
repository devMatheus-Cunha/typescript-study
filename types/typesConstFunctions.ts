function sum(a: number, b: number): number {
  return a + b;
}

let calculo: (first: number, second: number) => number = sum

console.log("====================================");
console.log(calculo(2, 4));
console.log("====================================");
