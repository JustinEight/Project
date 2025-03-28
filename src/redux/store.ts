import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import {
  asyncDispatchMiddleware,
  asyncFunctionMiddleware,
} from "./middleware/asyncMiddleware";

const sagaMiddleware = createSagaMiddleware();

const middlewareArray = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(asyncDispatchMiddleware, asyncFunctionMiddleware, sagaMiddleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewareArray,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
