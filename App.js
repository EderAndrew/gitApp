import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigators
import MainStack from './src/navigators/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
