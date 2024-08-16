import axiosInstance from '@/app/api/axiosConfig';

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/bp/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products: ' + (error as Error).message);
  }
};
