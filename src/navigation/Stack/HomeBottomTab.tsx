import {
  CommunityIcon,
  HomeIcon,
  MessageIcon,
  MyListingIcon,
  MyProfileIcon,
} from "@components/Icon";
import { useTheme } from "@hooks/useTheme";
import MyBottomTabbar from "@navigation/components/MyBottomTabbar";
import { StackName } from "@navigation/StackName";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
import { useCallback } from "react";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeStack from "./HomeStack";
import UserStack from "./UserStack";
import ChatScreen from "@screens/Chat";

const Tab = createBottomTabNavigator();

function HomeBottomTab() {
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => (
        <MyBottomTabbar bottom={bottom} {...props} colors={colors} />
      )}
    >
      <Tab.Screen name={StackName.HomeStack} component={HomeStack} />
      <Tab.Screen name={"HomeScreen1"} component={HomeScreen} />
      <Tab.Screen name={StackName.ChatScreen} component={ChatScreen} />
      <Tab.Screen name={"HomeScreen3"} component={HomeScreen} />
      <Tab.Screen name={StackName.UserStack} component={UserStack} />
    </Tab.Navigator>
  );
}
export default HomeBottomTab;
