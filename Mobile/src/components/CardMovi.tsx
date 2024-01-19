import { Hamburger } from "phosphor-react-native";
import { Image, Text, View } from "react-native";
import { Icons } from "./Utils/Icons";

interface Iprops{
    icon: string;
    description: string;
    type: string;
    value: Number;
    expense: boolean;
}

export function CardMovi({description,expense,icon,type,value}: Iprops){
    return (
        <View className="flex-row w-full items-center border-b py-2 border-zinc-300">
            <View className={`p-2 ${expense === true ? 'bg-red-200' : 'bg-green-200'} rounded-xl`}>
                {Icons[icon]}
            </View>
            <View className="flex-row flex-1 h-fit justify-between ml-2">
                <View className="">
                    <Text className="font-semibold text-base">
                        {description}
                    </Text>
                    <Text className="font-semibold text-zinc-500 -mt-1">
                        {type}
                    </Text>
                </View>
                <View>
                    <Text className={`${expense? 'text-red-500': 'text-green-500'}`}>
                       {expense? '-' : '+'} R$ {value.toString()}
                    </Text>
                </View>
            </View>
        </View>
    )
}