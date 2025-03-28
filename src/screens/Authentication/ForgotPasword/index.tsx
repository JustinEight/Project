import Button from '@components/Button';
import {ForgotPaswordLogo} from '@components/Icon';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import {useTheme} from '@hooks/useTheme';
import {goBack, navigate} from '@navigation/index';
import {StackName} from '@navigation/StackName';
import React from 'react';
import {View} from 'react-native';

const ForgotPaswordScreen = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: colors.white,
      }}>
      <View style={{gap: 24}}>
        <View style={{alignItems: 'center', gap: 16}}>
          <ForgotPaswordLogo />
          <Text style={{fontSize: 22, fontWeight: 700}}>Quên mật khẩu</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: colors.bayouxBlue,
            }}>
            Vui lòng nhập email hoặc số điện thoại đã từng dùng để đăng ký tài
            khoản.
          </Text>
        </View>
        <TextInput placeholder="Email/Số điện thoại" />
        <View>
          <Button
            mainColor={colors.midnightExpressBlue}
            textColor={colors.white}
            onPress={() => {
              navigate(StackName.GetOTPScreen, {user: '090458458'});
            }}>
            Quên mật khẩu
          </Button>
          <Button
            mainColor={colors.white}
            textColor={colors.midnightExpressBlue}
            onPress={() => {
              goBack();
            }}>
            Quay lại đăng nhập
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ForgotPaswordScreen;
