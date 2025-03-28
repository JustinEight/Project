import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "./components/Header";
import Text from "@components/Text";
import { SaleButton } from "./components/Footer";
import CategoryList from "./components/CategoryList";
import useAuthActions from "@redux/useActions/useAuthActions";
import Modal from "@components/Modal";
import Slider from "@components/Slider";

const HomeScreen = () => {
  const { getUserProfile } = useAuthActions();

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 14,
          borderRadius: 10,
          backgroundColor: "#ffffff",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 13, color: "#00000", paddingHorizontal: 16 }}>
          Bạn có hài lòng với dịch vụ?
        </Text>
        <Text style={{ fontSize: 13, color: "#889663", paddingHorizontal: 16 }}>
          Rất tốt!
        </Text>
        <Text style={{ fontSize: 13, color: "#00000", paddingHorizontal: 16 }}>
          Chưa tốt.
        </Text>
      </View>
      <CategoryList />
      <SaleButton />
    </View>
  );
};

export default HomeScreen;
