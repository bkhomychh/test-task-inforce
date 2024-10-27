import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Button, ManageProductModal, ProductCard } from '@/components';
import { api } from '@/services/api';
import { QUERY_KEYS } from '@/constants';
import styles from './ProductListPage.module.scss';

export interface IProductListPageProps {}

const ProductListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productsQuery = useQuery({
    queryKey: QUERY_KEYS.products.all,
    queryFn: api.product.getAll,
  });

  const sortedProducts = useMemo(() => {
    const data = [...(productsQuery.data || [])];
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }, [productsQuery.data]);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Add product</Button>
      {productsQuery.isLoading ? (
        <p>Loading...</p>
      ) : sortedProducts ? (
        <ul className={styles.productList}>
          {sortedProducts.map(item => (
            <li key={item.id}>
              <ProductCard data={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing found :(</p>
      )}

      <ManageProductModal isOpen={isModalOpen} onHide={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProductListPage;
