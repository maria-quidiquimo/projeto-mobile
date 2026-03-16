import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08 () {
  return <View style={styles.container}>
    <View style={styles.sideBar}>
        <Text style={styles.textStyle}> side Bar</Text>
    </View>
    <View style={styles.cardContainer}>
        <View style={styles.card1}>
            <Text style={styles.textStyle}> card 1</Text>
        </View>
        <View style={styles.card2}>
            <Text style={styles.textStyle}> card 2</Text>
        </View>
        <View style={styles.card3}>
            <Text style={styles.textStyle}> card 3</Text>
        </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    height: '100%'
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "column",
    gap: 10,
    padding: 10,
    flex: 1
  },
  card1: {
    padding: 10,
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  card2: {
    padding: 10,
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
 card3: {
    padding: 10,
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  sideBar: {
    backgroundColor: 'gray',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80
  }
});