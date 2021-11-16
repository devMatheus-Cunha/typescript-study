function echo(obj: any) {
  return obj;
}

console.log(echo("Matheus"));
console.log(echo(21).length);
console.log(echo({ name: "matheus", age: 21 }));

console.log("====================================");

// using Generics
function echoGenericsBasic<T>(obj: T): T {
  return obj;
}

console.log(echoGenericsBasic("Matheus"));
console.log(echoGenericsBasic<number>(21));

const obj = echoGenericsBasic({ name: "matheus", age: 21 });
console.log(obj.name);
