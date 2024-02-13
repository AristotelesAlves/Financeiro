import { CaretDown, CaretUp } from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface IOption{
    label: string;
    value: string;
}[]

interface ISelecao{
    option: IOption[]
    dados: (categoria: string) => void
}

export default function Selecao({ dados, option }: ISelecao){
    const [selecao, setSelecao] = useState({
        aberto: false,
        selecionado: ''
    })
    
    function carregandoDados(value: string){
        setSelecao({...selecao, selecionado: value ,aberto: false})
        dados(selecao.selecionado)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setSelecao({...selecao, aberto: !selecao.aberto})} className="py-1 flex-row justify-between rounded-lg bg-zinc-200 px-2">
                    <View>
                        <Text>
                            {selecao.selecionado.length > 0 ? selecao.selecionado : 'Selecione uma categoria'}
                        </Text>
                    </View>
                    {selecao.aberto ? (
                        <CaretUp/>
                    ):(
                        <CaretDown/>
                    )}
            </TouchableOpacity>
            <View className={`${selecao.aberto ? '' : 'hidden'} bg-zinc-200 w-full p-2 rounded-lg`}>    
                {
                    option.map(elemento => {
                        return (
                            <TouchableOpacity className="border-b border-zinc-300 w-full" 
                                onPress={() => carregandoDados(elemento.value)}>
                                <Text className="font-semibold my-2">
                                    {elemento.label}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>     
        </View>
    )
}