import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import rightArrowImage from "../../../assets/icons/right-arrow.png";
import SkeletonLoader from './SkeletonLoader';
import { AppNavigationProp } from '@/app/routes/types';
import { RouteNames } from '@/app/enums/routeNames';
import { ProductFinancial } from '@/app/interface/ProductFinancial';
import NoContent from '@/app/errors/NoContent';

const { height } = Dimensions.get('window'); // Obtén la altura de la pantalla

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    color: '#333',
  },
  id: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  icon: {
    width: 10,
    height: 10,
  },
  listContainer: {
    minHeight: Math.min(height * 0.6, 6 * 60), // Ajusta la altura mínima (60 es una estimación del alto del ítem)
  },
});

interface ProductListProps {
  products: ProductFinancial[];
  isLoading: boolean;
}

const ProductSearch: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const navigation = useNavigation<AppNavigationProp>();

  const onItemPress = (product: ProductFinancial) => {
    navigation.navigate(RouteNames.updateProduct, { product });
    console.log(product);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
      {isLoading ||
          (products.length === 0 && (
            <NoContent message="No existe el producto" />
          ))}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
              <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.id}>ID: {item.id}</Text>
              </View>
              <Image source={rightArrowImage} style={styles.icon} tintColor="#888" />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ProductSearch;
