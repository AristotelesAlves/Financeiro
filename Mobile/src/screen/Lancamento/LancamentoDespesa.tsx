import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
import Selecao from "../../components/Utils/Selecao";
import { TextInputMask } from "react-native-masked-text";
import CalendarioModal from "../../components/Utils/CalendarioModal";

interface Iform{
    metodoPagamento?: string;
    nome: string;
    descricao: string;
    valor: number;
    dataLancamento: string;
    categoria: string;
    cartao?: string;
    banco?: string;
}

export default function LancamentoDespesa() {

    const [form, setForm] = useState<Iform>({

        nome: '',
        descricao: '',
        valor: 0,
        dataLancamento: new Date().toString(),
        categoria: ''
    })

    const navegacao = useNavigation();

    function carregandoMetodoPagamento(dados: string){
        setForm({
            ...form,
            metodoPagamento:dados
        })
    }

    function carregandoCategoria(dados: string){
        setForm({
            ...form,
            categoria: dados
        })
    }

    function carregandoCredito(dados: string){
        setForm({
            ...form,
            cartao: dados
        })
    }

    function carregandoContaBancaria(dados: string){
        setForm({
            ...form,
            cartao: dados
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

    const cartoes = [
        {
            value: 'nubank',
            label: 'Nubank'
        },
        {
            value: 'will',
            label: 'Will'
        },
    ]

    const banco = [
        {
            value: 'nubank',
            label: 'Nu Bank'
        },
    ]

    const categorias = [
        {
            value: 'outro',
            label: 'Outros'
        },
        {
            value: 'casa',
            label: 'Casa'
        },
        {
            value: 'eletronico',
            label: 'Eletronico'
        },
        {
            value: 'passagem',
            label: 'Passagem'
        },
        {
            value: 'lanche',
            label: 'Lanche'
        },
    ]

    return (
        <View className="flex-1 bg-blackWeight2">

            <View className="w-full bg-red-500 py-2 px-3">
                <Text className="text-white text-xl">
                    Valor
                </Text>
                <View className="flex-row items-center">
                    <TextInputMask
                      className="text-white font-bold text-2xl"
                      type={'money'}
                      value={form.valor?.toString()}
                      maxLength={18}
                      onChangeText={(valor) => {
                        valor = valor.replace('R$', '')
                        valor = valor.replace('.','')
                        valor = valor.replace(',', '')
                        setForm({
                            ...form,
                            valor: Number(valor)
                        })
                      }}
                    />
                </View>
            </View>
            <View>
                <Text className="text-white">
                    Descrição
                </Text>
                <TextInput className="bg-white rounded-lg text-end" onChangeText={(e) =>  setForm({...form, descricao: e})} value={form.descricao}/>
            </View>
            <View className="z-10">
                <Text className="text-white">
                    Metodo de pagamento
                </Text>
                <Selecao 
                  dados={carregandoMetodoPagamento} 
                  option={metodosPagamento}
                />
            </View>
            {
                form.metodoPagamento === 'credito' ? (
                <View>
                    <Text>
                        Parcela
                    </Text>
                </View>
                ):null
            }

            {
                form.metodoPagamento === 'debito' || form.metodoPagamento === 'PIX' ? (
                    <View className="z-0">
                        <Text>
                            Conta bancaria
                        </Text>
                        <Selecao dados={carregandoContaBancaria} option={banco} />
                    </View>
                ):null 
            }
            {
                form.metodoPagamento === 'credito' ? (
                    <View className="z-0">
                        <Text>
                          Cartão de credito
                        </Text>
                        <Selecao dados={carregandoCredito} option={cartoes} />
                    </View>
                    ):( null)
            }
            <View className="z-10">
                <Text>
                  Categoria
                </Text>
                <Selecao dados={carregandoCategoria} option={categorias} />
            </View>

        </View>
    );
}