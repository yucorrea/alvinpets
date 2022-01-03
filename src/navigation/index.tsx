import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {InitialScreen} from '../modules/initial/presentation/screens/InitialScreen';
import {DashboardScreen} from '../modules/dashboard/presentation/screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
