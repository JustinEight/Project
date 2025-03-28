import icons from "@assets/icons";
import Image from "@components/Image";
import React from "react";
import { View, ViewStyle } from "react-native";

const FavoriteRating = ({
  rating = 0,
  style = {},
}: {
  rating?: number;
  style?: ViewStyle;
}) => {
  const ratingArr = Array(5).fill(0);
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      {ratingArr?.map((item, index) => (
        <Image
          source={index < rating ? icons.heartLikeIcon : icons.heartUnlikeIcon}
          style={{ height: 25, width: 25, marginLeft: index !== 0 ? -5 : 0 }}
        />
      ))}
    </View>
  );
};
export default FavoriteRating;
