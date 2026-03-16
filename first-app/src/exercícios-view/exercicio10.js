import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <View style={styles.cards}>
        <View style={styles.card1}>

        </View>
        <View style={styles.card2}>

        </View>
        <View style={styles.card3}>

        </View>
    </View>
    <View style={styles.linha}>
        <View style={styles.main}>

        </View>
        <View style={styles.lateral}>

        </View>
    </View>
    <View style={styles.footer}>

    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
  },
  header: {
   backgroundColor: 'green'
  },
  cards: {
    
  },
  card1: {
    
  },
  card2: {

  },
  card3: {

  },
  linha: {

  },
  main: {

  },
  footer: {
    backgroundColor: 'blue'
  }
});