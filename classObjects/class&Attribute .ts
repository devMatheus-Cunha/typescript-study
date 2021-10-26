//? #1
class Data {
  // types public default attribute
  day: number;
  month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const birthday = new Data(19, 8, 2000);
const MonthAndYear = new Data(8, 2000);

console.log(birthday);
console.log(MonthAndYear);
console.log('====================================');

//? #2
class DataSmart {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970
  ) {}
}

const birthdaySmart = new DataSmart(19, 8, 2000);
const MonthAndYearSmart = new DataSmart(8, 12);

// console.log(birthdaySmart);
// console.log(MonthAndYearSmart);

//? Task 
//* Attributes: name, price, desc
//* Create a constructur
//* OBS 1: opctional discount ( value default 0)
//* Create two products: passing two or three params

class Product{
  constructor(public name: string, public price: number, public desc: number = 0){}
}

const pruductOne = new Product("Xioami", 1900, 0.5)
const pruductTwo = new Product("Iphone", 12222200)

console.log('====================================');
console.log(pruductOne);
console.log('====================================');
console.log(pruductTwo);
