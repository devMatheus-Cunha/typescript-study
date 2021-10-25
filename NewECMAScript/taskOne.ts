// task One
const double = (value: number): number => value * 2};

console.log(double(4));
console.log("====================================");

// task Two
const sayHello = (name: string = "Pessoa"): void => {
  console.log(`Olá ${name}`);
};
sayHello();
sayHello("Matheus");

// task Three
const arrayNumbersOne: number[] = [-3, 33, 38, 5];
console.log("====================================");
console.log(`O menor numero do Array e ${Math.min(...arrayNumbersOne)}`);

// task Four
const arrayNumbersTwo: number[] = [5, 23, 38, 59];
const arrayNumbersThree: number[] = [99, 101];
arrayNumbersTwo.push(...arrayNumbersThree)

console.log("====================================");
console.log(
  `O numeros dos Array juntos ${arrayNumbersTwo}`
);

// task Five
const notes: number[] = [8.5, 6.3, 9.4];
const [one, two, three] = notes
console.log('====================================');
console.log(`Nota um ${one} | Nota dois ${two} | Nota tres ${three}`);
