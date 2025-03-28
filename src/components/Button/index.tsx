import React from 'react';

import {
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {useStyles} from './hooks/useStyles';
import Text from '@components/Text';

export interface NewButtonProps extends TouchableOpacityProps {
  textColor?: string;
  mainColor?: string;
  outline?: boolean;
  children: string | React.ReactNode;
  style?: ViewStyle;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  radius?: number;
  isBgTransparent?: boolean;
  textStyle?: TextStyle;
  textProps?: TextProps;
}
const Button: React.FC<NewButtonProps> = ({
  textColor,
  mainColor,
  outline = false,
  children,
  style,
  iconLeft,
  iconRight,
  radius,
  isBgTransparent,
  textStyle,
  textProps,
  ...props
}) => {
  const styles = useStyles(mainColor, textColor, radius, props?.disabled);

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles?.container,
        isBgTransparent
          ? {}
          : outline
          ? styles.outlineContainer
          : styles.bgContainer,
        style,
      ]}>
      {iconLeft}
      {typeof children === 'string' ? (
        <Text style={[styles.text, textStyle]} {...textProps}>
          {children}
        </Text>
      ) : (
        children
      )}

      {iconRight}
    </TouchableOpacity>
  );
};

export default Button;
