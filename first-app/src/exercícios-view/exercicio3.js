import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return <View style={styles.container}>
    <View style={styles.redBox}>
        <Text style={styles.textStyle}>Vermelho</Text>
    </View>
    <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Verde</Text>
    </View>
    <View style={styles.blueBox}>
        <Text style={styles.textStyle}>Azul</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    gap: 18,
    flexDirection: 'row'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 70,
    width: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: 'space-between',
  },
});