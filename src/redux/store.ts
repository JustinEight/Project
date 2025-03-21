import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Tạo Redux store với middleware Redux Thunk
export const store = createStore(rootReducer, applyMiddleware(thunk));
