import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL =
  "https://decafapi20250314154810-dxfjeuavegfgb0du.southeastasia-01.azurewebsites.net";
let token: string = "";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
export const setApiToken = (accessToken: string) => {
  token = accessToken;
};
export const getApiToken = () => token;
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig): any {
    const url = config.url;
    if (config.headers === undefined) {
      config.headers = {
        "Content-Type": "application/json",
      };
    }
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    console.log(
      BASE_URL,
      config.method?.toUpperCase(),
      url,
      `\nbody: ${JSON.stringify(config?.data)}`,
      `\nparams: ${JSON.stringify(config?.params)}`
    );

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response?.data;
  },
  async function (error: AxiosError) {
    // @ts-ignore
    console.log(">>>>>>>error", error);

    return Promise.reject(error?.response?.data);
  }
);
export default axiosClient;
