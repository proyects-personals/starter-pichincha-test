// ProductsListScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import ProductSearch from "@/app/components/products/ProductSearch";
import SearchBar from "@/app/components/search/SearchBar";

interface Product {
  id: string;
  name: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: 12,
  },
});

const allProducts: Product[] = [
  { id: "1", name: "Producto 1" },
  { id: "2", name: "Producto 2" },
  { id: "123456", name: "Producto 3" },
];

const ProductsListScreen: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const handleSearch = (query: string) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.id.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

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
