interface IPersonProps {
  name: string;
  age?: number;
  [prop: string]: any; // accept any property name and value
  greet(lastName: string): void;
}

const person: IPersonProps = {
  name: "Matheus",
  age: 21,
  greet(lastName: string): void {
    console.log(`Hello my name is ${this.name} ${lastName}`);
  }
};

function greetWithHello(person: IPersonProps) {
  console.log(`Hello ${person.name}`);
}

function chageName(person: IPersonProps) {
  const change = person.name = "Pedro"
  console.log(`My name changed to ${change}`);
  
}

greetWithHello(person);
person.greet("Cunha")
chageName(person)

/*greetWithHello({
  name: "Lucas",
  age: 32,
  randomProps: true
});
*/
