import React, { useRef } from "react";
import { Animated, Platform, TouchableOpacity, ViewStyle } from "react-native";

const ToggleSwitch = ({ isOn, disabled, onToggle }) => {
  const offsetX = useRef(new Animated.Value(0)).current;
  const createToggleSwitchStyle: ViewStyle[] = [
    {
      justifyContent: "center",
      width: 36,
      backgroundColor: !isOn ? "#9F86C9" : "#9F86C980",
      height: 18,
      borderRadius: 18,
    },
  ];
  const createInsideCircleStyle: ViewStyle[] = [
    {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#fff",
      transform: [{ translateX: offsetX }],
      width: 14,
      height: 14,
      borderRadius: 7,
      marginHorizontal: 2,
    },
  ];

  const onTogglePress = () => {
    Animated.timing(offsetX, {
      toValue: isOn ? 36 - 14 - 2 * 2 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    onToggle?.(!isOn);
  };
  return (
    <TouchableOpacity
      style={createToggleSwitchStyle}
      activeOpacity={0.8}
      onPress={() => (disabled ? null : onTogglePress())}
    >
      <Animated.View style={createInsideCircleStyle}></Animated.View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
