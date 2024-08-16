import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TextStyle, ViewStyle, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { parseDate, formatDate } from "@/app/utils/formValidations";

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 2,
  },
  name: {
    marginBottom: 6,
  },
});

interface FormInputProps {
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string | null; // Cambiado a string | null
  isDate?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ name, value, onChangeText, error, isDate = false }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      // Convertir la fecha al formato YYYY-MM-DD
      const formattedDate = formatDate(selectedDate);
      onChangeText(formattedDate);
    }
  };

  const handleManualInput = (text: string) => {
    if (isDate) {
      // Validar y convertir el formato DD/MM/YYYY a YYYY-MM-DD
      const [day, month, year] = text.split("/").map(Number);
      if (day && month && year) {
        const date = new Date(year, month - 1, day);
        if (!isNaN(date.getTime())) {
          onChangeText(formatDate(date));
        }
      }
    } else {
      onChangeText(text);
    }
  };

  const inputStyle = [styles.input, error ? styles.inputError : undefined] as TextStyle[];

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={() => isDate && setShowDatePicker(true)}>
        <TextInput
          style={inputStyle}
          value={value}
          onChangeText={handleManualInput}
          placeholder={isDate ? "YYYY-MM-DD" : ""}
          editable={!isDate}
          onFocus={() => isDate && setShowDatePicker(true)}
        />
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {showDatePicker && isDate && (
        <DateTimePicker
          value={value ? parseDate(value) : new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default FormInput;
