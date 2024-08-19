import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, Image } from "react-native";
import tarjetImage from "../../../assets/icons/tarjeta-de-credito.png";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 14,
    color: "#314573",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
  iconPlaceholder: {
    width: 24,
  },
  logoImage: {
    width: 24,  
    height: 24,
    resizeMode: 'contain',
    tintColor: '#314573',
  },
});

interface CustomHeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const HeaderCustom: React.FC<CustomHeaderProps> = ({ title, style }) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Image source={tarjetImage} style={styles.logoImage} />
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.iconPlaceholder} />
    </View>
  );
};

export default HeaderCustom;
