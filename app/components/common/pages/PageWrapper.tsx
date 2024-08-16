import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  margin:{
    marginHorizontal: 20
  }
});

type PageWrapperProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.margin}>
      {children}
      </View>
    </View>
  );
};

export default PageWrapper;