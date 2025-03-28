import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { StackName } from "../StackName";

import HomeScreen from "@screens/HomeScreen";
import UserPage from "@screens/Profile/UserPage";
import AccountInfomation from "@screens/Profile/AccountInfomation";
import GeneralSettings from "@screens/Profile/GeneralSettings";
import TermPage from "@screens/Profile/TermPage";
import ContactAndFeedbackPage from "@screens/Profile/ContactAndFeedback";
import ChangePasswordPage from "@screens/Profile/ChangePassword";

const Stack = createNativeStackNavigator();
const screenOptionsNativeStack: NativeStackNavigationOptions = {
  headerShown: false,
  fullScreenGestureEnabled: true,
  gestureEnabled: true,
  animationTypeForReplace: "push",
  presentation: Platform.OS === "android" ? "modal" : undefined,
};

export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={screenOptionsNativeStack as any}
      initialRouteName={StackName.UserPage}
    >
      <Stack.Screen name={StackName.UserPage} component={UserPage} />
      <Stack.Screen
        name={StackName.AccountInfomation}
        component={AccountInfomation}
      />
      <Stack.Screen
        name={StackName.GeneralSettings}
        component={GeneralSettings}
      />
      <Stack.Screen name={StackName.TermPage} component={TermPage} />
      <Stack.Screen
        name={StackName.ContactAndFeedbackPage}
        component={ContactAndFeedbackPage}
      />
    </Stack.Navigator>
  );
}
