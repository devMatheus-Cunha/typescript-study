// class no generica
class BinaryOperationNoGeneric {
  constructor(public operating1: any, public operating2: any) {}

  exec() {
    return this.operating1 + this.operating2;
  }
}

console.log(new BinaryOperationNoGeneric("Bom ", "dia").exec());
console.log(new BinaryOperationNoGeneric(2, 6).exec());
console.log(new BinaryOperationNoGeneric(1, "OPA").exec());
console.log(new BinaryOperationNoGeneric({}, {}).exec());
console.log('====================================');

// class with generica
abstract class BinaryOperationWithGeneric<T, R>{
   constructor(public operating1: T, public operating2: T) {}
   abstract exec(): R
}

class SumBinary extends BinaryOperationWithGeneric<number, number>{
  exec() : number {
    return this.operating1 + this.operating2
  }
}
console.log(new SumBinary(2, 4).exec());

