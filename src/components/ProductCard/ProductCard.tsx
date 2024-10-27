import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import type { IProduct } from '@/@types';

export interface IProductCardProps {
  data: IProduct;
}

const ProductCard = ({ data }: IProductCardProps) => {
  const { id, imageUrl, name, count, weight, size } = data;

  return (
    <Link className={styles.wrapper} to={`/${id}`}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imageUrl} alt="Product preview" />
      </div>
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span>
          <span className={styles.property}>Weight:</span> {weight}
        </span>
        <span>
          <span className={styles.property}>Count:</span> {count}
        </span>
        <span>
          <span className={styles.property}>Size:</span> {size.width}x{size.height}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
