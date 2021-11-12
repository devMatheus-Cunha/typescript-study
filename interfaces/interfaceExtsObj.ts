interface Object {
  log(): void
}

Object.prototype.log = function() {
  console.log(this.toString())
}
const x = 2
const y = 3
const z = 4

x.log();
y.log();
z.log();

const cli = {
  name: "Pedro",
  toString() {
    return this.name
  }
}

cli.log()

