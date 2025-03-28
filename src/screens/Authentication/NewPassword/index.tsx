import images from "@assets/images";
import Navigator from "@assets/Modules/Modules";
import { ApplicationTheme } from "@assets/theme";
import Button from "@components/Button";
import HFTextInput from "@components/HookForm/HFTextInput";
import Image from "@components/Image";
import Text from "@components/Text";
import { ToastType } from "@components/Toast/ToastType";
import { PASSWORD_REGEX } from "@constants/index";
import { useTheme } from "@hooks/useTheme";
import { translate } from "@localization/translate";
import { reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import { useRoute } from "@react-navigation/native";
import useAuthActions from "@redux/useActions/useAuthActions";
import { isArray } from "lodash";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const NewPasswordScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const { resetPassword } = useAuthActions();
  const route = useRoute();
  const user = route?.params?.user || "";
  const otp = route?.params?.otp || "";
  const styles = useStyles(theme);

  const { control, watch, setError, clearErrors, handleSubmit } = useForm();

  const formValue = watch();

  const formDisabled =
    !formValue?.password?.trim() || !formValue?.confirmPassword?.trim();

  const handleResetPasswod = ({ password, confirmPassword }: FieldValues) => {
    Navigator.showLoading();
    resetPassword({
      data: {
        username: user,
        otp: otp,
        newPassword: password,
        confirmNewPassword: confirmPassword,
      },
      callback: ({ data, error }) => {
        if (data) {
          reset(StackName.SignInScreen);
        } else if (error) {
          const message =
            typeof error?.responseException?.exceptionMessage === "string"
              ? error?.responseException?.exceptionMessage
              : isArray(
                  error?.responseException?.exceptionMessage?.errors
                    ?.NewPassword
                )
              ? error?.responseException?.exceptionMessage?.errors?.NewPassword?.join(
                  ", "
                )
              : "Something went wrong";

          Navigator?.showToastMsg({
            type: ToastType.ERROR,
            message: message,
          });
        }
        Navigator.showLoading();
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={images.newPasswordBackground}
        style={styles.imageBackground}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{translate("newPassword.title")}</Text>
        <HFTextInput
          placeholder={translate("newPassword.title")}
          bottomBorder
          secureTextEntry
          rules={{
            pattern: {
              value: PASSWORD_REGEX,
              message: translate("validation.passwordValid"),
            },
            validate: (value: string) => {
              if (
                value !== formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                setError("confirmPassword", {
                  message: translate("validation.passwordNotMatch"),
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
          note={"*" + translate("validation.passwordValid")}
          noteColor={colors.white}
        />
        <HFTextInput
          placeholder={translate("newPassword.confirmNewPassword")}
          bottomBorder
          control={control}
          name={"confirmPassword"}
          secureTextEntry
          rules={{
            pattern: {
              value: PASSWORD_REGEX,
              message: translate("validation.passwordValid"),
            },
            validate: (value: string) => {
              if (value !== formValue?.password) {
                return translate("validation.passwordNotMatch");
              }
            },
          }}
        />
        <Button
          disabled={formDisabled}
          mainColor={colors.black}
          textColor={colors.white}
          style={styles.submitButton}
          onPress={handleSubmit(handleResetPasswod)}
        >
          {translate("button.resetPassword")}
        </Button>
      </View>
    </View>
  );
};

const useStyles = ({ colors, alpha }: ApplicationTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.white,
    },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
    },
    content: {
      backgroundColor: colors.suvaGrey + alpha.alpha_50,
      borderRadius: 25,
      padding: 24,
      marginHorizontal: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 16,
      color: colors.white,
    },
    submitButton: { borderRadius: 70, marginTop: 24 },
  });
};

export default NewPasswordScreen;
