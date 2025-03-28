import dummyData from '@assets/dummyData';
import Image from '@components/Image';
import Text from '@components/Text';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

const menu = Array(10).fill(0);

const CategoryMenuItem = ({item}) => {
  return (
    <TouchableOpacity style={{width: 125, height: 90, borderRadius: 10}}>
      <Image
        source={dummyData.categoryMenu}
        style={{height: '100%', width: '100%', borderRadius: 10}}
      />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#D9D9D94D',
          borderRadius: 5,
          position: 'absolute',
          bottom: 6,
          marginHorizontal: 4,
          width: 125 - 4 * 2,
          justifyContent: 'space-around',
          padding: 4,
        }}>
        <Text style={{fontSize: 13, color: '#fff'}}>1km</Text>
        <Text style={{fontSize: 13, color: '#fff'}}> 10.000</Text>
      </View>
    </TouchableOpacity>
  );
};
const CategoryMenu1 = () => {
  return (
    <FlatList
      ListHeaderComponent={
        <View
          style={{
            marginLeft: 16,
            justifyContent: 'center',
            height: 90,
            width: 23,
            marginRight: -8,
          }}>
          <Text
            style={{
              color: '#000',
              transform: [{rotateZ: '-90deg'}],
              width: 90,
              height: 23,
              flex: 1,
              textAlign: 'center',
            }}>
            HOT!!!
          </Text>
        </View>
      }
      horizontal
      data={menu}
      renderItem={CategoryMenuItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{gap: 8}}
      style={{marginTop: 12}}
    />
  );
};
export default CategoryMenu1;
