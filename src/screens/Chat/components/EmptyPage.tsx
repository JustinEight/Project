import Text from "@components/Text";
import React from "react";
import { View } from "react-native";

const EmptyPage = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "700", color: "#8590A2" }}>
        Chưa có tin nhắn nào
      </Text>
      <Text style={{ fontSize: 14, color: "#8590A2", marginTop: 8 }}>
        Đăng bán mặt hàng của bạn để hàng xóm hỏi mua nào!{" "}
      </Text>
    </View>
  );
};

export default EmptyPage;
