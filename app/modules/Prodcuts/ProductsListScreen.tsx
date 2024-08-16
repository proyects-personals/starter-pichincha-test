import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import ProductSearch from "@/app/components/products/ProductSearch";
import SearchBar from "@/app/components/search/SearchBar";
import { useProducts } from '@/app/hooks/useProducts';
import { ProductFinancial } from '@/app/interface/ProductFinancial';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: 12,
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
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.id.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <PageWrapper>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <ProductSearch products={filteredProducts} />
      </View>
    </PageWrapper>
  );
};

export default ProductsListScreen;
