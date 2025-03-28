import axiosClient from "@services/app/axiosClient";

class AuthenticationApi {
  private static URL = {
    LOGIN: "/api/authen/login",
    VERIFY_OTP: "/api/authen/verify-otp",
    RESEND_OTP: "/api/authen/resend-otp",
    FOGOT_PASSWORD: "/api/authen/forgot-password",
    RESET_PASSWORD: "api/authen/reset-password",
    REGISTER: "/api/authen/register",
    GET_PROFILE: "/api/user/profile",
  };

  static login = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.LOGIN, payload);
  };
  static verifyOtp = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.VERIFY_OTP, payload);
  };
  static resendOtp = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.RESEND_OTP, payload);
  };
  static forgotPassword = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.FOGOT_PASSWORD, payload);
  };
  static resetPassword = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.RESET_PASSWORD, payload);
  };
  static register = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.REGISTER, payload);
  };
  static getProfile = (payload: any): Promise<any> => {
    return axiosClient.post(this.URL.GET_PROFILE, payload);
  };
}

export default AuthenticationApi;
