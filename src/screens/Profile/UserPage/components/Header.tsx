import images from "@assets/images";
import { LocationOutlineIcon } from "@components/Icon";
import Image from "@components/Image";
import FavoriteRating from "@components/Rating/FavoriteRating";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserPageHeader = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 30,
      }}
    >
      <SafeAreaView edges={["top", "right", "left"]}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          Chào Soo Ah nhé !
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "10%",
            gap: 16,
            marginTop: 11,
          }}
        >
          <Image
            source={images.avatarDefault}
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
          <View>
            <Text style={{ fontWeight: "700", fontSize: 25, color: "#2C333A" }}>
              Soo Ah
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LocationOutlineIcon fill={"#8590A2"} width={18} height={18} />
              <Text
                style={{
                  color: "#8590A2",
                  fontWeight: "500",
                  fontSize: 10,
                  flex: 1,
                }}
              >
                Đỗ Đức Dục Mễ Trì, Nam Từ Liêm, Hà Nội
              </Text>
            </View>

            <FavoriteRating rating={3} style={{ marginTop: 4 }} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UserPageHeader;
