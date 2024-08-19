import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import PageWrapper from '@/app/components/common/pages/PageWrapper';
import { AppNavigationProp, NavigationScreens } from '@/app/routes/types';
import { RouteNames } from '@/app/enums/routeNames';
import ProductInfoRow from '@/app/components/products/ProductInfoRow';
import ProductLogo from '@/app/components/products/ProductLogo';
import CustomButton from '@/app/components/common/custom/buttons/CustomButton';
import { formatDateString } from '@/app/utils/formatDate';
import ConfirmationModal from '@/app/components/products/ConfirmationModal';
import { useDeleteProduct } from '@/app/hooks/useDeleteProduct'; // Ajusta la ruta según tu estructura de proyecto

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom: 0,
    marginVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  containerInformation: {
    marginTop: 30,
    flex: 2,
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    color: '#9E9EA1',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    gap: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const UpdateProductScreen = () => {
  const route = useRoute<RouteProp<NavigationScreens, RouteNames.updateProduct>>();
  const navigation: AppNavigationProp = useNavigation<AppNavigationProp>();
  const { product } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteProductById, loading } = useDeleteProduct();

  const deleteProduct = () => {
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteProductById(product.id);
      navigation.navigate(RouteNames.ListProduct);
    } catch (err) {
      console.error('Error deleting product:', err);
    } finally {
      setModalVisible(false);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
  };

  const navigateUpdateProduct = () => {
    console.log('navigate update product');
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

      <ConfirmationModal
        visible={modalVisible}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        productName={product.name}
        isLoading={loading}
      />
    </PageWrapper>
  );
};

export default UpdateProductScreen;
