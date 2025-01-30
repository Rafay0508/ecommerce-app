import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';
import AppNavigation from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ToastProvider>
    </Provider>
  );
};

export default App;
