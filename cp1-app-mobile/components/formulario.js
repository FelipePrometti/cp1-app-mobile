import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function CalculadoraForm({ navigation }) {
  const [produtoNome, setProdutoNome] = useState('');
  const [precoInicial, setPrecoInicial] = useState('');
  const [taxaAumento, setTaxaAumento] = useState('');

  const executarCalculo = () => {
    if (!produtoNome || !precoInicial || !taxaAumento) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const valorInicial = parseFloat(precoInicial);
    const porcentagem = parseFloat(taxaAumento);

    if (isNaN(valorInicial) || isNaN(porcentagem)) {
      Alert.alert('Valores inválidos');
      return;
    }

    const incremento = (valorInicial * porcentagem) / 100;
    const valorFinal = valorInicial + incremento;

    navigation.navigate('Resultado', {
      produtoNome,
      precoInicial: valorInicial,
      taxaAumento: porcentagem,
      valorFinal,
      incremento,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Acréscimo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={produtoNome}
        onChangeText={setProdutoNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço Inicial"
        value={precoInicial}
        onChangeText={setPrecoInicial}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Taxa de Aumento (%)"
        value={taxaAumento}
        onChangeText={setTaxaAumento}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={executarCalculo} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 15,
    paddingHorizontal: 8,
  },
});
