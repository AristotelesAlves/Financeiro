import { Basket } from "phosphor-react-native";
import { Text, View } from "react-native";
import { Icons } from "./Utils/Icons";

interface ICardIcons{
    icons: string,
    titulo: string
}

export function CardIcon(props: ICardIcons){
    return (
        <View className='items-center w-fit px-1 py-2 rounded-lg bg-gray-200 my-1 mx-2'>
            {Icons[props.icons]}
            <Text className='w-16 text-center text-[10px] text-black'>
              {props.titulo}
            </Text>
        </View>
    )
}