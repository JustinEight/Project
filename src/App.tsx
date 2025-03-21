import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppNavigator from './navigation/AppNavigator';

// Bỏ qua cảnh báo không cần thiết
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
