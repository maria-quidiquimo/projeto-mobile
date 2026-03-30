import { View, Text, StyleSheet } from "react-native";

export default function AvaliacaoPratica12() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.amarelo}>
            <Text style={styles.textStyle}>Amarelo</Text>
        </View>
        <View style={styles.azulescuro}>
            <Text style={styles.textStyle}>Azul Escuro</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.verde}>
          <Text style={styles.textStyle}> Verde </Text>
        </View>
        <View style={styles.containerMain}>
          <View style={styles.rosa}>
            <Text style={styles.textStyle}> Rosa </Text>
          </View>
          <View style={styles.laranja}>
            <Text style={styles.textStyle}> Laranja </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.vermelho}>
          <Text style={styles.textStyle}> Vermelho </Text>
        </View>
        <View style={styles.teal}>
          <Text style={styles.textStyle}> Teal </Text>
        </View>
        <View style={styles.roxo}>
          <Text style={styles.textStyle}> Roxo </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    flexDirection: 'column'
  },
  textStyle:{
    color: "#ffffff",
    fontWeight: "bold",
  },
  header:{
    height: 60,
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  amarelo: {
    backgroundColor: "#e1e101",
    flex: 1,
    borderRadius: 3,
    height: 60,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column'
  },
  azulescuro:{
    backgroundColor: "#2d2ba7",
    flex:3,
    borderRadius: 3,
    height: 60,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  main:{
    flexDirection: 'row',
    flex: 1,
    gap: 8
  },
  rosa:{
    backgroundColor: "#ff6be6",
    borderRadius: 3,
    flex: 1,
    justifyContent: 'center',
    width: 200,
    height: 80,
    alignItems: 'center',
  },
  containerMain:{
    flexDirection: 'column',
    padding: 8,
    gap: 8
  },
  laranja:{
    backgroundColor: "#fe972a",
    width: 200,
    borderRadius: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verde:{
    backgroundColor: "#64ff3d",
    fontWeight: "bold",
    borderRadius: 3,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  vermelho:{
    backgroundColor: "#f60f0f",
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  teal:{
    backgroundColor: "#437f6b",
    borderRadius: 3,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  roxo:{
    backgroundColor: "#bd00f7",
    borderRadius: 3,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  footer:{
    flexDirection:"row",
    height: 90,
    gap: 8
  }
});