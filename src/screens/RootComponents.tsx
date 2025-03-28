import {NavigationContainer} from '@react-navigation/native';
import React, {useRef, useEffect} from 'react';
import {AppState, StatusBar} from 'react-native';
import {navigationRef} from '../navigation';
import MainStack from '../navigation/MainStack';

const RootComponent = () => {
  const routeNameRef = useRef<string>(null);
  // App on foreground handle
  const oldAppState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: any) => {
      if (
        oldAppState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
      }

      oldAppState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return function cleanup() {
      subscription.remove();
    };
    //   }, [dispatch]);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState.match(/inactive|background/)) {
        if (nextAppState.match(/inactive/)) {
        }
        console.log('App go to inactive|background');
        // TODO:
      } else if (nextAppState.match(/active/)) {
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;
        const routeParams = navigationRef?.current?.getCurrentRoute()?.params;

        if (previousRouteName !== currentRouteName) {
          // The line below uses the tracker
          console.log('currentRouteName: ', currentRouteName);
          if (routeParams) {
            console.log('currentRouteParams: ', routeParams ?? {});
          }
        }
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <MainStack />
    </NavigationContainer>
  );
};
export default RootComponent;
