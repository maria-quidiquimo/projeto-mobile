import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";


const Stack = createNativeStackNavigator()

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} /> 
            {/* registro das telas, name é o nome da rota, e component é o que vai der renderizado */}
            <Stack.Screen name="Detalhe" component={DetalheScreen} />
        </Stack.Navigator> // gerenciador da pilha 
    )
}
