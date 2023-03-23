import axios, { type AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import AuthApi from "src/api/authApi";
import { authUrl } from "src/api/baseUrl";
import { Authenticate, EIM } from "src/enum/AuthorEnum";
import { getCookie, setCookie } from "src/helpper/cookie";
import { getLocalStorage, setLocalStorage } from "src/helpper/localStorage";

let isRefreshing = false;
let failedQueue: Array<Promise<AxiosResponse> | any> = [];

const processQueue = (token: string, logout: () => void) => {
  failedQueue.forEach(promise => {
    if (token) {
      promise.resolve(
        axios(
          Object.assign({}, promise.config, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
        )
      );
    } else {
      logout();
    }
  });
  failedQueue = [];
};

const refreshToken = async (error: any, logout: () => void) => {
  isRefreshing = true;

  const asscessToken = await refreshTokenAuth2();
  if (!asscessToken) {
    logout();
    return;
  };
  if (asscessToken) {
    error.config.headers = {
      Authorization: "Bearer " + asscessToken,
    };
    processQueue(error, asscessToken);
    return error.config;
  }
};

const refreshTokenAuth2 = async () => {
  const refreshTokenAuth2 = getLocalStorage(Authenticate.REFRESH_TOKEN);
  if (!refreshTokenAuth2) {
    isRefreshing = false;
    failedQueue = [];
    return null;
  }
  if (refreshTokenAuth2) {
    const params = new URLSearchParams();
    params.append("client_id", "newClient");
    params.append("grant_type", "refresh_token");
    params.append("client_secret", "e75cPWjZ2UBFNVo2tdyvxwDTERiO854c");
    params.append("refresh_token", refreshTokenAuth2);
    try {
      const response = await AuthApi.refreshToken(params);
      setCookie(Authenticate.AUTH, response.data.access_token, 0.02);
      setLocalStorage({ key: Authenticate.REFRESH_TOKEN, data: response.data.refresh_token });
      return response.data.access_token;
    } catch (error) {
      return null;
    }
  }
};

export default function AxiosInterceptor(onUnauthenticated: () => void) {
  const onRequestSuccess = (config: AxiosRequestConfig): any => {
    const auth = getCookie(Authenticate.AUTH);
    const sitesMap = getLocalStorage(EIM.SITE_MAP);
    const xApiKey = "dc4c9u21-cbb5-4k9e-b141-e002d7u3d944";
    if (config?.url === authUrl) {
      config.headers = {
        "device-id": "",
        "x-api-key": xApiKey
      };
      return config;
    }
    if (config?.url?.includes("sitemaps-for-role-prl")) {
      if (sitesMap && auth) {
        config.headers = {
          TRANS_ID: sitesMap,
        };
        return config;
      }
    }
    if (auth) {
      config.headers = {
        Authorization: "Bearer " + auth,
      };
      return config;
    }
    return config;
  };

  const onResponseSuccess = (response: AxiosResponse) => {
    return response.data;
  };
  const onResponseError = (error: AxiosError) => {
    if (
      error.response?.status !== 401 ?? error.config?.url?.includes(authUrl)
    ) {
      const errMessage = error.response?.data ?? error?.response ?? error;
      return Promise.reject(errMessage);
    }
    else if (error.response?.status === 401 && isRefreshing) {
      failedQueue.push(error);
    }
    return refreshToken(error, onUnauthenticated);
  };

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}
