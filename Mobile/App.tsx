import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Rotas from './src/Navigator/Rotas';
import { View } from 'react-native';
import Home from './src/screen/Home';
export default function App() {
  return (
    <View className='flex-1'>
      <Rotas/>
    </View>
  )
}