// @loginClass
@loginClassIf(true)
class HouseholdAppliance {
  constructor() {
    console.log("New...");
  }
}

function loginClass(constructor: Function) {
  console.log(constructor);
}

function decoratorVoid(_: Function) {}

function loginClassIf(value: boolean) {
  return value ? loginClass : decoratorVoid;
}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a + "" + b);
  };
}
