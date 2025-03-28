import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import BannerCarousel from "./components/BannerCarousel";
import { HeaderWithBackIcon } from "@components/Header";
import { BackIcon, LocationOutlineIcon } from "@components/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@components/Text";
import Image from "@components/Image";
import images from "@assets/images";
import FavoriteRating from "@components/Rating/FavoriteRating";
import icons from "@assets/icons";
import UserProductList from "./components/UserProductList";

const ProductDetailScreen = () => {
  const { bottom, top } = useSafeAreaInsets();
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BannerCarousel />
        <View
          style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 12 }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              source={images.avatarDefault}
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                marginRight: 4,
              }}
            />
            <View>
              <Text
                style={{ color: "#879663", fontSize: 18, fontWeight: "700" }}
              >
                Soo Ah
              </Text>
              <View
                style={{ flexDirection: "row", flex: 1, alignItems: "center" }}
              >
                <LocationOutlineIcon fill="#1D1B20" width={10} height={10} />
                <Text
                  style={{ fontSize: 10, fontWeight: "500", color: "#444444" }}
                >
                  Nguyễn Quý Đức, Thanh Xuân, Hà Nội
                </Text>
              </View>
            </View>
          </View>
          <FavoriteRating rating={3} />
        </View>
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Mô tả</Text>
          <Text
            style={{
              fontSize: 12,
              color: "#859462",
              textDecorationLine: "underline",
            }}
          >
            Nội thất
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowFullDescription(!showFullDescription);
            }}
          >
            <Text
              style={{ fontSize: 14, color: "#596773" }}
              numberOfLines={showFullDescription ? undefined : 2}
            >
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu
            </Text>
            {!showFullDescription && (
              <Text
                style={{ fontWeight: "600", color: "#8590A2", fontSize: 14 }}
              >
                {"Xem thêm"}
              </Text>
            )}
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Text style={{ fontSize: 15 }}>30</Text>
              <Image
                source={icons.coffeBeanIcon}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Text style={{ fontSize: 15 }}>30</Text>
              <Image
                source={icons.messageIcon}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </View>
        </View>
        <UserProductList title={"Sản phẩm khác của người bán"} />
        <UserProductList title={"Có thể bạn đang tìm"} />
        <UserProductList title={"Sản phẩm tương tự"} />
        <View />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          gap: 8,
          paddingBottom: bottom || 24,
          paddingTop: 16,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            height: 47,
            backgroundColor: "#879663A6",
            borderRadius: 10,
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 47,
            backgroundColor: "#879663A6",
            borderRadius: 10,
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
