export class CartItem {
  quantity: number;
  price: number;
  name: string;
  sum: number;

  constructor(quantity: number, price: number, name: string, sum: number) {
    this.quantity = quantity;
    this.price = price;
    this.name = name;
    this.sum = sum;
  }
}
