import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListaScreen from "../screens/ListaScreen";
import PerfilScreen from "../screens/PerfilScreen";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Filmes" component={StackNavigator}/>
    <Tab.Screen name="Lista" component={ListaScreen}/>
    <Tab.Screen name="Perfil" component={PerfilScreen}/>
  </Tab.Navigator>
)}

// TODO: registrar Filmes (StackNavigator), Lista (ListaScreen) e Perfil (PerfilScreen)
// Não esquecam dos parenteses no return