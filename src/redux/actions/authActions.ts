import {
  ApiPayload,
  GetUserProfilePayload,
  LoginPayload,
  RegisterPayload,
  ResendOTPPayload,
  ResetPasswordPayload,
  VerifyOTPPayload,
} from "@redux/type";
import { createAction } from "@reduxjs/toolkit";

// LOGIN //
export const LOGIN = "LOGIN";
const loginRequest = createAction<{ data: LoginPayload } & ApiPayload>(LOGIN);

// SIGN UP //
export const REGISTER = "REGISTER";
const signUpAction = createAction<{ data: RegisterPayload } & ApiPayload>(
  REGISTER
);

// RESEND_OTP //
export const RESEND_OTP = "RESEND_OTP";
const resendOtpAction = createAction<{ data: ResendOTPPayload } & ApiPayload>(
  RESEND_OTP
);

// VERIFY_OTP //
export const VERIFY_OTP = "VERIFY_OTP";
const verifyOtpAction = createAction<{ data: ResendOTPPayload } & ApiPayload>(
  VERIFY_OTP
);

// RESET_PASSWORD //
export const RESET_PASSWORD = "RESET_PASSWORD";
const resetPasswordAction = createAction<
  { data: ResetPasswordPayload } & ApiPayload
>(RESET_PASSWORD);

// change password
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
const forgotPasswordAction = createAction<
  { data: ResendOTPPayload } & ApiPayload
>(FORGOT_PASSWORD);

export const GET_USER_PROFILE = "GET_USER_PROFILE";
const getUserProfileAction = createAction<
  { data: GetUserProfilePayload } & ApiPayload
>(GET_USER_PROFILE);

export const SET_USER_PROFILE = "SET_USER_PROFILE";
const setUserProfileAction = createAction<any>(SET_USER_PROFILE);

export const RESET_LOGIN = "RESET_LOGIN";
const resetLoginAction = createAction(RESET_LOGIN);
export {
  loginRequest,
  signUpAction,
  resendOtpAction,
  verifyOtpAction,
  forgotPasswordAction,
  resetPasswordAction,
  getUserProfileAction,
  setUserProfileAction,
  resetLoginAction,
};
