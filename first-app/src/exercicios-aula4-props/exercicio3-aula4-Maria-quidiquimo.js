import { View, Text } from "react-native"

export default function CardSaudacao(props){
    return (
        <View>
            <Text> Olá, {props.nome}! Bem-vindo(a)</Text>
        </View>
    )
}