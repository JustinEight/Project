import icons from "@assets/icons";
import { screenWidth } from "@assets/size";
import { ColorsTheme } from "@assets/theme";
import {
  CommunityIcon,
  HomeIcon,
  MessageIcon,
  MyProfileIcon,
} from "@components/Icon";
import Image from "@components/Image";
import { BOTTOM_TABBAR_HEIGHT } from "@constants/index";
import { StackName } from "@navigation/StackName";
import { Fragment } from "react";
import { TouchableOpacity, View } from "react-native";

const MyBottomTabbar = ({
  state,
  navigation,
  bottom,
  colors,
}: {
  colors: ColorsTheme;
  bottom: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: BOTTOM_TABBAR_HEIGHT,
        bottom: bottom || 24,
        marginHorizontal: 16,
        borderRadius: 26,
        backgroundColor: colors.white,
        gap: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        position: "absolute",
        width: screenWidth - 14 * 2,
      }}
    >
      {state.routes.map((route, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const renderIcon = () => {
          const iconColor = isFocused ? "white" : "#8590A2";
          switch (route.name) {
            case StackName.HomeStack:
              return <HomeIcon fill={iconColor} />;
            case "HomeScreen1":
              return <CommunityIcon fill={iconColor} />;
            case StackName.ChatScreen:
              return <MessageIcon fill={iconColor} />;
            case "HomeScreen3":
              return (
                <Image
                  source={icons.myListingIcon}
                  tintColor={iconColor}
                  style={{ height: 20, width: 20 }}
                />
              );
            case StackName.UserStack:
              return <MyProfileIcon fill={iconColor} />;
            default:
              break;
          }
        };

        return (
          <Fragment key={index}>
            {route.name === StackName.HomeStack && isFocused && (
              <View
                style={{
                  width: screenWidth / 5 - 23,
                  position: "absolute",
                  backgroundColor: "#D8D1E580",
                  bottom: 12,
                  left: 14,
                  borderRadius: 18,
                }}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={icons.storeIcon}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </View>
                <View
                  style={{
                    paddingVertical: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={icons.rentIcon}
                    tintColor={"#8590A2"}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </View>
                <View
                  style={{
                    paddingVertical: 16,
                    marginBottom: 52,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={icons.jobIcon}
                    tintColor={"#8590A2"}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </View>
              </View>
            )}
            <TouchableOpacity
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isFocused ? "#9F86C980" : colors.transparent,
                borderRadius: 18,
              }}
            >
              {renderIcon()}
            </TouchableOpacity>
          </Fragment>
        );
      })}
    </View>
  );
};
export default MyBottomTabbar;
