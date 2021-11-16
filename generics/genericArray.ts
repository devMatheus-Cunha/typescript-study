//? generics native in the API

const evaluations: Array<number> = [10, 9.3, 7.7];
evaluations.push(8.4);
// evaluations.push("5.5")
console.log(evaluations);
console.log("====================================");

function print<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

print<number>([1, 2, 4]);
print<string>(["1", "2", "4"]);
print<{ name: string; age: number }>([{ name: "Matheus", age: 21 }, { name: "Pedro", age: 41 }]);

type Peoples = {
  name: string; age: number 
}
print<Peoples>([{ name: "Lucas", age: 11 }, { name: "João", age: 71 }]);
