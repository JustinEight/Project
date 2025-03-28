import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";
import Text from "@components/Text";
import TextInput from "@components/TextInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CheckMarkerIcon, ChevronRightIcon, SendIcon } from "@components/Icon";
import Image from "@components/Image";
import dummyData from "@assets/dummyData";
import Button from "@components/Button";

const ChatDetail = () => {
  const { bottom } = useSafeAreaInsets();
  const [messageHeight, setMessageHeight] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, marginHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productContainer}>
          <Image source={dummyData.category1} style={styles.productImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.productName}>
              Macbook Pro 2020 13 inch i7 32GB 1000 giá rẻ
            </Text>
            <Text style={styles.productprice}>17.500.000</Text>
            <Button
              mainColor="#9F86C9"
              textColor="#9F86C9"
              outline
              style={styles.buttonMaker}
              iconLeft={<CheckMarkerIcon fill={"#9F86C9"} />}
              textStyle={styles.textButtonMaker}
            >
              Đánh dấu đã bán
            </Button>
          </View>
        </View>
        <View style={styles.note}>
          <Text style={{ fontSize: 12, color: "#2C333A" }}>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenfaeos.Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
            turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam
            quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </Text>
        </View>
        <View style={styles.chatListContainer}>
          <View style={styles.chatItem}>
            <Text style={styles.chatItemText}>OK</Text>
          </View>
          <View style={styles.chatItem}>
            <Text style={styles.chatItemText}>Gorem ipsum dolor sit amet</Text>
          </View>
          <View style={styles.chatItem}>
            <Text style={styles.chatItemText}>
              Consectetur adipiscing elit.
            </Text>
          </View>
          <Text style={styles.chatTime}>12:45</Text>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.chatInputContainer}>
          <TouchableOpacity style={styles.leftIcon}>
            <ChevronRightIcon fill="#1D1825" width={24} height={24} />
          </TouchableOpacity>
          <TextInput
            placeholder="Viết tin nhắn..."
            containerContentStyle={{
              ...styles.containerInput,
              borderRadius: messageHeight <= 46 ? 70 : 24,
            }}
            style={{ flex: 1 }}
            inputStyle={styles.input}
            multiline
            onLayout={({ nativeEvent }) => {
              if (messageHeight !== nativeEvent?.layout?.height) {
                setMessageHeight(nativeEvent?.layout?.height);
              }
            }}
          />
          <TouchableOpacity style={styles.sendButton}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={{ height: bottom || 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  sendButton: {
    height: 36,
    width: 36,
    backgroundColor: "#9F86C9",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    backgroundColor: "#fff",
    // borderRadius: 100,
    minHeight: 36,
    height: "auto",
  },
  input: { textAlignVertical: "top", paddingVertical: 10 },
  chatInputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 8,
    gap: 8,
  },
  note: {
    backgroundColor: "#DCDFE4",
    borderRadius: 12,
    padding: 8,
  },
  leftIcon: {
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    marginTop: 16,
    marginBottom: 24,
    gap: 8,
  },
  productImage: { height: 95, width: 103, borderRadius: 10 },
  productName: { fontSize: 12, fontWeight: "600", color: "#000000" },
  productprice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8590A2",
    marginTop: 4,
  },
  buttonMaker: {
    minHeight: 27,
    gap: 4,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  textButtonMaker: { fontSize: 12, fontWeight: "700" },
  chatListContainer: {
    gap: 8,
    alignSelf: "flex-end",
    marginTop: 16,
    alignItems: "flex-end",
  },
  chatItem: {
    backgroundColor: "#D8D1E5",
    borderRadius: 12,
    padding: 12,
  },
  chatItemText: { color: "#2C333A", fontSize: 12 },
  chatTime: { fontSize: 12, color: "#8590A2" },
});
export default ChatDetail;
