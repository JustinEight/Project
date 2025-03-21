import {NavigatorScreenParams} from '@react-navigation/native';

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  // Add other stacks or screens here if needed
};
