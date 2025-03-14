import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ExibicaoResultado({ route, navigation }) {
  const { produtoNome, precoInicial, taxaAumento, valorFinal, incremento } = route.params;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Resultado do Cálculo</Text>
      <Text style={styles.info}>Produto: {produtoNome}</Text>
      <Text style={styles.info}>Preço Inicial: R$ {precoInicial.toFixed(2)}</Text>
      <Text style={styles.info}>Taxa de Aumento: {taxaAumento.toFixed(2)}%</Text>
      <Text style={styles.info}>Preço Final: R$ {valorFinal.toFixed(2)}</Text>
      <Text style={styles.info}>Incremento: R$ {incremento.toFixed(2)}</Text>

      <Button title="Retornar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
