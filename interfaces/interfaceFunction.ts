interface FunctionCalc {
  (a: number, b: number): number;
}

let power: FunctionCalc;
power = (base: number, exp: number): number => {
  return base ** exp;
};

console.log(power(2, 8));
