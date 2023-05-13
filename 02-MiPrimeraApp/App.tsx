/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
       {/* <HolaMundoScreen/>
       <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};
