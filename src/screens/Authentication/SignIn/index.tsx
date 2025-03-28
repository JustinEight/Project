import images from "@assets/images";
import Button from "@components/Button";
import HFTextInput from "@components/HookForm/HFTextInput";
import Image from "@components/Image";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "./hook/useStyles";

import {
  AppleIcon,
  CheckboxIcon,
  CheckboxOutlineIcon,
  FacebookIcon,
  GoogleIcon,
} from "@components/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useAuthActions from "@redux/useActions/useAuthActions";
import Navigator from "@assets/Modules/Modules";
import { ToastType } from "@components/Toast/ToastType";
import { EMAIL_REGEX } from "@constants/index";
import { translate } from "@localization/translate";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = () => {
  const theme = useTheme();
  const { colors, alpha } = theme;
  const styles = useStyles(theme);
  const { bottom } = useSafeAreaInsets();
  const { login, forgotPassword } = useAuthActions();

  const { control, watch, handleSubmit, setValue, setError, clearErrors } =
    useForm();

  const formValue = watch();

  const formDisabled =
    !formValue?.email?.trim() || !formValue?.password?.trim();

  const onSubmit = handleSubmit(
    ({ email, password, signInStatus }: FieldValues) => {
      Navigator.showLoading();
      login({
        data: {
          username: email,
          password: password,
          isRememberMe: !!signInStatus,
        },
        callback: ({ error, data }) => {
          if (error) {
            Navigator?.showToastMsg({
              type: ToastType.ERROR,
              message: error?.responseException?.exceptionMessage,
            });
          } else if (data) {
            navigate(StackName.GetOTPScreen, { user: email });
          }
          Navigator.hideLoading();
        },
      });
    }
  );

  return (
    <View style={styles.container}>
      <Image
        source={images.signInBackground}
        style={styles.imageBackground}
        resizeMode="stretch"
      />
      <KeyboardAwareScrollView
        style={[styles.content]}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoAppContainer}>
          <Text style={styles.logoText}>{translate("common.titleApp")}</Text>
          <Text style={styles.logoText2}>{translate("common.titleApp")}</Text>
        </View>
        <Text style={styles.title}>{translate("signIn.title")}</Text>
        <View style={styles.formContainer}>
          <HFTextInput
            control={control}
            name="email"
            placeholder={translate("signIn.username")}
            bottomBorder
            clearError={() => {
              clearErrors("email");
            }}
            rules={{
              pattern: {
                value: EMAIL_REGEX,
                message: translate("validation.invalidEmail"),
              },
            }}
          />
          <HFTextInput
            control={control}
            name={"password"}
            placeholder={translate("signIn.password")}
            bottomBorder
            secureTextEntry
            clearError={() => {
              clearErrors("password");
            }}
            rightIcon={
              <Text
                style={styles.forgotPassword}
                onPress={() => {
                  if (formValue?.email) {
                    Navigator.showLoading();
                    forgotPassword({
                      data: { username: formValue?.email },
                      callback: ({ data, error }) => {
                        if (data) {
                          navigate(StackName.GetOTPScreen, {
                            user: formValue?.email,
                            isResetPassword: true,
                          });
                        } else if (error) {
                          Navigator?.showToastMsg({
                            type: ToastType.ERROR,
                            message: error?.responseException?.exceptionMessage,
                          });
                        }
                        Navigator.hideLoading();
                      },
                    });
                  } else {
                    setError("email", {
                      message: translate("validation.emailRequire"),
                    });
                  }
                }}
              >
                {translate("signIn.forgotPassword")}
              </Text>
            }
          />
        </View>
        <TouchableOpacity
          style={styles.staySignedInWrapper}
          activeOpacity={1}
          onPress={() => {
            setValue("signInStatus", !formValue?.signInStatus);
          }}
        >
          {formValue?.signInStatus ? (
            <CheckboxIcon fill={styles.icon.color} />
          ) : (
            <CheckboxOutlineIcon fill={styles.icon.color} />
          )}
          <Text style={styles.staySignedIn}>
            {translate("signIn.staySignedIn")}
          </Text>
        </TouchableOpacity>
        <Button
          mainColor={colors.black + alpha.alpha_75}
          textColor={colors.white}
          disabled={formDisabled}
          style={styles.signInButton}
          onPress={onSubmit}
        >
          {translate("button.signIn")}
        </Button>
        <View style={styles.signInWithWrapper}>
          <View style={styles.line} />
          <Text style={styles.signInWithText}>
            {translate("signIn.orSignInWith")}
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconItem}>
            <GoogleIcon fill={styles.iconColor.color} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <FacebookIcon fill={styles.iconColor.color} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <AppleIcon fill={styles.iconColor.color} />
          </TouchableOpacity>
        </View>
        <View style={[styles.terms, { marginBottom: 24 + bottom }]}>
          <Text style={styles.termText}>
            {`Bằng việc Đăng kí / Đăng nhập, bạn đã đồng ý với\n `}
            <Text style={styles.termBold}>Điều khoản và Điều kiện </Text> của
            chúng tôi.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreen;
