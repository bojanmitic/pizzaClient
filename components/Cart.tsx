import { CartItem } from '../models/CartItem';

export interface IItems {
  [id: number]: {
    price: number;
    name: string;
    quantity: number;
    sum: number;
  };
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export class Cart {
  items: IItems = {};
  totalAmount: number = 0;

  addItem(product: IProduct) {
    const prodPrice = product.price;
    const prodName = product.name;

    let updatedOrNewCartItem;

    if (this.items[product.id]) {
      updatedOrNewCartItem = new CartItem(
        this.items[product.id].quantity + 1,
        prodPrice,
        prodName,
        this.items[product.id].sum + prodPrice
      );
      this.items[product.id] = updatedOrNewCartItem;
      this.totalAmount = Number((this.totalAmount + prodPrice).toFixed(2));
    } else {
      updatedOrNewCartItem = new CartItem(1, prodPrice, prodName, prodPrice);
      this.items[product.id] = updatedOrNewCartItem;
      this.totalAmount = Number((this.totalAmount + prodPrice).toFixed(2));
    }
  }

  removeItem(productId: number) {
    const doesExist = Object.keys(this.items).some(
      (key) => Number(key) === productId
    );
    if (doesExist) {
      if (this.items[productId].quantity === 1) {
        this.totalAmount = this.totalAmount - this.items[productId].price;
        delete this.items[productId];
      } else {
        this.items[productId] = new CartItem(
          this.items[productId].quantity - 1,
          this.items[productId].price,
          this.items[productId].name,
          this.items[productId].sum - this.items[productId].price
        );
        this.totalAmount = Number(
          (this.totalAmount - this.items[productId].price).toFixed(2)
        );
      }
    } else {
      return;
    }
  }
}
