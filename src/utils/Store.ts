import AsyncStorage from '@react-native-async-storage/async-storage';
import { setApiToken } from '@services/app/axiosClient';
import {isEmpty} from 'lodash';

export function parseJson(data: any) {
  let result = data;
  try {
    result = JSON.parse(data);
  } catch (error) {}
  return result;
}

export default class Storage {
  static key = {
    language: 'language',
    profile: 'profile',
    authToken: 'authToken',
  };

  static setData = async (key: string, value: any) => {
    try {
      const valueStorage =
        typeof value === 'object' ? JSON.stringify(value) : value;
      await AsyncStorage.setItem(key, valueStorage);
    } catch (e) {}
  };

  static getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        let storeVallue;
        try {
          storeVallue = JSON.parse(value);
        } catch (error) {
          storeVallue = value;
        }
        return storeVallue;
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  static getMultiData = async (key: string[]) => {
    try {
      const values = await AsyncStorage.multiGet(key);
      if (!isEmpty(values)) {
        return values.map(item => parseJson(item[1]));
      }
      return [];
    } catch (e) {
      return [];
    }
  };

  static removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {}
  };

  static multiRemoveData = async (key: string[]) => {
    try {
      await AsyncStorage.multiRemove(key);
    } catch (e) {}
  };

  static clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      setApiToken('');
    } catch (e) {}
  };
}
