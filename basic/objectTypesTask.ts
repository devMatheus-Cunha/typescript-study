type ISupervisors = {
  employees: string[];
  clockIn: (time: number) => string;
};

let supervisors: {
  employees: string[];
  clockIn: (time: number) => string;
};

supervisors = {
  employees: ["Matheus", "Lucas", "Pedro"],
  clockIn: (time: number): string => {
    if (time <= 8) {
      return "Ponto normal";
    } else {
      return "Fora de horário";
    }
  },
};

let supervisors2: ISupervisors;

supervisors = {
  employees: ["Matheus", "Lucas", "Pedro"],
  clockIn: (time: number): string => {
    if (time <= 8) {
      return "Ponto normal";
    } else {
      return "Fora de horário";
    }
  },
};

console.log("====================================");
console.log(supervisors.employees);
console.log("====================================");

console.log("====================================");
console.log(supervisors.clockIn(10));
console.log("====================================");
