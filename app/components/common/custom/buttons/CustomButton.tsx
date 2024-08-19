import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  disabledButton: {
    backgroundColor: "#d3d3d3",
  },
  disabledText: {
    color: "#a9a9a9",
  },
});

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#FFDD00",
  textColor = "black",
  disabled = false,
  loading = false,
  children,
}) => {
  const buttonStyle: ViewStyle = {
    ...styles.button,
    backgroundColor: disabled ? "#d3d3d3" : backgroundColor,
  };

  const buttonTextStyle: TextStyle = {
    ...styles.buttonText,
    color: disabled ? "#a9a9a9" : textColor,
  };

  let content;
  if (loading) {
    content = <ActivityIndicator size="small" color={textColor} />;
  } else if (children) {
    content = children;
  } else {
    content = <Text style={buttonTextStyle}>{title}</Text>;
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled || loading ? undefined : onPress}
      disabled={disabled || loading}
    >
      {content}
    </TouchableOpacity>
  );
};

export default CustomButton;
