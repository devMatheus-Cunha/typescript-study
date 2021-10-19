//! Spreed - it takes the values and spreads them over the Math parameter
const numbers = [1, 44, 66, 88];

const classA: string[] = ["João", "Maria", "Fernando"];
const classB: string[] = ["Lucas", "Fabiana", "Luciano", ...classA];

console.log(Math.max(...numbers));
console.log("==================");
console.log(classB);

//! Rest - it takes several parameters and throws them into an array or whatever is being used in the situation
function returnArray(...arg: number[]): number[] {
  return [...arg];
}

const numbersArray = returnArray(1, 8, 23, 4, 45, 11, 12, 63);

console.log("==================");
console.log(numbersArray);
console.log("==================");

//! spred and rest together
type spredAndRestProps = (number | string)[];
function spredWithRest(...arg: spredAndRestProps): spredAndRestProps {
  return [...arg];
}
const stringsAndNumbers = ["matheus", "pedro", "lucas", 10, 20, 47];
console.log(spredWithRest(...stringsAndNumbers));

//! spred and rest together (tupla)
const tupla: [number, string, boolean] = [10, "Matheus", false];

function tuplaParamOne(first: number, second: string, third: boolean): void {
  console.log(`1) ${first} ${second} ${third}`);
}

function tuplaParamTwo(...params: [number, string, boolean]): void {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
console.log("==================");
tuplaParamOne(...tupla);

console.log("==================");
tuplaParamTwo(...tupla);