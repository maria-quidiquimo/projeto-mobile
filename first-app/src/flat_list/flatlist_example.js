import { FlatList, View, Text, StyleSheet } from "react-native"

export default function FlatListExemplo(){
    const alunos = [
        {id: "1", nome: "Maria", nota: 10},
        {id: "2", nome: "Daniel", nota: 10},
        {id: "3", nome: "Renata", nota: 8},
        {id: "4", nome: "Lorena", nota: 7},
        {id: "5", nome: "Giovanna", nota: 7},
        {id: "6", nome: "Tainá", nota: 7.5}
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>FlatList</Text>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}> FlatList Básico</Text>
                <FlatList 
                data={alunos}
                keyExtractor={(aluno) => aluno.id}
                renderItem={({item: aluno}) => (
                    <View>
                        <Text>{aluno.nome} - {aluno.nota}</Text>
                    </View>
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#f5f5f5",
},
titulo: {
fontSize: 20,
fontWeight: "bold",
marginBottom: 20,
},
subtitulo: {
fontSize: 14,
fontWeight: "bold",
color: "#4285f4",
marginBottom: 8,
},
exemplo: {
width: "80%",
padding: 16,
marginBottom: 16,
backgroundColor: "#fff",
borderRadius: 8,
},
input: {
borderWidth: 1,
borderColor: "#ddd",
borderRadius: 8,
padding: 12,
marginBottom: 8,
},
botao: {
backgroundColor: "#4285f4",
padding: 12,
borderRadius: 8,
alignItems: "center",
marginTop: 4,
},
textoBotao: {
color: "#fff",
fontWeight: "bold",
},
});