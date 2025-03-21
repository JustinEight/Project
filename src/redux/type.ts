interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: AppData;
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  data: AppData | null;
}
