interface IClientsProps {
  name: string;
  position?: string;
  info(name: string, position: string): void
}

class Clients implements IClientsProps {
  name: string = "";
  position: string = "";
  info(): void {
    console.log(`My name is ${this.name} and my position is ${this.position}`)
  }
  constructor() {}
}

const client = new Clients();
client.name = "Matheus"
client.position = "Programmer"
client.info()