import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import ProductSearch from "@/app/components/products/ProductSearch";
import SearchBar from "@/app/components/search/SearchBar";
import { useProducts } from '@/app/hooks/useProducts';
import { ProductFinancial } from '@/app/interface/ProductFinancial';
import CustomButton from '@/app/components/common/custom/buttons/CustomButton';
import { filterProducts } from '@/app/utils/filterProducts';
import NoContent from '@/app/errors/NoContent';
import ErrorScreen from '@/app/errors/ErrorScreen';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  message: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#9A9A9A',
  },
});

const ProductsListScreen: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductFinancial[]>([]);
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = (query: string) => {
    const result = filterProducts(products, query);
    setFilteredProducts(result);
  };

  if (error) return <ErrorScreen message='Tuvimos un error al obtener la información, intenta más tarde.' />;

  return (
    <PageWrapper>
      <View style={styles.container}>
        <View style={{ height: '90%' }}>
          <SearchBar onSearch={handleSearch} />
          {loading  || filteredProducts.length === 0 && (
            <NoContent message='No existe el producto' />
          )}
          <ProductSearch products={filteredProducts} isLoading={loading} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Agregar" onPress={() => {/* Acción del botón */}} />
        </View>
      </View>
    </PageWrapper>
  );
};

export default ProductsListScreen;
