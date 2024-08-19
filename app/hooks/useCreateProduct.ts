import { useState } from 'react';
import { createProduct } from '@/app/services/productService'; 
import { ProductFinancial } from '../interface/ProductFinancial';
import { convertToBackendDate } from '../utils/formatDate';

export const useCreateProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleCreateProduct = async (product: ProductFinancial) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const formattedDateRelease = product.date_release ? convertToBackendDate(product.date_release) : '';
      const formattedDateRevision = product.date_revision ? convertToBackendDate(product.date_revision) : '';

      const productWithFormattedDates = {
        ...product,
        date_release: formattedDateRelease,
        date_revision: formattedDateRevision,
      };

      await createProduct(productWithFormattedDates);
      setSuccess(true);
    } catch (error) {
      setError('Failed to create product: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateProduct, loading, error, success };
};

