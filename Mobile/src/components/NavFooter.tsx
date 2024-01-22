import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import { Carrinho } from "../screen/Carrinho";
import { Configuracao } from "../screen/Configuracao";
import { Basket, Gear, Plus } from "phosphor-react-native";

const Tab = createBottomTabNavigator()

export function  NavFooter(){
    return (
        <Tab.Navigator
            initialRouteName="Add"
            screenOptions={({route, navigation}) => ({
                tabBarShowLabel:false,
                tabBarStyle:{
                    position: "absolute",
                    bottom:20,
                    borderRadius:25,
                    left: 70,
                    right: 70,
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
                tabBarIcon: () => <View className=" bg-zinc-100 h-12 w-12 bg-opacity-5 items-center justify-center rounded-full">
                        <Plus size={25} weight="bold"/>
                    </View> 
                }}
            />
            <Tab.Screen 
              name="Opção" 
              component={Configuracao} 
              options={{ headerShown: false,  tabBarIcon: () => <Gear color="#ffff" size={25}/> }} />
        </Tab.Navigator>
    )
}