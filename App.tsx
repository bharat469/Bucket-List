import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Splash from './src/assets/sImage.svg';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Hello world</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Splash />
    </SafeAreaView>
  );
}

export default App;
