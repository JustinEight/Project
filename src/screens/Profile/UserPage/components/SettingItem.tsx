import { ChevronDownIcon } from "@components/Icon";
import Text from "@components/Text";
import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

const SettingItem = ({
  label,
  style = {},
  onPress,
}: {
  label: string;
  style?: ViewStyle;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          marginHorizontal: 25,
          borderRadius: 15,
          paddingVertical: 12,
          paddingLeft: 20,
          paddingRight: 10,
          backgroundColor: "#D6CEE4",
          alignItems: "center",
          minHeight: 48,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={{ flex: 1, fontSize: 15, fontWeight: "700" }}>{label}</Text>
      <ChevronDownIcon fill="#000000" />
    </TouchableOpacity>
  );
};

export default SettingItem;
