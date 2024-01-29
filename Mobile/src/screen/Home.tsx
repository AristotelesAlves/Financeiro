import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import { CardMovi } from '../components/CardMovi';
import { Basket, Hamburger } from 'phosphor-react-native';
import { NavFooter } from '../components/NavFooter';
import { CardIcon } from '../components/CardIcon';

export default function Home() {
  return (
    <View className="flex-1 bg-violet-700 pt-10 relative w-full">
      <View className='px-7 pb-9 w-full relative'>
        <View className='w-full py-3 pb-5 justify-center items-center'>
          <Text className='text-zinc-200 text-base font-semibold'>
            Saldo Bancario
          </Text>
          <Text className='text-white text-3xl font-semibold'>
            R$ 1.000,00
          </Text>
        </View>
        <View className='absolute z-30 w-screen items-center -bottom-9'>
          <View className='flex-row bg-white px-10 space-x-10 py-2 rounded-lg '>
            <View className=''>
              <Text className='text-zinc-600 text-lg text-center w-full'>
                Receita
              </Text>
              <Text className='text-green-500 text-xl font-semibold'>
                R$ 1.000,00
              </Text>
            </View>

            <View>
              <Text className='text-zinc-600 text-lg text-center w-full'>
                Despesa
              </Text>
              <Text className='text-red-500 text-xl font-semibold'>
                R$ 1.000,00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className='flex-1 bg-blackWeight2 pt-14 px-3'>
          <View className='w-full flex-row flex-wrap justify-center'>
            <CardIcon icons='' titulo='Despesas'/>
            <CardIcon icons='' titulo='Receitas'/>
            <CardIcon icons='Mercado' titulo='Mercado'/>
            <CardIcon icons='Cartao' titulo='Cartão'/>
            <CardIcon icons='' titulo='Orçamento'/>
            <CardIcon icons='' titulo='Categorias'/>
            <CardIcon icons='Metas' titulo='Metas'/>
            <CardIcon icons='' titulo='Resumo'/>
          </View>
          <ScrollView className='h-full'>
            <CardMovi description='Café da manhã' expense icon='Cafe' type='Pix' value={8.23} />
            <CardMovi description='Onibus' expense icon='Onibus' type='Dinheiro' value={4.75} />
            <CardMovi description='Trem' expense icon='Trem' type='Dinheiro' value={1.00} />
            <CardMovi description='Salario' expense={false} icon='Salario' type='Pix' value={1430} />
            <CardMovi description='Gorjeta da veia' expense={false} icon='Gorjeta' type='Pix' value={200.00}/>
            <CardMovi description='Trem' expense icon='Trem' type='Dinheiro' value={1.00} />
            <CardMovi description='Salario' expense={false} icon='Salario' type='Pix' value={1430} />
            <CardMovi description='Gorjeta da veia' expense={false} icon='Gorjeta' type='Pix' value={200.00}/>
            <CardMovi description='Trem' expense icon='Trem' type='Dinheiro' value={1.00} />
            <CardMovi description='Salario' expense={false} icon='Salario' type='Pix' value={1430} />
            <CardMovi description='Gorjeta da veia' expense={false} icon='Gorjeta' type='Pix' value={200.00}/>
            <View className='h-20 w-full'></View>
        </ScrollView>
      </View>
    </View>
  );
}