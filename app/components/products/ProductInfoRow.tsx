import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      gap: 10,
    },
    label: {
      color: '#9E9EA1',
    },
    value: {
      color: '#333',
      textAlign: 'right',
      flex: 1,
    },
  });
  
interface ProductInfoRowProps {
  label: string;
  value: string;
}

const ProductInfoRow: React.FC<ProductInfoRowProps> = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default ProductInfoRow;
