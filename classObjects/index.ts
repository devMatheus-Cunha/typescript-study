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

