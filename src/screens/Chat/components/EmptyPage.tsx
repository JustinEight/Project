import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { translate } from "@localization/translate";
import React from "react";
import { View } from "react-native";

const EmptyPage = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "700", color: colors.manateeBlue }}>
        {translate("chatScreen.emptyPage.title")}
      </Text>
      <Text style={{ fontSize: 14, color: colors.manateeBlue, marginTop: 8 }}>
        {translate("chatScreen.emptyPage.subTitle")}
      </Text>
    </View>
  );
};

export default EmptyPage;
