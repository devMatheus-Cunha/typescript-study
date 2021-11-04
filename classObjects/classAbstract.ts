abstract class Calc {
  protected result: number = 0;

  abstract exec(...numbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class SumNumbers extends Calc {
  exec(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t + a);
  }
}

const result = new SumNumbers()
result.exec(2,4,6,8)
console.log(result.getResult())   