import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {}
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
