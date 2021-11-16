function echoGenerics<Type>(obj: Type): Type {
  return obj
}

type Echo = <T>(data: T) => T
const callEcho: Echo = echoGenerics

console.log(callEcho("Matheus is here"));
