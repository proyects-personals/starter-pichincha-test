import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFDD00",
    width: "100%",
    height:50,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textTransform: "capitalize", 
  },
});

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
