import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { BackButton, Button, ManageProductModal } from '@/components';
import { QUERY_KEYS } from '@/constants';
import { api } from '@/services/api';
import styles from './ProductPage.module.scss';

export interface IProductPageProps {}

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productId = '' } = useParams();

  const productQuery = useQuery({
    queryKey: QUERY_KEYS.products.getById(productId),
    queryFn: () => api.product.getById(productId),
  });

  const { name, size, imageUrl, count, weight } = productQuery.data || {};

  return (
    <>
      <BackButton />

      {productQuery.data ? (
        <div className={styles.wrapper}>
          <Button onClick={() => setIsModalOpen(true)}>Edit product</Button>
          <ManageProductModal
            initialData={productQuery.data}
            isOpen={isModalOpen}
            onHide={() => setIsModalOpen(false)}
          />

          <span className={styles.name}>{name}</span>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={imageUrl} alt="Product preview" />
          </div>
          <div className={styles.details}>
            <span>
              <span className={styles.property}>Weight:</span> {weight}
            </span>
            <span>
              <span className={styles.property}>Count:</span> {count}
            </span>
            <span>
              <span className={styles.property}>Size:</span> {size?.width}x{size?.height}
            </span>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default ProductPage;
