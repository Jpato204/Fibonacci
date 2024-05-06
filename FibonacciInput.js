import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const FibonacciInput = ({ generateSequence }) => {
  const [length, setLength] = useState('');

  const handleGenerate = () => {
    if (length !== '') {
      generateSequence(parseInt(length));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Longitud de la secuencia"
        value={length}
        onChangeText={setLength}
      />
      <Button title="Generar" onPress={handleGenerate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default FibonacciInput;
