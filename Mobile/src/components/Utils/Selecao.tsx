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
        setSelecao({...selecao,aberto: false, selecionado: value})
        dados(value)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setSelecao({...selecao, aberto: !selecao.aberto})} className="py-1 flex-row justify-between rounded-lg bg-zinc-200 px-2">
                    <View>
                        <Text>
                            {selecao.selecionado.length > 0 ? selecao.selecionado.toUpperCase() : 'Selecione uma categoria'}
                        </Text>
                    </View>
                    {selecao.aberto ? (
                        <CaretUp/>
                    ):(
                        <CaretDown/>
                    )}
            </TouchableOpacity>
            <View className={`${selecao.aberto ? '' : 'hidden'} bg-white rounded-lg absolute top-10 w-full p-2`}>    
                 {
                    option.map(elemento => {
                        return (
                            <TouchableOpacity className="border-b border-zinc-300 w-full" 
                                onPress={() => carregandoDados(elemento.value)}>
                                <Text className="font-semibold my-2 w-full text-center">
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