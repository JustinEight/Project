import { StyleSheet, Text, Platform, View } from "react-native";
import React, { Component } from "react";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { screenWidth } from "@assets/size";

const toastConfig = {
  success: (props: any) => (
    <View
      style={{
        backgroundColor: "#00B207",
        width: screenWidth,
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          paddingVertical: 16,
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "600",
          marginHorizontal: 24,
        }}
      >
        {props.text1}
      </Text>
    </View>
  ),
  error: (props: any) => (
    <View
      style={{
        backgroundColor: "#E0434D",
        width: screenWidth,
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <Text
        style={{
          paddingVertical: 16,
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "600",
          marginHorizontal: 24,
          textAlign: "center",
        }}
      >
        {props.text1}
      </Text>
    </View>
  ),
  warning: (props: any) => (
    <BaseToast
      {...props}
      text1NumberOfLines={3}
      style={{
        borderLeftColor: "#FFD700",
        marginHorizontal: 24,
        textAlign: "center",
      }}
    />
  ),
};
export default class ToastMsg extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      show: false,
    };
  }
  show = (params: any) => {
    Toast.show({
      type: params?.type,
      text1: params?.message,
      position: "bottom",
    });
    this.setState({ message: params?.message, show: true }, () => {
      setTimeout(() => {
        Toast.hide();
      }, 2000);
    });
  };

  hide = () => {
    this.setState({ message: "", show: false });
  };

  render() {
    return (
      <>
        <View style={{ zIndex: this.state.show ? 999999 : -1 }}>
          <Toast
            bottomOffset={Platform.OS === "ios" ? 40 : 20}
            config={toastConfig}
          />
        </View>
      </>
    );
  }
}
