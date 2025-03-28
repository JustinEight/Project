import { Action, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import Storage from "@utils/Store";
import { reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import { resetLoginAction } from "@redux/actions/authActions";
const appCombineReducer = combineReducers({
  authen: authReducer,
});

const rootReducer = (
  state: ReturnType<typeof appCombineReducer> | undefined,
  action: Action
): ReturnType<typeof appCombineReducer> => {
  if (resetLoginAction.match(action)) {
    Storage.clearAllData();
    reset(StackName.AuthenticationStack);
    return appCombineReducer(undefined, action);
  }
  return appCombineReducer(state, action);
};

export default rootReducer;
