import Text from "@components/Text";
import { useCountDownTimer } from "@hooks/useCountDownTimer";
import { useTheme } from "@hooks/useTheme";
import { translate } from "@localization/translate";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { OtpInput, OtpInputProps } from "react-native-otp-entry";

const PIN_COUNT = 6;
const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    otpInputView: { height: 44, width: 40 * PIN_COUNT, margin: 0 },
    codeInputView: {
      width: 50,
      height: 44,
      borderRadius: 6,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
      color: colors.white,
      fontSize: 22,
      padding: 0,
    },
    note: { color: colors.white, fontWeight: "700", fontSize: 14 },
    pinText: { color: colors.white },
    notReceives: {
      textAlign: "center",
      marginTop: 16,
      color: colors.white,
      fontSize: 14,
    },
    resendOtp: { fontWeight: "700", color: colors.white, fontSize: 14 },
    focusColor: { color: colors.white },
  });
};
interface OTPInputProps extends OtpInputProps {
  onResendOtp?: ({ onSuccess }: { onSuccess: () => void }) => void;
  children: React.ReactElement;
}
const OTPInput = ({ children, onResendOtp, ...props }: OTPInputProps) => {
  const styles = useStyles();
  const { timer, isTimeout, handleSetAgain } = useCountDownTimer();

  return (
    <View>
      <View style={{}}>
        <OtpInput
          numberOfDigits={PIN_COUNT}
          autoFocus
          focusColor={styles.focusColor.color}
          type="numeric"
          focusStickBlinkingDuration={500}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            containerStyle: styles.otpInputView,
            pinCodeContainerStyle: styles.codeInputView,
            pinCodeTextStyle: styles.pinText,
          }}
          {...props}
        />
      </View>

      {children}
      <Text style={styles.notReceives}>
        {translate("getOTP.notReceives")}
        {"\n"}
        {isTimeout ? (
          <Text
            style={styles.resendOtp}
            onPress={() => {
              onResendOtp?.({
                onSuccess: () => {
                  handleSetAgain();
                },
              });
            }}
          >
            {translate("getOTP.resendOtp")}
          </Text>
        ) : (
          <Text style={styles.note}>
            {translate("getOTP.resendText", {
              minutes: Math.floor(timer / 1000),
            })}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default OTPInput;
