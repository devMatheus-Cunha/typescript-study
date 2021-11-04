class Plane {
  public readonly model: string;
  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}
const turboHelix = new Plane("Tu-114", "PT-ABC");
// turboHelix.model = "Tu-165"
// turboHelix.prefix = "PT-21"
console.log(turboHelix.model);
console.log(turboHelix.prefix);
