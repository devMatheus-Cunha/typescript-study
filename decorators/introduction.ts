@loginClass
class HouseholdAppliance {
  constructor() {
    console.log("New");
  }
}

function loginClass(constructor: Function) {
  console.log(constructor);
}

new HouseholdAppliance();
