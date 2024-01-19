import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import { NavFooter } from './src/components/NavFooter';

export default function App() {
  return (
    <NavigationContainer>
      <NavFooter/>
      <StatusBar style="auto"/>
    </NavigationContainer> 
  );
}