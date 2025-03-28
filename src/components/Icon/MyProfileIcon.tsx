import React from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const MyProfileIcon = (props: {size?: number; fill?: string | undefined}) => {
  const {size = 20, fill} = props;
  // Original size of the SVG viewbox
  const originalWidth = 20;
  const originalHeight = 20;
  const aspectRatio = originalHeight / originalWidth;
  return (
    <View style={{width: size, aspectRatio}}>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="transparent">
        <G clip-path="url(#clip0_332_2313)">
          <Path
            d="M15 16.6666C15 15.3405 14.4732 14.0688 13.5355 13.1311C12.5978 12.1934 11.326 11.6666 9.99996 11.6666M9.99996 11.6666C8.67388 11.6666 7.40211 12.1934 6.46443 13.1311C5.52674 14.0688 4.99996 15.3405 4.99996 16.6666M9.99996 11.6666C11.8409 11.6666 13.3333 10.1742 13.3333 8.33329C13.3333 6.49234 11.8409 4.99996 9.99996 4.99996C8.15901 4.99996 6.66663 6.49234 6.66663 8.33329C6.66663 10.1742 8.15901 11.6666 9.99996 11.6666ZM18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
            stroke={fill}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_332_2313">
            <Rect width="20" height="20" fill={fill} />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default MyProfileIcon;
