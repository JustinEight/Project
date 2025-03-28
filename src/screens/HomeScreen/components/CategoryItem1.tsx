import dummyData from '@assets/dummyData';
import icons from '@assets/icons';
import {screenWidth} from '@assets/size';
import Image from '@components/Image';
import Text from '@components/Text';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
const ITEM_WIDTH = screenWidth / 2 - 16 - 8;
const CategoryItem1 = ({item, index}) => {
  return (
    <TouchableOpacity
      style={{
        width: ITEM_WIDTH,
        backgroundColor: 'white',
        borderRadius: 12,
        marginLeft: index % 2 === 0 ? 16 : 0,
      }}>
      <Image
        source={dummyData.category1}
        style={{
          width: ITEM_WIDTH - 6 * 2,
          height: ITEM_WIDTH,
          margin: 6,
          borderRadius: 10,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            marginHorizontal: 10,
            color: '#000000',
          }}>
          Cho thuê nguyên căn villa kiểu Pháp cổ
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
            marginHorizontal: 16,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View style={{flexDirection: 'row', gap: 2}}>
              <Text style={{fontSize: 8}}>30</Text>
              <Image
                source={icons.coffeBeanIcon}
                style={{width: 10, height: 10}}
              />
            </View>
            <View style={{flexDirection: 'row', gap: 2}}>
              <Text style={{fontSize: 8}}>30</Text>
              <Image
                source={icons.messageIcon}
                style={{width: 10, height: 10}}
              />
            </View>
          </View>
          <Image source={icons.coffeBeanIcon} style={{width: 20, height: 20}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem1;
