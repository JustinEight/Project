import { ChevronDownIcon } from "@components/Icon";
import Text from "@components/Text";
import ToggleSwitch from "@components/ToggleSwitch";
import React, { useState } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

const SettingItemWithSwitch = ({
  label,
  style = {},
  onPress,
}: {
  label: string;
  style?: ViewStyle;
  onPress?: () => void;
}) => {
  const [isOn, setIsOn] = useState(false);
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
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          minHeight: 48,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={{ flex: 1, fontSize: 13, fontWeight: "500" }}>{label}</Text>
      <ToggleSwitch isOn={isOn} onToggle={(v) => setIsOn(v)} />
    </TouchableOpacity>
  );
};

export default SettingItemWithSwitch;
