import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../types/screens-enum';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function AppNavigation(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
