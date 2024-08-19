import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import { RouteNames } from "@/app/enums/routeNames";
import { useNavigation } from "@react-navigation/native";
import { useCreateProduct } from "@/app/hooks/useCreateProduct";
import {
  validateDescription,
  validateId,
  validateLogo,
  validateName,
  validateReleaseDate,
  validateReviewDate,
} from "@/app/utils/formValidations";
import { ProductFinancial } from "@/app/interface/ProductFinancial";
import FormInput from "@/app/components/products/FormInput";
import CustomButton from "@/app/components/common/custom/buttons/CustomButton";
import { AppNavigationProp } from "@/app/routes/types";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    gap: 4,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
    marginBottom: 20,
  },
  loadingText: {
    color: "#142958",
  },
});

const CreateProductScreen = () => {
  const [formData, setFormData] = useState<ProductFinancial>({
    id: "",
    name: "",
    description: "",
    logo: "",
    date_release: "",
    date_revision: "",
  });

  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const navigation: AppNavigationProp = useNavigation<AppNavigationProp>();
  const { handleCreateProduct, loading } = useCreateProduct();

  const handleChangeText = (name: keyof ProductFinancial, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value).then((error) => {
      setErrors((prevState) => ({ ...prevState, [name]: error }));
    });
  };

  const validateField = async (name: keyof ProductFinancial, value: string) => {
    switch (name) {
      case "id":
        return await validateId(value);
      case "name":
        return await validateName(value);
      case "description":
        return await validateDescription(value);
      case "logo":
        return await validateLogo(value);
      case "date_release":
        return await validateReleaseDate(value);
      case "date_revision":
        return await validateReviewDate(value, formData.date_release);
      default:
        return "";
    }
  };

  const createProduct = async () => {
    try {
      await handleCreateProduct(formData);
      navigation.navigate(RouteNames.ListProduct);
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  const limpiar = () => {
    setFormData({
      id: "",
      name: "",
      description: "",
      logo: "",
      date_release: "",
      date_revision: "",
    });
    setErrors({});
  };

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{RouteNames.createProduct}</Text>

        <FormInput
          name="ID"
          value={formData.id}
          onChangeText={(text) => handleChangeText("id", text)}
          error={errors.id ?? undefined}
        />
        <FormInput
          name="Nombre"
          value={formData.name}
          onChangeText={(text) => handleChangeText("name", text)}
          error={errors.name ?? undefined}
        />
        <FormInput
          name="Descripción"
          value={formData.description}
          onChangeText={(text) => handleChangeText("description", text)}
          error={errors.description ?? undefined}
        />
        <FormInput
          name="Logo"
          value={formData.logo}
          onChangeText={(text) => handleChangeText("logo", text)}
          error={errors.logo ?? undefined}
        />
        <FormInput
          name="Fecha Liberación"
          value={formData.date_release}
          onChangeText={(text) => handleChangeText("date_release", text)}
          error={errors.date_release ?? undefined}
          isDate
        />
        <FormInput
          name="Fecha Revisión"
          value={formData.date_revision}
          onChangeText={(text) => handleChangeText("date_revision", text)}
          error={errors.date_revision ?? undefined}
          isDate
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Enviar"
            textColor="#253A6B"
            onPress={createProduct}
            loading={loading}
          />
          <CustomButton
            title="Reiniciar"
            backgroundColor="#E9ECF3"
            textColor="#253A6B"
            onPress={limpiar}
            disabled={loading}
          />
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default CreateProductScreen;
