import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import { NavigationScreens } from "@/app/routes/types";
import { RouteNames } from "@/app/enums/routeNames";
import ProductInfoRow from "@/app/components/products/ProductInfoRow";
import ProductLogo from "@/app/components/products/ProductLogo";
import CustomButton from "@/app/components/common/custom/buttons/CustomButton";
import { formatDateString } from "@/app/utils/formatDate";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginBottom: 0,
    marginVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  containerInformation: {
    marginTop: 30,
    flex: 2,
    justifyContent: "space-between",
  },
  id: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  label: {
    color: "#9E9EA1",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    gap: 10,
  },
});

const UpdateProductScreen = () => {
  const route =
    useRoute<RouteProp<NavigationScreens, RouteNames.updateProduct>>();
  const { product } = route.params;

  const deleteProduct = () => {
    console.log("delete product|");
  };

  const navigateUpdateProduct = () => {
    console.log("navigate update product");
  };

  return (
    <PageWrapper>
      <Text style={styles.id}>ID: {product.id}</Text>
      <Text style={styles.label}>Información extra</Text>

      <View style={styles.containerInformation}>
        <ProductInfoRow label="Nombre:" value={product.name} />
        <ProductInfoRow label="Descripción:" value={product.description} />
        <ProductLogo logoUri={product.logo} />
        <ProductInfoRow
          label="Fecha Liberación:"
          value={formatDateString(product.date_release)}
        />
        <ProductInfoRow
          label="Fecha Revisión:"
          value={formatDateString(product.date_revision)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Editar"
          backgroundColor="#E9ECF3"
          textColor="#253A6B"
          onPress={navigateUpdateProduct}
        />
        <CustomButton
          title="Eliminar"
          backgroundColor="red"
          textColor="white"
          onPress={deleteProduct}
        />
      </View>
    </PageWrapper>
  );
};

export default UpdateProductScreen;
