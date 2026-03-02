import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Lista01 from './exercícios-jsx/lista-01';
import Lista02 from './exercícios-jsx/lista-02';

export default function App() {
  return (
    <Lista02 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
