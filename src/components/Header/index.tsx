import { BackIcon, ChevronLeftIcon, DrawerIcon } from "@components/Icon";
import Text from "@components/Text";
import TextInput from "@components/TextInput";
import { INPUT_HEIGHT } from "@constants/index";
import { useTheme } from "@hooks/useTheme";
import { goBack } from "@navigation/index";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HeaderWithBackIcon = ({ title, safe = true }) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: "#EDECF0" }}>
      <SafeAreaView
        edges={safe ? ["top", "right", "left"] : ["right", "left"]}
        style={{
          flexDirection: "row",
          alignItems: "center",
          minHeight: INPUT_HEIGHT,
        }}
      >
        <TouchableOpacity
          style={{
            height: 44,
            width: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            goBack();
          }}
        >
          <ChevronLeftIcon fill={colors.black} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            flex: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          style={{
            height: 44,
            width: 44,
          }}
        ></TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
export const HeaderWithSearchInput = ({
  value,
  onChangeValue,
  placeholder,
}) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.midnightExpressBlue }}>
      <SafeAreaView
        edges={["top", "right", "left"]}
        style={{
          flexDirection: "row",
          alignItems: "center",
          minHeight: INPUT_HEIGHT,
          marginBottom: 16,
        }}
      >
        <TouchableOpacity
          style={{
            height: INPUT_HEIGHT,
            width: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            goBack();
          }}
        >
          <BackIcon fill={colors.white} />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          style={{ flex: 1, marginRight: 16 }}
          placeholder={placeholder}
        />
      </SafeAreaView>
    </View>
  );
};

export const HeaderWithDrawerIcon = ({}) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.midnightExpressBlue }}>
      <SafeAreaView
        edges={["top", "right", "left"]}
        style={{
          flexDirection: "row",
          alignItems: "center",
          minHeight: INPUT_HEIGHT,
        }}
      >
        <TouchableOpacity
          style={{
            height: 44,
            width: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            goBack();
          }}
        >
          <DrawerIcon />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
