import { useState } from 'react';
import { deleteProduct } from '../services/productService';

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteProductById = async (id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await deleteProduct(id);
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

  return { deleteProductById, loading, error, success };
};
