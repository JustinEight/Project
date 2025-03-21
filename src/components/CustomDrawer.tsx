import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/actions/authActions';
import {RootState} from '../redux/reducers';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const dispatch = useDispatch();
  const {user, isAuthenticated} = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}>
      <View style={styles.userSection}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/80',
          }}
          style={styles.userImage}
        />
        <Text style={styles.userName}>
          {isAuthenticated && user ? user.name : 'Khách'}
        </Text>
        <Text style={styles.userEmail}>
          {isAuthenticated && user ? user.email : 'Đăng nhập để tiếp tục'}
        </Text>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.bottomSection}>
        {isAuthenticated ? (
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>
        )}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userSection: {
    padding: 20,
    backgroundColor: '#f4511e',
    marginBottom: 10,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    color: 'white',
    fontSize: 14,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutButton: {
    paddingVertical: 10,
  },
  logoutText: {
    fontSize: 15,
    color: 'red',
  },
  loginButton: {
    paddingVertical: 10,
  },
  loginText: {
    fontSize: 15,
    color: '#f4511e',
  },
});

export default CustomDrawer;
