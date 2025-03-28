import Button from "@components/Button";
import { PlusSquareIcon } from "@components/Icon";
import { BOTTOM_TABBAR_HEIGHT } from "@constants/index";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Footer = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{ height: BOTTOM_TABBAR_HEIGHT + (bottom || 24) + 24 * 2 + 39 }}
    />
  );
};
export const SaleButton = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Button
      iconLeft={<PlusSquareIcon fill={"#fff"} />}
      style={{
        position: "absolute",
        borderRadius: 40,
        bottom: BOTTOM_TABBAR_HEIGHT + (bottom || 24) + 16,
        right: 16,
        height: 39,
        gap: 8,
      }}
      mainColor="#9F86C9"
      textColor="#fff"
      textStyle={{ fontSize: 14 }}
      onPress={() => {
        navigate(StackName.AddPostForSale);
      }}
    >
      Đăng bán
    </Button>
  );
};
export default Footer;
