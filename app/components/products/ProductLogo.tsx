import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logoContainer: {
      flexDirection: 'column',
    },
    logoImage: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
    },
    label: {
      color: '#9E9EA1',
    },
  });

interface ProductLogoProps {
  logoUri: string;
}

const ProductLogo: React.FC<ProductLogoProps> = ({ logoUri }) => (
  <View style={styles.logoContainer}>
    <Text style={styles.label}>Logo:</Text>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: logoUri }} style={styles.logoImage} />
    </View>
  </View>
);

export default ProductLogo;
