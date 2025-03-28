import React, { useEffect } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { StackName } from "./StackName";

import AuthenticationStack from "./Stack/AuthenticationStack";

import HomeStack from "./Stack/HomeStack";
import HomeBottomTab from "./Stack/HomeBottomTab";
import ChangePasswordPage from "@screens/Profile/ChangePassword";
import BlockedUserPage from "@screens/Profile/BlockedUser";
import Storage from "@utils/Store";
import { reset } from "./index";
import { setApiToken } from "@services/app/axiosClient";
import ProductDetailScreen from "@screens/ProductAndPostListing/ProductDetail";
import AddPostForSale from "@screens/ProductAndPostListing/AddPostForSale";
import ChatDetail from "@screens/Chat/ChatDetail";

const Stack = createNativeStackNavigator();
const screenOptionsNativeStack: NativeStackNavigationOptions = {
  headerShown: false,
  fullScreenGestureEnabled: true,
  gestureEnabled: true,
  animationTypeForReplace: "push",
  presentation: Platform.OS === "android" ? "modal" : undefined,
};
export default function MainStack() {
  const handleLaunchApp = async () => {
    Storage.getData(Storage.key.authToken).then((data) => {
      if (data) {
        setApiToken(data?.accessToken);
        setTimeout(() => {
          reset(StackName.HomeBottomTab);
        }, 1000);
      } else {
      }
    });
  };
  useEffect(() => {
    handleLaunchApp();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={screenOptionsNativeStack as any}
      initialRouteName={StackName.AuthenticationStack}
    >
      <Stack.Screen
        name={StackName.AuthenticationStack}
        component={AuthenticationStack}
      />
      <Stack.Screen name={StackName.HomeBottomTab} component={HomeBottomTab} />
      <Stack.Screen
        name={StackName.ChangePasswordPage}
        component={ChangePasswordPage}
      />
      <Stack.Screen
        name={StackName.BlockedUserPage}
        component={BlockedUserPage}
      />
      <Stack.Screen
        name={StackName.ProductDetailScreen}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name={StackName.AddPostForSale}
        component={AddPostForSale}
      />
      <Stack.Screen name={StackName.ChatDetail} component={ChatDetail} />
    </Stack.Navigator>
  );
}
