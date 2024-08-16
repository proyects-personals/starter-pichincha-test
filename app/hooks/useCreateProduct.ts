import { useState } from 'react';
import { createProduct } from '@/app/services/productService'; 
import { ProductFinancial } from '../interface/ProductFinancial';

export const useCreateProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleCreateProduct = async (product: ProductFinancial) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      console.log('product:', product);
      await createProduct(product);
      setSuccess(true);
    } catch (error) {
      setError('Failed to create product: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateProduct, loading, error, success };
};
