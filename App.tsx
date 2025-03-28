/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Provider } from "react-redux";
import RootComponent from "./src/screens/RootComponents";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { store } from "./src/redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Loading from "@components/Loading";
import Navigator from "@assets/Modules/Modules";
import ToastMsg from "@components/Toast/ToastMsg";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      <Loading ref={(ref) => Navigator.setLoadingRef(ref)} />
      <ToastMsg ref={(ref) => Navigator.setToastMsg(ref)} />
    </GestureHandlerRootView>
  );
}

export default App;
