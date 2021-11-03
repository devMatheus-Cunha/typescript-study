class Car {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 200
  ) {}

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta;
    const validateSpeed = newSpeed >= 0 && newSpeed < this.maxSpeed;

    if (validateSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
    }
    return this.currentSpeed;
  }

  public speedUp(): number {
    return this.changeSpeed(5);
  }

  public breke() {
    return this.changeSpeed(-5);
  }
}

const carOne = new Car("Fiat", "Argo", 180)
Array(40).fill(0).forEach(() => carOne.speedUp())
console.log(carOne.speedUp())

console.log(carOne.breke())

// carOne.currentSpeed = 1 //! error - method private
