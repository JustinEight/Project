import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import UserPageHeader from "./components/Header";
import icons from "@assets/icons";
import Image from "@components/Image";
import ProductItem from "./components/ProductItem";
import Footer from "@screens/HomeScreen/components/Footer";
import SettingItem from "./components/SettingItem";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import useAuthActions from "@redux/useActions/useAuthActions";

const TabMenu = [
  { icon: icons.coffeBeanIcon },
  { icon: icons.postTabIcon },
  { icon: icons.buyedTabIcon },
  { icon: icons.settingTabIcon },
];

const SettingMenu = [
  {
    label: "Thông tin tài khoản",
    onPress: () => {
      navigate(StackName.AccountInfomation);
    },
  },
  {
    label: "Cài đặt chung",
    onPress: () => {
      navigate(StackName.GeneralSettings);
    },
  },
  {
    label: "Liên hệ và góp ý",
    onPress: () => {
      navigate(StackName.ContactAndFeedbackPage);
    },
  },
  {
    label: "Điều khoản",
    onPress: () => {
      navigate(StackName.TermPage);
    },
  },
];
const UserPage = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(1);

  const { logout } = useAuthActions();
  const renderTabMenu = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 26,
          marginHorizontal: 25,
          marginTop: 12,
        }}
      >
        {TabMenu?.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  currentTabIndex === index + 1 ? "#9F86C9" : "#D6CEE4",
              }}
              onPress={() => {
                setCurrentTabIndex(index + 1);
              }}
            >
              <Image
                source={item?.icon}
                style={{ height: 30, width: 30, borderRadius: 30 }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContentTab = () => {
    switch (currentTabIndex) {
      case 1:
        return (
          <View style={{ flex: 1 }} key={1}>
            <FlatList
              data={[1, 2, 2, 2, 2]}
              renderItem={({ item }) => {
                return <ProductItem />;
              }}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ gap: 16 }}
              ListHeaderComponent={<View style={{ height: 18 }} />}
              ListFooterComponent={<Footer />}
            />
          </View>
        );
      case 2:
        return (
          <View style={{ flex: 1 }} key={2}>
            <FlatList
              data={[1, 2, 2, 2, 2]}
              renderItem={({ item }) => {
                return <ProductItem />;
              }}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ gap: 16 }}
              ListHeaderComponent={<View style={{ height: 18 }} />}
              ListFooterComponent={<Footer />}
            />
          </View>
        );
      case 3:
        return (
          <View style={{ flex: 1 }} key={3}>
            <FlatList
              data={[1, 2, 2, 2, 2]}
              renderItem={({ item }) => {
                return <ProductItem />;
              }}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ gap: 16 }}
              ListHeaderComponent={<View style={{ height: 18 }} />}
              ListFooterComponent={<Footer />}
            />
          </View>
        );
      case 4: {
        return (
          <View style={{ gap: 12, marginTop: 19 }}>
            {SettingMenu?.map((item, index) => {
              return (
                <SettingItem
                  label={item?.label}
                  key={index}
                  onPress={item?.onPress}
                />
              );
            })}
            <SettingItem
              label={"Đăng xuất"}
              onPress={() => {
                logout()
              }}
            />
          </View>
        );
      }
      default:
        break;
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <UserPageHeader />
      {renderTabMenu()}
      {renderContentTab()}
    </View>
  );
};
export default UserPage;
