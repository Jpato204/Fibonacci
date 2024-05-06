import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FibonacciSequence = ({ sequence }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secuencia de Fibonacci:</Text>
      <View style={styles.sequenceContainer}>
        {sequence.map((number, index) => (
          <Text key={index} style={styles.number}>
            {number}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sequenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  number: {
    fontSize: 16,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default FibonacciSequence;
