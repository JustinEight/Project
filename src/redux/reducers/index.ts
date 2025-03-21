import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Thêm các reducer khác nếu cần
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
