// arrow functions default
const Sum = function (n1: number, n2: number): number {
  return n1 + n2
}
// arrow functions with return implicit 
const Sub = (n1: number, n2: number): number =>  n1 - n2

// fuction default 
function Mult (n1: number, n2: number): number {
  return n1 * n2
}
// arrow function with parameter default
const ParameterDefault = (start: number = 4): void => {
  console.log("Start");
  while (start > 0) {
    start--
    console.log(start)
  }
  console.log("The end");
}

console.log(Sum(3, 5));
console.log('====================================');
console.log(Sub(10, 5));
console.log('====================================');
console.log(Mult(3, 10));
console.log('====================================');
ParameterDefault()