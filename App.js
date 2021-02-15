import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Routes from './src/router'

export default function App() {
let [fontsLoaded] = useFonts({
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
})

if(!fontsLoaded){
  return <AppLoading/>;
}
  
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>
      <Routes />
    </>
  );
}

