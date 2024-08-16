import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PageWrapper from "../components/common/pages/PageWrapper";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  message: {
    fontSize: 16,
    color: "#9A9A9A",
    textAlign: "center",
  },
});

type ErrorScreenProps = {
  message: string;
};

const ErrorScreen: React.FC<ErrorScreenProps> = ({ message }) => {
  return (
    <PageWrapper>
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </PageWrapper>
  );
};

export default ErrorScreen;
