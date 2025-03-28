import { screenWidth } from "@assets/size";
import { BackIcon, LocationOutlineIcon } from "@components/Icon";
import Text from "@components/Text";
import { goBack } from "@navigation/index";
import React, { FC, useRef, useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
const data = [...new Array(4)];

const SLIDE_WIDTH = screenWidth;
const ITEM_WIDTH = screenWidth - 16 * 2;

interface BannerCarouselProps {
  renderItemComponent: ({ item }: any) => React.ReactElement;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
}

const CarouselList: FC<BannerCarouselProps> = ({
  renderItemComponent,
  style,
  itemStyle,
}) => {
  const carouselRef = useRef<Carousel<any>>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          {
            height: 267,
            width: ITEM_WIDTH,
            backgroundColor: "#ADB0B6",
            borderRadius: 12,
          },
          itemStyle,
        ]}
      >
        {renderItemComponent ? renderItemComponent({ item }) : null}
      </View>
    );
  };

  return (
    <View style={style}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDE_WIDTH}
        itemWidth={ITEM_WIDTH}
        onBeforeSnapToItem={setCurrentIndex}
      />
      <View
        style={{
          position: "absolute",
          bottom: 8,
          width: screenWidth - 16 * 2 - 4 * 2,
          backgroundColor: "#88888880",
          alignSelf: "center",
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "500", color: "#FFFFFF" }}>
          Đèn phòng khách hiện đại
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#FFFFFF" }}>
          17.500.000
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <LocationOutlineIcon fill="#fff" width={10} height={10} />
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#FFFFFF" }}>
              Nguyễn Quý Đức, Thanh Xuân, Hà Nội
            </Text>
          </View>
          <Pagination
            carouselRef={carouselRef}
            activeDotIndex={currentIndex}
            dotsLength={data?.length}
            inactiveDotColor="#B3B9C4"
            inactiveDotOpacity={1}
            dotColor="#B3B9C4"
            activeOpacity={1}
            dotStyle={{
              width: 16,
              height: 4,
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
            }}
            inactiveDotStyle={{
              width: 4,
              height: 4,
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
            }}
            dotContainerStyle={{
              padding: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
            containerStyle={{
              gap: 4,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const BannerCarousel = () => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top || 24 }}>
      <CarouselList />
      <TouchableOpacity
        style={{
          height: 28,
          width: 28,
          backgroundColor: "#88888880",
          borderRadius: 14,
          position: "absolute",
          left: 28,
          top: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => goBack()}
      >
        <BackIcon fill="white" width={16} height={16} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#00000080",
          paddingVertical: 2,
          paddingHorizontal: 6,
          borderRadius: 10,
          position: "absolute",
          right: 28,
          top: 8,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "600", color: "#fff" }}>
          Đã Pass
        </Text>
      </View>
    </View>
  );
};

export default BannerCarousel;
