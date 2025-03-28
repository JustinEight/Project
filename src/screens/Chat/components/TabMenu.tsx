import { ApplicationTheme } from "@assets/theme";
import { ChatIconAll } from "@components/Icon";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { translate } from "@localization/translate";
import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

const TabMenu = ({
  style,
  currentIndex,
  setCurrentIndex,
}: {
  style?: ViewStyle;
  currentIndex: number;
  setCurrentIndex: (v: number) => void;
}) => {
  const data = [
    {
      label: translate("chatScreen.all"),
      icon: (color: string) => <ChatIconAll stroke={color} />,
    },
    { label: translate("chatScreen.buyer") },
    { label: translate("chatScreen.seller") },
  ];

  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginHorizontal: 16,
        },
        style,
      ]}
    >
      {data?.map((item, index) => {
        const selected = currentIndex === index;

        if (selected) {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentIndex(index);
              }}
              style={styles.button}
            >
              {item?.icon ? item?.icon(styles.activeItem.color) : null}
              <Text style={styles.activeItem}>{item?.label}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(index);
            }}
            style={[styles.button, styles.inactiveButton]}
          >
            {item?.icon ? item?.icon(styles.inactiveItem.color) : null}
            <Text style={styles.inactiveItem}>{item?.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const useStyles = ({ colors }: ApplicationTheme) => {
  return StyleSheet.create({
    button: {
      height: 36,
      borderRadius: 100,
      backgroundColor: colors.blueChalkViolet,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      gap: 4,
      borderColor: colors.blueChalkViolet,
      borderWidth: 1,
    },
    inactiveButton: {
      borderColor: colors.heatherBlue,
    },
    inactiveItem: { color: colors.lightSlateGrey },
    activeItem: { color: colors.jaggerViolet },
  });
};

export default TabMenu;
