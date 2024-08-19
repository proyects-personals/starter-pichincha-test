import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '@/app/services/productService';
import { ProductFinancial } from '../interface/ProductFinancial';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductFinancial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener productos
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null); // Limpiar errores anteriores antes de hacer la solicitud
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      setError('Failed to fetch products: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar la carga de productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Devolver los productos, estados de carga, error y la función de refresco
  return { products, loading, error, refetch: fetchProducts };
};
