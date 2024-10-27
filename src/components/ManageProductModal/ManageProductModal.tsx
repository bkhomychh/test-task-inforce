import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Button, ModalWrapper } from '@/components';
import { productSchema } from '@/schemas';
import { api } from '@/services/api';
import { QUERY_KEYS } from '@/constants';
import styles from './ManageProductModal.module.scss';
import type { IProduct } from '@/@types';
import type { IModalWrapper } from '@/components/ModalWrapper/ModalWrapper';

export interface IManageProductModalProps extends Pick<IModalWrapper, 'isOpen' | 'onHide'> {
  initialData?: IProduct;
}

const ManageProductModal = ({ initialData, onHide, ...otherProps }: IManageProductModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(productSchema) });
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: api.product.add,
    onSuccess: () => {
      reset();
      onHide();
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.products.all });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: api.product.update,
    onSuccess: () => {
      reset();
      onHide();
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.products.all });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.products.getById(initialData?.id.toString() || ''),
      });
    },
  });

  useEffect(() => {
    if (!initialData) {
      return;
    }
    const { count, imageUrl, name, size, weight } = initialData;
    reset({
      name,
      imageUrl,
      weight,
      count: count.toString(),
      width: size.width.toString(),
      height: size.height.toString(),
    });
  }, [initialData]);

  const isError = Object.keys(errors).length > 0;

  return (
    <ModalWrapper onHide={onHide} {...otherProps}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(({ name, count, height, imageUrl, weight, width }) => {
          const payload = {
            name,
            imageUrl,
            weight,
            count: +count,
            size: { width: +width, height: +height },
            comments: [''],
          };

          return initialData
            ? updateProductMutation.mutate({ ...payload, id: initialData.id })
            : addProductMutation.mutate(payload);
        })}
      >
        <h2 className={styles.title}>Продукт</h2>
        <div className={styles.inputs}>
          <input placeholder="Name" {...register('name')} />
          <input placeholder="Image url" {...register('imageUrl')} />
          <input type="number" placeholder="Count" {...register('count')} />
          <input placeholder="Weight" {...register('weight')} />
          <input type="number" placeholder="Width" {...register('width')} />
          <input type="number" placeholder="Height" {...register('height')} />
        </div>

        {isError && (
          <div>
            Error:{' '}
            {Object.entries(errors).map(([key, value]) => (
              <p>
                {key} - {value.message}
              </p>
            ))}
          </div>
        )}

        <Button type="submit">Confirm</Button>
        <Button onClick={onHide}>Cancel</Button>
      </form>
    </ModalWrapper>
  );
};

export default ManageProductModal;
