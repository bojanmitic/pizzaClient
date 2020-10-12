import { IItems, IProduct } from './Cart';
import { useEffect } from 'react';

export interface ICart {
  items: IItems;
  totalAmount: number;
}

interface IAddItem {
  addItem: (product: IProduct) => void;
}

interface IRemoveItem {
  addItem: (id: number) => void;
}

const CartComponent = ({
  cart,
  addItem,
  removeItem,
}: {
  cart: ICart;
  addItem: IAddItem;
  removeItem: IRemoveItem;
}) => {
  useEffect(() => {
    Object.entries(cart).forEach(([key, val]) => console.log(key, val));
  }, [cart]);
  console.log(cart);
  return (
    <div>
      <h5>Your order</h5>
      <hr />
    </div>
  );
};

export default CartComponent;
