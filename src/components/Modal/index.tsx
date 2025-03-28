import React from "react";
import {
  ModalProps as RNModalProps,
  Modal as RNModal,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export type ModalProps = {
  requestClose?: () => void;
  containerStyle?: ViewStyle;
} & RNModalProps;
const Modal = ({
  requestClose,
  children,
  style,
  containerStyle,
  ...props
}: ModalProps) => {
  return (
    <RNModal onRequestClose={requestClose} transparent {...props} style={style}>
      <TouchableOpacity
        style={[{ flex: 1, backgroundColor: "#00000080" }, containerStyle]}
        onPress={() => {
          requestClose?.();
        }}
      >
        {children}
      </TouchableOpacity>
    </RNModal>
  );
};

export default Modal;
