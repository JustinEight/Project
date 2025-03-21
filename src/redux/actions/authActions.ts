import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  AuthActionTypes,
} from '../types';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../reducers';
import {Action} from 'redux';
import {User, AppData} from '../../types';

// Define ThunkResult type for async actions
type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action>;

// Hành động Login
export const login = (email: string, password: string): ThunkResult<void> => {
  return async dispatch => {
    dispatch({type: LOGIN_REQUEST});

    try {
      // Mô phỏng gọi API đăng nhập
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mô phỏng dữ liệu trả về từ API
      const userData: User = {
        id: '1',
        name: 'Người Dùng Demo',
        email: email,
        role: 'user',
      };

      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error instanceof Error ? error.message : 'Đăng nhập thất bại',
      });
    }
  };
};

// Hành động Logout
export const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
  };
};

// Hành động Fetch Data (sử dụng Redux Thunk)
export const fetchData = (): ThunkResult<void> => {
  return async dispatch => {
    dispatch({type: FETCH_DATA_REQUEST});

    try {
      // Mô phỏng API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mô phỏng dữ liệu
      const mockData: AppData = {
        items: [
          {id: 1, name: 'Item 1'},
          {id: 2, name: 'Item 2'},
          {id: 3, name: 'Item 3'},
        ],
        timestamp: new Date().toISOString(),
      };

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: mockData,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload:
          error instanceof Error ? error.message : 'Không thể tải dữ liệu',
      });
    }
  };
};
