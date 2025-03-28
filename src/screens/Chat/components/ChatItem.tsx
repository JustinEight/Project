import images from "@assets/images";
import { ApplicationTheme } from "@assets/theme";
import Image from "@components/Image";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ChatItem = ({ item }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const isRead = true;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate(StackName.ChatDetail);
      }}
    >
      <Image style={styles.avatar} source={images.avatarDefault} />
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, isRead ? styles.chatRead : {}]}>
              Hanna Dias
            </Text>
            <Text
              style={[styles.chatContent, isRead ? styles.chatRead : {}]}
              numberOfLines={1}
            >
              Vorem ipsum dolor sit amet, consectetur...
            </Text>
          </View>
          {!isRead && <View style={styles.unreadIndicator} />}
        </View>
        <Text style={styles.time}>5:45 AM</Text>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = ({ colors }: ApplicationTheme) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      padding: 8,
      borderRadius: 12,
      backgroundColor: colors.white,
    },
    avatar: { height: 54, width: 54, borderRadius: 6 },
    content: { flexDirection: "row", alignItems: "center" },
    title: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.black,
    },
    chatContent: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.bayouxBlue,
      flex: 1,
    },
    unreadIndicator: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: colors.bilobaFlowerViolet,
    },
    time: {
      marginTop: 4,
      fontSize: 12,
      color: colors.manateeBlue,
      textAlign: "right",
    },
    chatRead: {
      fontWeight: "400",
    },
  });
};

export default ChatItem;
