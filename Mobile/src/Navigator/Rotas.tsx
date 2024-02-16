import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LancamentoDespesa from '../screen/Lancamento/LancamentoDespesa';
import Home from '../screen/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PaginaInicial" component={Home} options={{headerShown: false}}/>
                <Stack.Screen 
                  name="Lancamento" 
                  component={LancamentoDespesa} 
                  options={
                    {
                        headerTintColor: 'white', 
                        headerTitle: 'Lançamento despesa',
                        headerStyle: {
                            backgroundColor: 'rgb(239 68 68)',
                            shadowOpacity: 0
                            
                        }
                    }
                } 
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
