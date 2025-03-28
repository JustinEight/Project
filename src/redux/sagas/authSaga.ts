import * as Actions from "@redux/actions/authActions";
import AuthenticationApi from "@redux/apis/AuthenticationApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";

function* loginSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.login,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error: any) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* registerSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.register,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* verifyOtpSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.verifyOtp,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* resendOtpSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.resendOtp,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* resetPasswordSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.resetPassword,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* forgotPasswordSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.forgotPassword,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
function* getUserProfileSaga(action: PayloadAction<any>) {
  try {
    const response: any = yield call(
      AuthenticationApi.getProfile,
      action.payload?.data
    );

    action.payload?.callback({ data: response });
  } catch (error) {
    action.payload?.callback({ error });
  } finally {
  }
}
export default function* () {
  yield takeLatest(Actions.LOGIN, loginSaga);
  yield takeLatest(Actions.REGISTER, registerSaga);
  yield takeLatest(Actions.RESEND_OTP, resendOtpSaga);
  yield takeLatest(Actions.VERIFY_OTP, verifyOtpSaga);
  yield takeLatest(Actions.RESET_PASSWORD, resetPasswordSaga);
  yield takeLatest(Actions.FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(Actions.GET_USER_PROFILE, getUserProfileSaga);
}
