@loginClassIntroduction
class HouseholdApplianceIntroduction {
  constructor() {
    console.log("New");
  }
}

function loginClassIntroduction(constructor: Function) {
  console.log(constructor);
}

new HouseholdApplianceIntroduction();
