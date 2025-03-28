import React from 'react';
import {View} from 'react-native';

interface Props {
  vertical?: boolean;
  horizontal?: boolean;
  value?: number;
}
export const Separator = ({vertical, horizontal, value}: Props) => {
  return (
    <View
      style={[
        vertical ? {height: value} : {},
        horizontal ? {width: value} : {},
      ]}
    />
  );
};
