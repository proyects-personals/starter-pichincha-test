import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  margin:{
    marginTop:50,
    marginBottom:10,
    marginHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
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