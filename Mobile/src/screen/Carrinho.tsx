import { View, Text } from "react-native";
import { Horse, Heart, Cube } from 'phosphor-react-native';
import { FontAwesome } from '@expo/vector-icons';

export function Carrinho(){
    return (
        <View className="flex-1 items-center justify-center">
            <Text>Olá, Mundo
                <Horse size={25}/>
            </Text>
            
        </View>
    )
}