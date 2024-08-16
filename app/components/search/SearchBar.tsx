import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      height: 50,
      width:'100%',
      marginTop: 60,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 3,
      paddingHorizontal: 10,
    },
  });

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
      <TextInput
        style={styles.input}
        placeholder="Search.."
        value={query}
        onChangeText={handleChange}
      />
  );
};

export default SearchBar;
