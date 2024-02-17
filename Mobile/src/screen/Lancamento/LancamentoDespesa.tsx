import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Selecao from "../../components/Utils/Selecao";
import { TextInputMask } from "react-native-masked-text";
import CalendarioModal from "../../components/CalendarioModal";

interface Iform{
    metodoPagamento?: string;
    nome: string;
    descricao: string;
    valor: number;
    dataLancamento: Date;
    categoria: string;
    cartao?: string;
    banco?: string;
    parcela? : number;
}

export default function LancamentoDespesa() {

    const [form, setForm] = useState<Iform>({

        nome: '',
        descricao: '',
        valor: 0,
        dataLancamento: new Date(),
        categoria: ''
    })

    let dia = form.dataLancamento.getDate() < 10 ? '0'+ form.dataLancamento.getDate():form.dataLancamento.getDate() 
    let mes = (form.dataLancamento.getMonth() + 1) < 10 ? '0'+(form.dataLancamento.getMonth() + 1): (form.dataLancamento.getMonth() + 1)
    let ano = form.dataLancamento.getFullYear() 

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

    function carregandoData(data: Date){
        setForm({
            ...form,
            dataLancamento: data
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
            <View className="px-2 pt-2 flex-1 justify-between pb-3">
                <View>
                    <View>
                        <Text className="text-white">
                            Descrição
                        </Text>
                        <TextInput className="bg-white rounded-lg text-end" onChangeText={(e) =>  setForm({...form, descricao: e})} value={form.descricao}/>
                    </View>
                    <View className="z-50">
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
                            <Text className="text-white">
                                Parcela
                            </Text>
                            <TextInput className="bg-white rounded-lg text-end" keyboardType="numeric" onChangeText={(e) =>  setForm({...form, parcela: Number(e)})} value={form.parcela?.toString()}/>
                        </View>
                        ):null
                    }
    
                    {
                        form.metodoPagamento === 'debito' || form.metodoPagamento === 'PIX' ? (
                            <View className="z-40">
                                <Text className="text-white">
                                    Conta bancaria
                                </Text>
                                <Selecao dados={carregandoContaBancaria} option={banco} />
                            </View>
                        ):null 
                    }
                    {
                        form.metodoPagamento === 'credito' ? (
                            <View className="z-40">
                                <Text className="text-white">
                                  Cartão de credito
                                </Text>
                                <Selecao dados={carregandoCredito} option={cartoes} />
                            </View>
                            ):( null)
                    }
                    <View className="z-30">
                        <Text className="text-white">
                          Categoria
                        </Text>
                        <Selecao dados={carregandoCategoria} option={categorias} />
                    </View>
                    <View>
                        <Text className="text-white">
                            Data de lançamento
                        </Text>
                        <CalendarioModal 
                          onChangueDate={carregandoData} 
                          Children={
                            <View className="bg-white rounded-lg p-2">
                                <Text>
                                    {dia}/{mes}/{ano}
                                </Text>
                            </View>
                          }
                        />
                    </View>
                </View>
                <TouchableOpacity className="bg-white w-full p-2 items-center justify-center rounded-lg">
                  <Text className="text-xl">
                    Lançar Despesa
                  </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}