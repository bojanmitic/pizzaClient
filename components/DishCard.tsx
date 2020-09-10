import React from 'react';
import Button from './Button';
import styles from './dish-card.module.css';

interface IProps {
  imageUrl: 'string';
  name: 'string';
  description: 'string';
  price: number;
  id: number;
}

const DishCard = (props: IProps) => {
  const { imageUrl, name, description, price, id } = props;
  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <h5>{name}</h5>
      <p>{description}</p>
      <div className={styles.price}>{price}$</div>
      <Button>Order Now</Button>
    </div>
  );
};

export default DishCard;
