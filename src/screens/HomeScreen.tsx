import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../redux/actions/authActions';
import {RootState} from '../redux/reducers';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList} from '../navigation/types';

type HomeScreenProps = DrawerScreenProps<DrawerParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state: RootState) => state.auth);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text style={styles.subtitle}>
        Chào mừng bạn đến với ứng dụng demo TypeScript
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Tải dữ liệu với Redux Thunk"
          onPress={handleFetchData}
          color="#f4511e"
        />
      </View>

      {loading ? (
        <Text>Đang tải...</Text>
      ) : (
        <Text style={styles.dataText}>
          {data ? JSON.stringify(data) : 'Chưa có dữ liệu'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    width: '100%',
  },
  dataText: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default HomeScreen;
