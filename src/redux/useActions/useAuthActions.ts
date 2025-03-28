import {
  forgotPasswordAction,
  getUserProfileAction,
  loginRequest,
  resendOtpAction,
  resetLoginAction,
  resetPasswordAction,
  signUpAction,
  verifyOtpAction,
} from "@redux/actions/authActions";
import {
  ApiPayload,
  GetUserProfilePayload,
  LoginPayload,
  RegisterPayload,
  ResendOTPPayload,
  ResetPasswordPayload,
  VerifyOTPPayload,
} from "@redux/type";
import { useDispatch } from "react-redux";

const useAuthActions = () => {
  const dispatch = useDispatch();
  const login = (payload: { data: LoginPayload } & ApiPayload) => {
    dispatch(loginRequest(payload));
  };
  const register = (payload: { data: RegisterPayload } & ApiPayload) => {
    dispatch(signUpAction(payload));
  };
  const verifyOtp = (payload: { data: VerifyOTPPayload } & ApiPayload) => {
    dispatch(verifyOtpAction(payload));
  };
  const resendOtp = (payload: { data: ResendOTPPayload } & ApiPayload) => {
    dispatch(resendOtpAction(payload));
  };
  const resetPassword = (
    payload: { data: ResetPasswordPayload } & ApiPayload
  ) => {
    dispatch(resetPasswordAction(payload));
  };
  const forgotPassword = (payload: { data: ResendOTPPayload } & ApiPayload) => {
    dispatch(forgotPasswordAction(payload));
  };
  const getUserProfile = (
    payload: { data: GetUserProfilePayload } & ApiPayload
  ) => {
    dispatch(getUserProfileAction(payload));
  };
  const logout = () => {
    dispatch(resetLoginAction());
  };
  return {
    login,
    register,
    verifyOtp,
    resendOtp,
    resetPassword,
    forgotPassword,
    getUserProfile,
    logout,
  };
};

export default useAuthActions;
