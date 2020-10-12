import React from 'react';
import Button from './Button';
import styles from './dish-card.module.css';
import { IProduct } from './Cart';

export interface IProductProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  id: number;
  addProduct: (product: IProduct) => void;
}

const DishCard = (props: IProductProps) => {
  const { imageUrl, name, description, price, id, addProduct } = props;
  const product = {
    name,
    price,
    id,
  };
  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <h5>{name}</h5>
      <p>{description}</p>
      <div className={styles.price}>{price}$</div>
      <Button onClick={() => addProduct(product)}>Order Now</Button>
    </div>
  );
};

export default DishCard;
