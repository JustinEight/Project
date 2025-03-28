import Text from "@components/Text";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabMenu from "./components/TabMenu";
import Footer from "@screens/HomeScreen/components/Footer";
import ChatItem from "./components/ChatItem";
import EmptyPage from "./components/EmptyPage";

const ChatScreen = () => {
  const { top } = useSafeAreaInsets();
  const [value, setValue] = useState(0);

  const [chatData, setChatData] = useState({ data: new Array(6).fill(0) });

  const renderContent = () => {
    switch (value) {
      case 0:
        return (
          <FlatList
            data={chatData?.data}
            contentContainerStyle={[
              {
                marginHorizontal: 16,
                gap: 8,
                marginTop: 16,
              },
              chatData?.data?.length ? {} : { flexGrow: 1 },
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return <ChatItem item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Footer />}
            ListEmptyComponent={<EmptyPage />}
          />
        );
      case 1:
        return (
          <FlatList
            data={chatData?.data}
            contentContainerStyle={[
              {
                marginHorizontal: 16,
                gap: 8,
                marginTop: 16,
              },
              chatData?.data?.length ? {} : { flexGrow: 1 },
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return <ChatItem item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Footer />}
            ListEmptyComponent={<EmptyPage />}
          />
        );
      case 2:
        return (
          <FlatList
            data={chatData?.data}
            contentContainerStyle={[
              {
                marginHorizontal: 16,
                gap: 8,
                marginTop: 16,
              },
              chatData?.data?.length ? {} : { flexGrow: 1 },
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return <ChatItem item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Footer />}
            ListEmptyComponent={<EmptyPage />}
          />
        );
      default:
        return null;
    }
  };
  return (
    <View style={{ flex: 1, marginTop: top + 8 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#1D2125",
          marginLeft: 16,
        }}
      >
        Tin nhắn
      </Text>
      <TabMenu
        style={{ marginTop: 20 }}
        currentIndex={value}
        setCurrentIndex={(v) => {
          setValue(v);
        }}
      />
      {renderContent()}
    </View>
  );
};

export default ChatScreen;
