import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Input from "../../components/Utils/Input";
import Selecao from "../../components/Utils/Selecao";

export default function LancamentoDespesa() {

    const [form, setForm] = useState({
        metodoPagamento: '',
        nome: '',
        descricao: '',
        valor: ''
        
    })

    const navegacao = useNavigation();

    useEffect(() => {
        carregandoDadosSelecao
    },[])
    

    function carregandoDadosSelecao(dados: string){
        setForm({
            ...form,
            metodoPagamento:dados
        })
    }
    

    const metodosPagamento = [
        {
            value: 'credito',
            label: 'Credito'
        },
        {
            value: 'debito',
            label: 'Debito'
        },
        {
            value: 'pix',
            label: 'Pix'
        },
        {
            value: 'dinheiro',
            label: 'Dinheiro'
        },
    ]

    return (
        <View className="flex-1 px-3">
            <View>
                <Text>
                    Nome
                </Text>
                <Input onChange={(e) =>  setForm({...form, nome: e})} value={form.nome}/>
            </View>
            <View>
                <Text>
                    Descrição
                </Text>
                <Input onChange={(e) =>  setForm({...form, descricao: e})} value={form.descricao}/>
            </View>
            <View>
                <Text>
                    Valor
                </Text>
                <Input onChange={(e) =>  setForm({...form, valor: e})} value={form.valor}/>
            </View>
            <Text>
                Metodo de pagamento
            </Text>
            <Selecao 
              dados={carregandoDadosSelecao} 
              option={metodosPagamento}
            />
        </View>
    );
}