import { HeaderWithBackIcon } from "@components/Header";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import BlockedUserItem from "./components/BlockedUserItem";
import Text from "@components/Text";

const BlockedUserPage = () => {
  const [blockUserData, setBlockUserData] = useState({ data: [1, 2, 3] });
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithBackIcon title={"Người dùng đã chặn"} />
      <FlatList
        style={{ marginRight: 16, marginTop: 16, flex: 1 }}
        data={blockUserData?.data}
        renderItem={() => {
          return <BlockedUserItem />;
        }}
        contentContainerStyle={
          blockUserData?.data?.length ? { gap: 8 } : { gap: 8, flexGrow: 1 }
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <Text style={{ fontWeight: "700", color: "#8590A2" }}>
              Danh sách trống
            </Text>
            <Text style={{ fontSize: 12, color: "#8590A2" }}>
              Chưa có người dùng nào bị chặn.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default BlockedUserPage;
