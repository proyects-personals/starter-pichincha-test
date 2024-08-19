import { useState } from 'react';
import { updateProduct } from '../services/productService';
import { ProductFinancial } from '../interface/ProductFinancial';

export const useUpdateProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateProductById = async (product: ProductFinancial) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await updateProduct(product);
      setSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { updateProductById, loading, error, success };
};
