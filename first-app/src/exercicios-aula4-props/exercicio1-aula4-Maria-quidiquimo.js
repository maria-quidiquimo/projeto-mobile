import { View, Text } from "react-native"

export default function CardProduto(props){
    return (
        <View>
            <Text> Produto: {props.produto}</Text>
            <Text>Preço: R$ {props.preco}</Text>
        </View>
    )
}