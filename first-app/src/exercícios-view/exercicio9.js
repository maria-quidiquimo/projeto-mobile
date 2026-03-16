import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09 () {
  return <View style={styles.container}>
    <View style={styles.retangulo}>
        <View style={styles.vermelho}>
        </View>
        <View style={styles.amarelo}>
        </View>
        <View style={styles.verde}>
        </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
    pagging: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  vermelho: {
    height: 80,
    width: 80,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  amarelo: {
    height: 80,
    width: 80,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  verde: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  retangulo: {
    backgroundColor: 'black',
    borderRadius: 15,
    width: 150,
    height: 300,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});