import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
 
export default function App() {
  const [productName, setProductName] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const [percentageIncrease, setPercentageIncrease] = useState('');
  const [result, setResult] = useState(null);
 
  const calcularAumento = () => {
    if (!productName || !originalValue || !percentageIncrease) {
      Alert.alert('Error', 'Verifique se você preencheu todos os campos.');
      return;
    }
 
    const value = parseFloat(originalValue);
    const percentage = parseFloat(percentageIncrease);
 
    if (isNaN(value) || isNaN(percentage)) {
      Alert.alert('Erro', 'Valores inválidos.');
      return;
    }
 
    const increase = (value * percentage) / 100;
    const newValue = value + increase;
 
    setResult({
      originalValue: value,
      percentageIncrease: percentage,
      newValue: newValue,
      ValueIncrease: increase,
    });
  };
 
  return (
<View style={styles.container}>
<TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={productName}
        onChangeText={setProductName}
      />
<TextInput
        style={styles.input}
        placeholder="Valor original"
        value={originalValue}
        onChangeText={setOriginalValue}
        keyboardType="numeric"
      />
<TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento"
        value={percentageIncrease}
        onChangeText={setPercentageIncrease}
        keyboardType="numeric"
      />
<Button title="Calcular" onPress={calcularAumento} />
 
      {result && (
<View style={styles.resultadoContainer}>
<Text style={styles.resultadoText}>Valor novo: {result.newValue}</Text>
<Text style={styles.resultadoText}>Valor do aumento: {result.ValueIncrease}</Text>
</View>
      )}
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00FFAEFF',
  },
  resultadoText: {
    fontSize: 13,
    marginBottom: 5,
  },
});