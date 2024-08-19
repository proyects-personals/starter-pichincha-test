import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      height:'100%'
    },
    message: {
      fontSize: 16,
      color: "#9A9A9A",
    },
  });

  
type NoContentProps = {
  message: string;
};

const NoContent: React.FC<NoContentProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default NoContent;
