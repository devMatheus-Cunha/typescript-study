function echo(obj: any) {
  return obj;
}

console.log(echo("Matheus"));
console.log(echo(21).length);
console.log(echo({ name: "matheus", age: 21 }));

console.log('====================================');

// using Generics
function echoGenerics<Type>(obj: Type): Type {
  return obj
}

console.log(echoGenerics("Matheus"));
console.log(echoGenerics<number>(21));

const obj = echoGenerics({ name: "matheus", age: 21 })
console.log(obj.name);



