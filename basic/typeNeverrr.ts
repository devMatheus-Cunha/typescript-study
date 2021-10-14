function error(msg: string): never {
  // while (true)
  throw new Error(msg);
}

const product = {
  name: "Sabão",
  price: -1,
  productValidator() {
    if (this.name.trim().length === 0) {
      error("Name undefined");
    }
    if (this.price <= 0) {
      error("Price undefined");
    }
  },
};

product.productValidator();
