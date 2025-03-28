import {useTheme} from '@hooks/useTheme';
import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps {
  color?: string;
}
const Text = ({color, style, ...props}: TextProps & RNTextProps) => {
  const {colors} = useTheme();
  return (
    <RNText
      {...props}
      style={[
        {color: color || colors.midnightExpressBlue, fontSize: 16},
        {fontFamily: 'MTD_Portrait_Script_Bounce_Regular'},
        style,
      ]}
    />
  );
};

export default Text;
