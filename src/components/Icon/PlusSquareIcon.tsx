import React from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const PlusSquareIcon = (props: {size?: number; fill?: string | undefined}) => {
  const {size = 20, fill} = props;
  // Original size of the SVG viewbox
  const originalWidth = 20;
  const originalHeight = 20;
  const aspectRatio = originalHeight / originalWidth;
  return (
    <View style={{width: size, aspectRatio}}>
      <Svg width="20" height="21" viewBox="0 0 20 21" fill="transparent">
        <Path
          d="M10 7.16667V13.8333M6.66667 10.5H13.3333M4.16667 3H15.8333C16.7538 3 17.5 3.74619 17.5 4.66667V16.3333C17.5 17.2538 16.7538 18 15.8333 18H4.16667C3.24619 18 2.5 17.2538 2.5 16.3333V4.66667C2.5 3.74619 3.24619 3 4.16667 3Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default PlusSquareIcon;
