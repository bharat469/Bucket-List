import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Hello world</Text>
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
}

export default App;
