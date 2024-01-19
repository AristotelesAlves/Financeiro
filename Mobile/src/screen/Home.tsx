import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import { CardMovi } from '../components/CardMovi';
import { Hamburger } from 'phosphor-react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-blackWeight2 pt-10 relative w-full">
      <View className='px-7 pb-4 w-full'>
        <View className='flex-row items-center space-x-2 pb-3'>
          <View className='h-14 w-14 rounded-lg bg-white overflow-hidden border border-zinc-400'>
            <Image className='w-full h-full' source={{uri:'https://i.pinimg.com/736x/e5/63/da/e563dad541582eb79a2d357aca805c9b.jpg'}}/>
          </View>
          <Text className='text-white font-bold text-2xl'>
            Aristóteles Alves
          </Text>
        </View>
        <View className='w-full border-b mb-2 pb-1 border-zinc-700'>
          <Text className='text-zinc-500 text-base font-semibold'>
            Saldo
          </Text>
          <Text className='text-white text-2xl font-semibold'>
            R$ 1.000,00
          </Text>
        </View>
        <View className='flex-row w-full justify-between'>
          <View>
            <Text className='text-zinc-500 text-lg'>
              Receita
            </Text>
            <Text className='text-green-400 text-xl font-semibold'>
              R$ 1.000,00
            </Text>
          </View>
          <View>
            <Text className='text-zinc-500 text-lg'>
              Despesa
            </Text>
            <Text className='text-red-400 text-xl font-semibold'>
              R$ 1.000,00
            </Text>
          </View>
        </View>
      </View>
      <View className='w-full flex-1 bg-white rounded-t-3xl py-4'>
        <Text className='text-xl font-bold w-full text-center pb-2'>
          Ultimas movimentações
        </Text>
        <ScrollView className='h-full px-7'>
          <CardMovi description='Café da manhã' expense icon='Cafe' type='Pix' value={8.23} />
          <CardMovi description='Onibus' expense icon='Onibus' type='Dinheiro' value={4.75} />
          <CardMovi description='Trem' expense icon='Trem' type='Dinheiro' value={1.00} />
          <CardMovi description='Salario' expense={false} icon='Salario' type='Pix' value={1430} />
          <CardMovi description='Gorjeta da veia' expense={false} icon='Gorjeta' type='Pix' value={200.00}/>
          <View className='h-20 w-full'></View>
        </ScrollView>
      </View>
    </View>
  );
}