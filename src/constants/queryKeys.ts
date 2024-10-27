export const QUERY_KEYS = {
  products: {
    all: ['products'],
    getById: (productId: string) => ['product', productId],
  },
};
