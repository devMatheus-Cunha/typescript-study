//? class car is in the file accesModifers
class Ferrari extends Car {
  constructor(model: string, maxSpeed:number ){
    super("Ferrari", model, maxSpeed)
  }
  public speedUp(): number {
    return this.changeSpeed(20);
  }

  public breke() {
    return this.changeSpeed(-15);
  }
}

const f40 = new Ferrari("F40", 324);
const { brand, model, speedUp} = f40
console.log(`Carro ${model} da marca ${brand}`)

console.log(speedUp())