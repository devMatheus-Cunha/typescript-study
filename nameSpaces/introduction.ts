namespace Area {
  const PI = 3.14;

  export function circumference(ray: number): number {
    return PI * Math.pow(ray, 2);
  }
  
  export function rectangle(base: number, height: number): number {
    return base * height;
  }
}


console.log(Area.circumference(10));
console.log('====================================');
console.log(Area.rectangle(10, 20));