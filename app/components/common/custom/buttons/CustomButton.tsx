import React, { ReactNode }from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  disabledButton: {
    backgroundColor: "#d3d3d3", // Color gris para el botón deshabilitado
  },
  disabledText: {
    color: "#a9a9a9", // Color gris para el texto del botón deshabilitado
  },
});

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#FFDD00",
  textColor = "black",
  disabled = false,
  children
}) => {
  const buttonStyle: ViewStyle = {
    ...styles.button,
    backgroundColor: disabled ? "#d3d3d3" : backgroundColor,
  };

  const buttonTextStyle: TextStyle = {
    ...styles.buttonText,
    color: disabled ? "#a9a9a9" : textColor,
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {children ? children : <Text style={buttonTextStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
