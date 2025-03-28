import React, { Fragment } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useStyles } from "./hook/useStyles";
import Text from "@components/Text";

export interface TextInputProps extends RNTextInputProps {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  bottomBorder?: boolean;
  label?: string;
  note?: string;
  containerContentStyle?: ViewStyle;
  noteColor?: string;
}
const TextInput = ({
  style,
  inputStyle,
  leftIcon,
  rightIcon,
  error,
  bottomBorder,
  label,
  note,
  containerContentStyle,
  noteColor,
  ...props
}: TextInputProps) => {
  const styles = useStyles();

  return (
    <View style={style}>
      {label ? (
        <Text
          style={{
            color: "#2C333A",
            fontSize: 13,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {label}
        </Text>
      ) : null}
      <View
        style={[
          styles.container,
          bottomBorder ? styles.bottomBorder : styles.border,
          containerContentStyle,
        ]}
      >
        {leftIcon}
        <RNTextInput
          style={[
            styles.textInput,
            bottomBorder ? styles.bottomBorderText : inputStyle,
          ]}
          placeholderTextColor={
            bottomBorder
              ? styles.bottomBorderText.color
              : styles.placeholder.color
          }
          {...props}
        />
        {rightIcon}
      </View>
      {note ? (
        <Text
          style={{ fontSize: 12, color: noteColor || "#8590A2", marginTop: 2 }}
        >
          {note}
        </Text>
      ) : null}
      {!!error && (
        <Text style={{ fontSize: 12, color: "#E0434D" }}>{error}</Text>
      )}
    </View>
  );
};

export default TextInput;
