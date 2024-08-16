import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  icon: {
    padding: 10,
  },
  headerText: {
    fontSize: 14,
    color: "#314573",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  iconPlaceholder: {
    width: 24,
  },
});

interface CustomHeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const HeaderCustom: React.FC<CustomHeaderProps> = ({ title, style }) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.iconPlaceholder} />
    </View>
  );
};

export default HeaderCustom;
