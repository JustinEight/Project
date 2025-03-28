import images from "@assets/images";
import Button from "@components/Button";
import HFTextInput from "@components/HookForm/HFTextInput";
import Image from "@components/Image";
import Text from "@components/Text";
import TextInput from "@components/TextInput";
import { useTheme } from "@hooks/useTheme";
import { reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import { useRoute } from "@react-navigation/native";
import useAuthActions from "@redux/useActions/useAuthActions";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const NewPasswordScreen = () => {
  const { colors } = useTheme();
  const { resetPassword } = useAuthActions();
  const route = useRoute();
  const { user, otp } = route?.params || {};
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const formValue = watch();

  const formDisabled =
    !formValue?.password?.trim() && !formValue?.confirmPassword?.trim();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        backgroundColor: colors.white,
      }}
    >
      <Image
        source={images.newPasswordBackground}
        style={StyleSheet.absoluteFillObject}
      />

      <View
        style={{ backgroundColor: "#88888880", borderRadius: 25, padding: 24 }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 16,
            color: colors.white,
          }}
        >
          Mật Khẩu Mới
        </Text>
        <HFTextInput
          placeholder="Mật khẩu mới"
          bottomBorder
          secureTextEntry
          rules={{
            validate: (value: string) => {
              if (
                value !== formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                setError("confirmPassword", {
                  message: "Your password does not match",
                });
              } else if (
                value === formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                clearErrors("confirmPassword");
              }
              return true;
            },
          }}
          control={control}
          name={"password"}
        />
        <HFTextInput
          placeholder="Xác nhận mật khẩu mới"
          bottomBorder
          control={control}
          name={"confirmPassword"}
          secureTextEntry
          rules={{
            validate: (value: string) => {
              if (value !== formValue?.password) {
                return "Your password does not match";
              }
            },
          }}
        />
        <Button
          disabled={formDisabled}
          mainColor={colors.black}
          textColor={colors.white}
          style={{ borderRadius: 70, marginTop: 24 }}
          onPress={() => {
            resetPassword({
              data: {
                username: user,
                otp: otp,
                newPassword: formValue?.password,
                confirmNewPassword: formValue?.confirmPassword,
              },
              callback: ({ data, error }) => {
                if (data) {
                  reset(StackName.SignInScreen);
                }
              },
            });
          }}
        >
          Tạo Mật khẩu
        </Button>
      </View>
    </View>
  );
};

export default NewPasswordScreen;
