import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
    },
    logoImage: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
    },
    logoText: {
      color: '#9E9EA1',
    },
  });

interface ProductLogoProps {
  logoUri: string;
}

const ProductLogo: React.FC<ProductLogoProps> = ({ logoUri }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Logo</Text>
      <Image source={{ uri: logoUri }} style={styles.logoImage} testID="logo-image" />
    </View>
  );
};
export default ProductLogo;
