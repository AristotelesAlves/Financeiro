import { Text, View } from "react-native";

interface IDayBox{
    dayWeek: string;
    status: string;
}

export function DayBox(props: IDayBox){
    
    const concluido = props.status === "concluido" ? 'border-blueWeight1' : null
    const andamento = props.status === "andamento" ? 'border-blackWeight3' : null
    
    return (
        <View className={`w-[60px] h-[60px] drop-shadow-xl bg-blackWeight2 text-xl rounded-md shadow border-2 items-center justify-center ${concluido} ${andamento}`}>
            <Text className="font-semibold text-white">
                {props.dayWeek}
            </Text>
        </View>
    )
}