import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { StackName } from "../StackName";
import SignInScreen from "@screens/Authentication/SignIn";
import SignUpScreen from "@screens/Authentication/SignUp";
import GetOTPScreen from "@screens/Authentication/GetOTP";
import NewPasswordScreen from "@screens/Authentication/NewPassword";
import HomePage from "@screens/Authentication";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const screenOptionsNativeStack: NativeStackNavigationOptions = {
  headerShown: false,
  fullScreenGestureEnabled: true,
  gestureEnabled: true,
  animationTypeForReplace: "push",
  presentation: Platform.OS === "android" ? "modal" : undefined,
};
export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={screenOptionsNativeStack as any}
      initialRouteName={StackName.AuthenHomePage}
    >
      <Stack.Screen name={StackName.AuthenHomePage} component={HomePage} />
      <Stack.Screen name={StackName.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={StackName.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={StackName.GetOTPScreen} component={GetOTPScreen} />
      <Stack.Screen
        name={StackName.NewPasswordScreen}
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
}
