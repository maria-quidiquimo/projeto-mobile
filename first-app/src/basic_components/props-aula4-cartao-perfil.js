import { View, Text } from "react-native"

export default function CartaoPerfil(props){
    return (
        <View>
            <Text> Nome: {props.nome}</Text>
            <Text> Idade:{props.idade}</Text>
        </View>
    )
}