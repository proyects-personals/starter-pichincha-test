import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '@/app/services/productService';
import { ProductFinancial } from '../interface/ProductFinancial';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductFinancial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      setError('Failed to fetch products: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};
