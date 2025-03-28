import images from "@assets/images";
import Image from "@components/Image";
import Text from "@components/Text";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ChatItem = ({ item }) => {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  avatar: { height: 54, width: 54, borderRadius: 6 },
  content: { flexDirection: "row", alignItems: "center" },
  title: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
  },
  chatContent: {
    fontSize: 12,
    fontWeight: "700",
    color: "#596773",
    flex: 1,
  },
  unreadIndicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#9F86C9",
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    color: "#8590A2",
    textAlign: "right",
  },
  chatRead: {
    fontWeight: "400",
  },
});

export default ChatItem;
