import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import { Carrinho } from "../screen/Carrinho";
import { Configuracao } from "../screen/Configuracao";
import { Basket, Gear, House, Plus } from "phosphor-react-native";

const Tab = createBottomTabNavigator()

export function  NavFooter(){
    return (
        <Tab.Navigator
            initialRouteName="Add"
            screenOptions={({route, navigation}) => ({
                tabBarShowLabel:false,
                tabBarStyle:{
                    position: "absolute",
                    bottom:0,
                    height:60,
                    backgroundColor:'#2E2F33',
                },
            })}
        >
            <Tab.Screen name="Carrinho" component={Carrinho}  options={{ headerShown: false, tabBarIcon: () => <Basket color="#ffff" size={25}/>}} />
            <Tab.Screen 
              name="Add"  
              component={Home} 
              options={{ 
                headerShown: false,
                tabBarIcon: () => <House size={25} color="#ffff"/>
                }}
            />
            <Tab.Screen 
              name="Opção" 
              component={Configuracao} 
              options={{ headerShown: false,  tabBarIcon: () => <Gear color="#ffff" size={25}/> }} />
        </Tab.Navigator>
    )
}