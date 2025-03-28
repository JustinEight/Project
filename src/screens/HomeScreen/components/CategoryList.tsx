import React from 'react';
import {FlatList, View} from 'react-native';
import Footer from '../components/Footer';
import CategoryItem1 from './CategoryItem1';
import CategoryMenu from './CategoryMenu';
import CategoryItem2 from './CategoryItem2';

const data = Array(15).fill(0);

const CategoryList = () => {
  return (
    <FlatList
      data={data}
      renderItem={CategoryItem2}
      keyExtractor={(item, index) => index.toString()}
    //   numColumns={2}
    //   columnWrapperStyle={{gap: 16}}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      ListFooterComponent={Footer}
      ListHeaderComponent={<CategoryMenu />}
    />
  );
};

export default CategoryList;
