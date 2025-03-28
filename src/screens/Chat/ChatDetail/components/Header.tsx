import images from "@assets/images";
import { ApplicationTheme } from "@assets/theme";
import { BackIcon, ChevronLeftIcon, MoreVerticalIcon } from "@components/Icon";
import Image from "@components/Image";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useStyles(theme);
  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <TouchableOpacity style={{ paddingLeft: 16 }}>
          <ChevronLeftIcon fill={colors.baliHaiBlue} height={20} width={20} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Image style={styles.avatar} source={images.avatarDefault} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name} numberOfLines={1}>
              Kim Ngân Nguyễn Ngọc
            </Text>
            <Text style={styles.time}>Hoạt động 2 giờ trước</Text>
          </View>
        </View>
        <TouchableOpacity style={{ paddingRight: 16 }}>
          <MoreVerticalIcon fill={colors.rhinoBlue} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const useStyles = ({ colors }: ApplicationTheme) => {
  return StyleSheet.create({
    avatar: {
      height: 36,
      width: 36,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.white,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    content: { flex: 1, flexDirection: "row", gap: 4, alignItems: "center" },
    name: { fontSize: 13, fontWeight: "700", color: colors.jaggerViolet },
    time: { fontSize: 12, color: colors.manateeBlue },
  });
};

export default Header;
