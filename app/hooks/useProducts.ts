import { useState, useEffect } from 'react';
import { getProducts } from '@/app/services/productService';
import { ProductFinancial } from '../interface/ProductFinancial';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductFinancial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products: ' + (error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
