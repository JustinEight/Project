interface FetchDataSuccessAction {
  // type: typeof FETCH_DATA_SUCCESS;
  // payload: AppData;
}

interface FetchDataFailureAction {
  // type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type AuthActionTypes = {};

export interface AuthState {
  // user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  // data: AppData | null;
}

export type LoginPayload = {
  username: string;
  password: string;
  isRememberMe: boolean;
};

export type VerifyOTPPayload = {
  username: string;
  otp: string;
};

export type ResendOTPPayload = {
  username: string;
};

export type ResetPasswordPayload = {
  username: string;
  otp: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type ApiPayload = {
  callback?: (data: any) => void;
};

export type GetUserProfilePayload = {
  userId: string;
};
