import { View, Text } from "react-native";
import { ArrowRight, ArrowLeft } from 'phosphor-react-native';
import { FontAwesome } from '@expo/vector-icons';

export function Carrinho(){
    return (
        <View className="flex-1 items-center justify-center">
            <View className="items-center justify-center w-full">
                <View className="flex-row gap-10">
                    <ArrowLeft/>
                    <Text>Janeiro</Text>
                    <ArrowRight/>
                </View>
                <View>
                    <Text>
                        Saldo
                    </Text>
                    <Text>
                        R$ 1.100,00
                    </Text>
                </View>
                <View>
                    <View>
                        <Text>
                            Receita
                        </Text>
                        <Text>
                            R$ 1.100,00
                        </Text>
                    </View>
                    <View>
                        <Text>
                            Despesa
                        </Text>
                        <Text>
                            R$ 1.100,00
                        </Text>
                    </View>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}