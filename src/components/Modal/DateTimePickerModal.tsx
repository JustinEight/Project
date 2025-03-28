import React from "react";
import {
  default as RNDateTimePickerModal,
  ReactNativeModalDateTimePickerProps,
} from "react-native-modal-datetime-picker";

const DateTimePickerModal = (props: ReactNativeModalDateTimePickerProps) => {
  return <RNDateTimePickerModal {...props} />;
};

export default DateTimePickerModal;
