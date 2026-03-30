import { View, Text, StyleSheet } from "react-native";

export default function AvaliacaoPratica13() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}> Header </Text>
      </View>
      
      <View style={styles.main}>
        <View style={styles.sideBar}> 
          <Text style={styles.textStyle}> Side Bar</Text>
        </View>
        <View style={styles.mainDireita}>
          <View style={styles.principal}>
            <View style={styles.verde}>
              <Text style={styles.textStyle}> Verde </Text>
            </View>
            <View style={styles.azul}>
              <Text style={styles.textStyle}> Azul </Text>
            </View>
          </View>
          <View style={styles.circulo}>
          </View>
        </View>
          <View style={styles.vermelho}>
            <Text style={styles.textStyle}> Vermelho </Text>
          </View>
          <View style={styles.laranja}>
            <Text style={styles.textStyle}> Laranja </Text>
          </View>
          <View style={styles.roxo}>
            <Text style={styles.textStyle}> Roxo </Text>
          </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}> Footer </Text>
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
  },
  textStyle:{
    color: "#ffffff",
    fontWeight: "bold",
  },
  header:{
    backgroundColor:"#2c3e50",
    height: 60,
    borderRadius: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center"
  },
  main:{
    flex: 1,
    flexDirection: 'row',
    gap: 8
  },
  sideBar:{
    backgroundColor: "#95a5a6",
    borderRadius: 3,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDireita:{
    flex: 1,
    flexDirection: 'column',
  },
  verde:{
    backgroundColor: '#51ff2e',
    borderRadius: 3,
    flex: 1,
  },
  azul:{
    backgroundColor: '#35d7ff',
    borderRadius: 3,
    flex: 1,
  },
  circulo:{
    backgroundColor: '#34495e',
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  principal:{
    flexDirection: 'row',
    gap: 8,
  },
  vermelho:{
    backgroundColor: "#fb1919",
    borderRadius: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  laranja:{
    backgroundColor: "#fda430",
    borderRadius: 3,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roxo:{
    backgroundColor: "#ea32ff",
    borderRadius: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    backgroundColor: '#2c3e50',
    height: 50,
    gap: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  }
});