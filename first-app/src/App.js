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
import ExercicioView06 from './exercícios-view/exercicio6';
import ExercicioView07 from './exercícios-view/exercicio7';
import ExercicioView08 from './exercícios-view/exercicio8';
import ExercicioView09 from './exercícios-view/exercicio9';
import AvaliacaoPratica13 from './avaliacoes-praticas/avaliacao-pratica-pt1-ex13';
import AvaliacaoPratica12 from './avaliacoes-praticas/avaliacao-pratica-pt1-ex12';
import CartaoPerfil from './basic_components/props-aula4-cartao-perfil';
import CardProduto from './exercicios-aula4-props/exercicio1-aula4';
import CartaoUsuario from './exercicios-aula4-props/exercicio2-aula4';
import CardSaudacao from './exercicios-aula4-props/exercicio3-aula4';
import PerfilAluno from './exercicios-aula4-props/exercicio4-aula4';
import DesafioBotao from './exercicios-aula4-props/desafio-aula4';
import ContadorExemplo from './hooks/useState_example';

export default function App() {
  return (
    <ContadorExemplo/>
    
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
