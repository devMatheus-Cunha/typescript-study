interface IPersonProps {
  name: string,
  age: number
}

const person: IPersonProps  = {
  name: "Matheus",
  age: 21
}

function greetWithHello(person: IPersonProps) {
  console.log(`Hello ${person.name}`)
}

function chageName(person: IPersonProps) {
  return person.name = "Pedro"
}

greetWithHello(person)
console.log(chageName(person))
