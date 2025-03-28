import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import {StackName} from '../StackName';

import HomeScreen from '@screens/HomeScreen';

const Stack = createNativeStackNavigator();
const screenOptionsNativeStack: NativeStackNavigationOptions = {
  headerShown: false,
  fullScreenGestureEnabled: true,
  gestureEnabled: true,
  animationTypeForReplace: 'push',
  presentation: Platform.OS === 'android' ? 'modal' : undefined,
};

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={screenOptionsNativeStack as any}
      initialRouteName={StackName.HomeScreen}>
      <Stack.Screen name={StackName.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
