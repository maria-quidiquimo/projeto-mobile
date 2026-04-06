import { View, Text, TouchableOpacity } from "react-native"
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

export default function DesafioBotao({titulo}){
    const botao = ({ titulo }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        )
    }
}