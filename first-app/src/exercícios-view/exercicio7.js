import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07 () {
  return <View style={styles.container}>
    <View style={styles.linha}>
        <View style={styles.verde}>
        </View>
        <View style={styles.vermelho}>
        </View>
    </View>
    <View style={styles.linha}>
        <View style={styles.azul}>
        </View>
        <View style={styles.amarelo}>
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
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  linha: {
    flexDirection: 'row',
    gap: 18,
    flex: 1,
  },
  vermelho: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  verde: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  azul: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  amarelo: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});