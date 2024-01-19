import { Text, Image, View } from "react-native";

export function CardSelect(){
    return(
        <View className="flex-row w-full py-2 h-fit justify-between items-center">
            <Image className='w-14 h-14 drop-shadow-sm rounded-lg' 
              source={
                {uri:'https://static.wixstatic.com/media/2edbed_3838e55fe91d4e7e9c859b43e8d4b12b~mv2.webp'}
              }
            />
            <View className="flex-1 px-3 justify-center">
                <Text className="text-xl">
                    Agachamento
                </Text>
                <Text>
                    4 série x 12 repetições
                </Text>
            </View>
            <View className="">
                <Text>
                    Iniciar
                </Text>
            </View>
        </View>
    )
}