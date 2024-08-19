import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PageWrapper from "@/app/components/common/pages/PageWrapper";
import { RouteNames } from "@/app/enums/routeNames";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import FormInput from "@/app/components/products/FormInput";
import CustomButton from "@/app/components/common/custom/buttons/CustomButton";
import { AppNavigationProp, NavigationScreens } from "@/app/routes/types";
import { useProductForm } from "@/app/hooks/useProductForm";

const styles = StyleSheet.create({
  container: {
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
});

const CreateProductScreen = () => {
  const route = useRoute<RouteProp<NavigationScreens, RouteNames.createProduct | RouteNames.updateByIdProduct>>();
  const navigation = useNavigation<AppNavigationProp>();

  const { formData, errors, loading, isEditing, handleChange, handleSubmit, resetForm } = useProductForm(route.params?.product);

  const handleNavigation = () => {
    navigation.navigate(RouteNames.ListProduct);
  };

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{isEditing ? "Editar Producto" : RouteNames.createProduct}</Text>
        
        <FormInput
          name="ID"
          value={formData.id}
          onChangeText={(text) => handleChange("id", text)}
          error={errors.id ?? undefined}
          editable={!isEditing}
        />
        <FormInput
          name="Nombre"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          error={errors.name ?? undefined}
        />
        <FormInput
          name="Descripción"
          value={formData.description}
          onChangeText={(text) => handleChange("description", text)}
          error={errors.description ?? undefined}
        />
        <FormInput
          name="Logo"
          value={formData.logo}
          onChangeText={(text) => handleChange("logo", text)}
          error={errors.logo ?? undefined}
        />
        <FormInput
          name="Fecha Liberación"
          value={formData.date_release}
          onChangeText={(text) => handleChange("date_release", text)}
          error={errors.date_release ?? undefined}
          isDate
        />
        <FormInput
          name="Fecha Revisión"
          value={formData.date_revision}
          onChangeText={(text) => handleChange("date_revision", text)}
          error={errors.date_revision ?? undefined}
          isDate
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title={isEditing ? "Actualizar" : "Enviar"}
            textColor="#253A6B"
            onPress={() => handleSubmit(handleNavigation)}
            loading={loading}
          />
          <CustomButton
            title="Reiniciar"
            backgroundColor="#E9ECF3"
            textColor="#253A6B"
            onPress={resetForm}
          />
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default CreateProductScreen;
