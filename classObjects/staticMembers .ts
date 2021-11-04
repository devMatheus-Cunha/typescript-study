class Mat {
  static PI: number = 3.1416

  static circArea(ray: number): number {
    return this.PI * ray * ray;
  }
}
console.log(Mat.circArea(5)); //! static 
// console.log(new Mat().circArea(4)) //! no static 


