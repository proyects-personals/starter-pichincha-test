import axiosInstance from '@/app/api/axiosConfig';
import { ProductFinancial } from '../interface/ProductFinancial';

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/bp/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products: ' + (error as Error).message);
  }
};

export const createProduct = async (product: ProductFinancial) => {
  try {
    const response = await axiosInstance.post('/bp/products', product);
    return response.data;
  } catch (error) {
    throw new Error('Error creating product: ' + (error as Error).message);
  }
};

export const verifyProductId = async (id: string): Promise<boolean> => {
  try {
    const response = await axiosInstance.get('/bp/products/verification', {
      params: { id },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error verifying product ID: ' + (error as Error).message);
  }
};

export const updateProduct = async (product: ProductFinancial) => {
  try {
    const response = await axiosInstance.put('/bp/products', product);
    return response.data;
  } catch (error) {
    throw new Error('Error updating product: ' + (error as Error).message);
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete('/bp/products', {
      params: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error('Error deleting product: ' + (error as Error).message);
  }
};