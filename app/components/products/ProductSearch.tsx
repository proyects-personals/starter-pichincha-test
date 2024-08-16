import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import rightArrowImage from "../../../assets/icons/right-arrow.png";

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
});

interface Product {
  id: string;
  name: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductSearch: React.FC<ProductListProps> = ({ products }) => {

  const onItemPress = (id: string) => {
    console.log("Item pressed with ID:", id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onItemPress(item.id)}>
            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.id}>ID: {item.id}</Text>
            </View>
            <Image source={rightArrowImage} style={styles.icon} tintColor="#888" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductSearch;
