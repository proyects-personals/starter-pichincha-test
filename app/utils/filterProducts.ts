import { ProductFinancial } from '@/app/interface/ProductFinancial';

export const filterProducts = (products: ProductFinancial[], query: string): ProductFinancial[] => {
  if (query.trim() === '') {
    return products;
  }
  const lowercasedQuery = query.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(lowercasedQuery) ||
    product.id.toLowerCase().includes(lowercasedQuery)
  );
};
