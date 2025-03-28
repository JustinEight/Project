import Text from "@components/Text";
import { useCountDownTimer } from "@hooks/useCountDownTimer";
import { useTheme } from "@hooks/useTheme";
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
    note: { color: colors.white, fontWeight: 700, fontSize: 14 },
  });
};
interface OTPInputProps extends OtpInputProps {
  onResendOtp?: ({ onSuccess }: { onSuccess?: () => void }) => void;
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
          focusColor="white"
          type="numeric"
          focusStickBlinkingDuration={500}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            containerStyle: styles.otpInputView,
            pinCodeContainerStyle: styles.codeInputView,
            pinCodeTextStyle: { color: "white" },
          }}
          {...props}
        />
      </View>

      {children}
      <Text
        style={{
          textAlign: "center",
          marginTop: 16,
          color: "white",
          fontSize: 14,
        }}
      >
        Không nhận được mã?{"\n"}
        {isTimeout ? (
          <Text
            style={{ fontWeight: 700, color: "white", fontSize: 14 }}
            onPress={() => {
              onResendOtp?.({
                onSuccess: () => {
                  handleSetAgain();
                },
              });
            }}
          >
            Gửi lại mã OTP
          </Text>
        ) : (
          <Text style={styles.note}>
            Gửi lại (trong {Math.floor(timer / 1000)}s)
          </Text>
        )}
      </Text>
    </View>
  );
};

export default OTPInput;
