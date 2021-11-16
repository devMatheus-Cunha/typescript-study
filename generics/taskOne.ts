//! Class Fila
//! Atribute: queue(Array)
//! Methods: enter, next, print

class QueuePeople<T> {
  private people: Array<T> = [];

  constructor(...args: T[]) {
    this.people = args;
  }

  enter(person: T): void {
    this.people.push(person);
  }

  next(): T | null {
    if (this.people.length >= 0) {
      const first = this.people[0];
      this.people.splice(0, 1);
      return first;
    } else {
      return null;
    }
  }

  print(): void {
    console.log(this.people);
  }
}

const returnList = new QueuePeople<string>("Matheus", "Lucas");
returnList.enter("Pedro");
returnList.print();
returnList.next();
returnList.print();
