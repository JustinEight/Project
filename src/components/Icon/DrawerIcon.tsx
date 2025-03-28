import React from 'react';
import {View} from 'react-native';

const DrawerIcon = () => {
  return (
    <View style={{padding: 8, gap: 4}}>
      <View
        style={{
          height: 3,
          width: 16,
          borderRadius: 3,
          backgroundColor: 'white',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          height: 3,
          width: 16,
          borderRadius: 3,
          marginLeft: 4,
          backgroundColor: 'white',
        }}
      />
      <View
        style={{
          height: 3,
          width: 16,
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

export default DrawerIcon;
