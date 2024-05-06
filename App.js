import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FibonacciInput from './FibonacciInput';
import FibonacciSequence from './FibonacciSequence';

const App = () => {
  const [sequence, setSequence] = useState([]);

  const generateFibonacciSequence = (length) => {
    const fibSequence = [0, 1];
    for (let i = 2; i < length; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    setSequence(fibSequence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Fibonacci</Text>
      <FibonacciInput generateSequence={generateFibonacciSequence} />
      <FibonacciSequence sequence={sequence} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
