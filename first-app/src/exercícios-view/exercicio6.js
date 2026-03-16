import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.textStyle}> Header </Text>
    </View>
    <View style={styles.mainContent}>
        <Text style={styles.textStyle}> main Content </Text>
    </View>
    <View style={styles.footer}>
        <Text style={styles.textStyle}> footer </Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    height: '100%',
    width: '100%',
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});