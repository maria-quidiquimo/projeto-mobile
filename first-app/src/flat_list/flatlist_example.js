import { FlatList, View, Text, StyleSheet } from "react-native"
import CardItem from "./card_item";

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
            <View style={styles.exemploLista}>
                <Text style={styles.subtitulo}> FlatList Básico</Text>
                <FlatList 
                scrollEnabled={true}
                data={alunos}
                keyExtractor={(aluno) => aluno.id}
                renderItem={({item: aluno}) => (
                    <CardItem  nome={aluno.nome} nota={aluno.nota}/>
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
backgroundColor: "#f5f5f5",
paddingTop: 60,
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

exemploLista: {
width: "80%",
height: 150,
padding: 16,
marginBottom: 16,
backgroundColor: "#ffffff",
borderRadius: 8,
},
linha: {
flexDirection: "row",
justifyContent: "space-between",
padding: 10,
backgroundColor: "#ffffff",
marginBottom: 4,
borderRadius: 4,
},
});