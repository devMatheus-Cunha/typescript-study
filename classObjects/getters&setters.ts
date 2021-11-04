class Person {
  private _age: string = "";

  get age(): string {
    return this._age
  }

  set age(value: string) {
    if (Number(value) < 18) {
       this._age = `Você tem ${value} anos? Então você e menor de idade e não pode dirigir`
      } else {
        this._age = `Parabens você pode dirigir com ${value}`
      }
  }
}

const matheus = new Person()
matheus.age = "15"

console.log(matheus.age)