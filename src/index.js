/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
// import {PersistGate} from 'redux-persist/integration/react';
// import {Provider} from 'react-redux';
// import './config/ReactotronConfig';
// import {store, persistor} from './store';
import App from './App';
import light from './themes/light';

export default function Index() {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>

    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar barStyle="dark-content" backgroundColor="#619D78" />
        <App />
      </ThemeProvider>
    </NavigationContainer>

    //   </PersistGate>
    // </Provider>
  );
}
