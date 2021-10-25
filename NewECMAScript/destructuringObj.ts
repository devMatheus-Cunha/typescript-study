interface IUserClient {
  name: string;
  age: number;
  item: {
    price: number;
    name: string;
  };
}

const userClient: IUserClient = {
  name: "Matheus",
  age: 21,
  item: {
    price: 201,
    name: "mouse",
  },
};

// comum
const nameClientOne = userClient.name;
const ageClientOne = userClient.age;
const itemClientOne = userClient.item;

console.log(
  `O cliente ${nameClientOne} tem ${ageClientOne} anos e comprou um ${itemClientOne.name} que custa ${itemClientOne.price}`
);
console.log("====================================");

// destructuring
const {
  name: nameClientTwo,
  age: ageClientTwo,
  item: { name: productName, price },
} = userClient;

console.log(
  `O cliente ${nameClientTwo} tem ${ageClientTwo} anos e comprou um ${productName} que custa ${price}`
);
