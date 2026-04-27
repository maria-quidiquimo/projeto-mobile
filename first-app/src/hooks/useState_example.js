import { useState } from "react"
import { TouchableOpacity, View, Text, StyleSheet} from "react-native"

export default function ContadorExemplo() {
    const [contador, setContador] = useState(0)
    return (
        <View style={styles.container}>
            <Text>{contador}</Text>
            <TouchableOpacity onPress={() => setContador((prev) => prev + 1)} style={styles.button}>{/* O prev é como se fosse um anti bugs, ele ajuda a variável contador a não bugar, usamos ele quando um valor depende do valor atual. */}
                <Text style={styles.text}> Clique para acrescentar o valor </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
},

button: {
backgroundColor: "#f772e3",
padding: 12,
borderRadius: 8,
marginTop: 16,
},

text: {
color: "#fff",
},
});