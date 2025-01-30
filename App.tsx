import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';
import AppNavigation from './navigation';


const App = () => {
  return (
      <ToastProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ToastProvider>
  );
};

export default App;
