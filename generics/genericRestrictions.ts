class Hello<T extends string> {
  constructor(public name: T, public mensage?: T) {}

  exec() {
    return `Hello ${this.name}, ${this.mensage}`
  }
}

console.log(new Hello("Matheus", "how are you?").exec());
// console.log(new Hello("Matheus", 2).exec()) //!Erro
