class Only {
  private static instance: Only = new Only
  private constructor() {}

  static getInstance(): Only {
    return Only.instance
  }

  now(){
    return new Date()
  }
}

// const formError = new Only()
console.log(Only.getInstance().now())