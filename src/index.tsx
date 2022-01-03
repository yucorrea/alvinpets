import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {Routes} from './navigation';
import Store from './store';

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
