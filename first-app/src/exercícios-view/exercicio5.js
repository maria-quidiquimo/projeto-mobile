import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05 () {
  return <View style={styles.container}>
    <View style={styles.blueBox}>
        <Text style={styles.textStyle}>Coluna 1</Text>
    </View>
    <View style={styles.greenBox}>
        <Text style={styles.textStyle}>Coluna 2</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
    flexDirection: 'row'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  blueBox: {
    height: '100%',
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
   
  },
  greenBox: {
    height: '100%',
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});