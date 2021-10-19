//? "noEmitOnError": true =  Disable emitting files if any type checking errors are reported.
let chanel: string = "Gaveta";
let subscribers: number = 31231;

// !error = chanel = subscribers
console.log(chanel);

// !error = name space in more blocks
// let name: string = "Matheus"

//===========================================

//?  "target": "es6" =  Set the JavaScript language version for emitted JavaScript and include compatible library declarations.

//===========================================

//? "sourceMap": true = Create source map files for emitted JavaScript files.

//===========================================

//? "noImplicitAny": true =  Enable error reporting for expressions and declarations with an implied `any` type

function sum(a: any, b: any) {
  console.log(a + b);
}
sum(2, 4);

let ramdom;
ramdom = "Pedro";
ramdom = 12;

//===========================================

//? "strictNullChecks": true = When type checking, take into account `null` and `undefined`.
//? "noUnusedParameters": true = Raise an error when a function parameter isn't read
//? "noUnusedLocals": true = Enable error reporting when a local variables aren't read.

function greet(isMorning: boolean, hour: number): string {
  let greeting: string;
  let ha: string;

  //! error
  // if (isMorning) {
  //   greeting = "good morning"
  // }
  // return greeting

  //* success
  if (isMorning) {
    greeting = "good morning";
  } else {
    greeting = "it's night";
  }
  return greeting;
}

console.log(greet(true, 1));

//===========================================

//? "outDir": "./build" =  Specify an output folder for all emitted files.

//? "outFile": "./build/app.js" = Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.
