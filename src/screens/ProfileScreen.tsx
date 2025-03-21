import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList} from '../navigation/type';

type ProfileScreenProps = DrawerScreenProps<DrawerParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {user, isAuthenticated} = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hồ sơ người dùng</Text>

      {isAuthenticated && user ? (
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Tên:</Text>
          <Text style={styles.value}>{user.name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>Vai trò:</Text>
          <Text style={styles.value}>{user.role || 'Người dùng'}</Text>
        </View>
      ) : (
        <Text style={styles.notLoggedIn}>
          Vui lòng đăng nhập để xem thông tin hồ sơ
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  notLoggedIn: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default ProfileScreen;
