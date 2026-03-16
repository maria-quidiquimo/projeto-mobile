import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Lista01 from './exercícios-jsx/lista-01';
import Lista02 from './exercícios-jsx/lista-02';
import Lista03 from './exercícios-jsx/lista-03';
import ViewScaffold from './basic_components/view_example';
import ViewScaffold2 from './basic_components/view_example02';
import ExercicioView01 from './exercícios-view/exercicio1';
import ExercicioView02 from './exercícios-view/exercicio2';
import ExercicioView03 from './exercícios-view/exercicio3';
import ExercicioView04 from './exercícios-view/exercicio4';
import ExercicioView05 from './exercícios-view/exercicio5';

export default function App() {
  return (
    <ExercicioView05/>
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
