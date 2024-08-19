import React, { useState, useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import ProductSearch from "@/app/components/products/ProductSearch";
import SearchBar from "@/app/components/search/SearchBar";
import { useProducts } from "@/app/hooks/useProducts";
import { ProductFinancial } from "@/app/interface/ProductFinancial";
import CustomButton from "@/app/components/common/custom/buttons/CustomButton";
import { filterProducts } from "@/app/utils/filterProducts";
import ErrorScreen from "@/app/errors/ErrorScreen";
import { AppNavigationProp } from "@/app/routes/types";
import { useNavigation } from "expo-router";
import { RouteNames } from "@/app/enums/routeNames";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    marginBottom: 24,
  },
  buttonContainer: {
    marginBottom: 10,
    width: "100%",
  },
});

const ListProductScreen: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductFinancial[]>(
    []
  );
  const { products, loading, error } = useProducts();
  const navigation: AppNavigationProp = useNavigation<AppNavigationProp>();

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = (query: string) => {
    const result = filterProducts(products, query);
    setFilteredProducts(result);
  };

  if (error)
    return (
      <ErrorScreen message="Tuvimos un error al obtener la información, intenta más tarde." />
    );

  const navigateCreateProduct = () => {
    navigation.navigate(RouteNames.createProduct);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <PageWrapper>
          <SearchBar onSearch={handleSearch} />
          <View style={styles.contentContainer}>
            <ProductSearch products={filteredProducts} isLoading={loading} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Agregar"
              onPress={navigateCreateProduct}
              textColor="#142958"
            />
          </View>
        </PageWrapper>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ListProductScreen;
