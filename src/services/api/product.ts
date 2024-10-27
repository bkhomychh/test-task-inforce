import { apiClient } from './apiClient';
import type { IProduct } from '@/@types';

const apiProduct = {
  getAll: () => apiClient.get<IProduct[]>('products'),
  getById: (productId: string) => apiClient.get<IProduct>(`products/${productId}`),
  add: (payload: Omit<IProduct, 'id'>) => apiClient.post<IProduct>('products', payload),
  update: ({ id, ...payload }: IProduct) => apiClient.put<IProduct>(`products/${id}`, payload),
};

export default apiProduct;
