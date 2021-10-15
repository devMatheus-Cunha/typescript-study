//? "noEmitOnError": true =  Disable emitting files if any type checking errors are reported.
let chanel: string = "Gaveta";
let subscribers: number = 31231;

// !error = chanel = subscribers
console.log("🚀 ~ file: compiler.ts ~ line 4 ~ chanel", chanel);

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

let ramdom
ramdom = "Pedro"
ramdom = 12

//===========================================

//? "noImplicitAny": true =  Enable error reporting for expressions and declarations with an implied `any` type
