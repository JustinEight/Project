import TextInput, { TextInputProps } from "@components/TextInput";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const HFTextInput = ({
  control,
  name,
  rules,
  clearError,
  ...props
}: UseControllerProps<FieldValues, any> &
  TextInputProps & { clearError?: () => void }) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name, rules });

  return (
    <TextInput
      value={value}
      onChangeText={(v) => {
        onChange(v);
        if (error?.message) {
          clearError?.();
        }
      }}
      error={error?.message}
      {...props}
    />
  );
};

export default HFTextInput;
