import Text from '@components/Text';
import {useTheme} from '@hooks/useTheme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const OrderButton = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderWidth: 1,
        borderColor: 'rgba(145, 158, 171, 0.2)',
        borderRadius: 8,
      }}>
      <TouchableOpacity
        style={{
          height: 28,
          width: 28,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'rgb(99, 115, 129)'}}>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 14}}>1</Text>
      <TouchableOpacity
        style={{
          height: 28,
          width: 28,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'rgb(99, 115, 129)'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderButton;
