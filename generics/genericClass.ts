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
console.log("====================================");

// class with generica
abstract class BinaryOperationWithGeneric<T, R> {
  constructor(public operating1: T, public operating2: T) {}
  abstract exec(): R;
}

class SumBinary extends BinaryOperationWithGeneric<number, number> {
  exec(): number {
    return this.operating1 + this.operating2;
  }
}
console.log(new SumBinary(2, 4).exec());


//! date difference

class DateDifference extends BinaryOperationWithGeneric<DateClass, string> {
  getTime(date: DateClass): number {
    let { day, month, year } = date;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  exec(): string {
    const t1 = this.getTime(this.operating1);
    const t2 = this.getTime(this.operating2);
    const difference = Math.abs(t1 - t2);
    const day = 1000 * 60 * 60 * 24;
    return `${Math.ceil(difference / day)} day(s)`;
  }
}

const d1 = new DateClass(19, 8, 2020);
const d2 = new DateClass(19, 8, 2000);

console.log(new DateDifference(d1, d2).exec());
