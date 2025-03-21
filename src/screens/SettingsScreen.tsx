import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList} from '../navigation/type';

type SettingsScreenProps = DrawerScreenProps<DrawerParamList, 'Settings'>;

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] =
    useState<boolean>(true);
  const [isLocationEnabled, setIsLocationEnabled] = useState<boolean>(false);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () =>
    setIsNotificationsEnabled(previousState => !previousState);
  const toggleLocation = () =>
    setIsLocationEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Chế độ tối</Text>
        <Switch
          trackColor={{false: '#767577', true: '#f4511e'}}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Thông báo</Text>
        <Switch
          trackColor={{false: '#767577', true: '#f4511e'}}
          thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Vị trí</Text>
        <Switch
          trackColor={{false: '#767577', true: '#f4511e'}}
          thumbColor={isLocationEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleLocation}
          value={isLocationEnabled}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lưu thay đổi</Text>
      </TouchableOpacity>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
