import React from 'react';
import { View, Text, TextInput, StyleSheet, TextStyle } from 'react-native';
import useFormattedText from '@/app/hooks/useFormattedText';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
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
  error?: string | null;
  isDate?: boolean;
  editable?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ name, value, onChangeText, error, isDate = false, editable = true }) => {
  const handleTextChange = useFormattedText(isDate, onChangeText);

  const inputStyle = [styles.input, error ? styles.inputError : undefined] as TextStyle[];

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.name}>{name}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={handleTextChange}
        placeholder={isDate ? 'DD/MM/YYYY' : ''}
        editable={editable}
        keyboardType={isDate ? 'numeric' : 'default'}
        maxLength={isDate ? 10 : undefined}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
