class ProductMethod {
  constructor(
    public name: string,
    public price: number,
    public desc: number = 0
  ) {}

  //? Task
  //* Create Discount Pricing Method
  //* What are the parameters and the return?
  //* Change summary method to show discounted price

  methodCalcPriceDisc(): string {
    const calcPorc = this.price * (1 - this.desc);
    return calcPorc.toFixed(2)
  }

  public methodResume(): string {
    return `${this.name} custa R$${this.methodCalcPriceDisc()} (${this.desc * 100}% off)`;
  }
}
const productMethodOne = new ProductMethod("Xioami", 1900, 0.15);
console.log(productMethodOne.methodResume());
