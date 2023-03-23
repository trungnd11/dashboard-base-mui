import axios from "axios";
import { authRefeshUrl, authUrl, roleUrl } from "./baseUrl";

const AuthApi = {
  login(info: URLSearchParams) {
    return axios.post(authUrl, info);
  },
  refreshToken(info: URLSearchParams) {
    return axios.post(authRefeshUrl, info);
  },
  getSiteMap(props: { appCode: string }) {
    return axios.get(`${roleUrl}/sitemaps-for-role-prl/${props.appCode}&ACCESS`, {
      params: null,
    });
  },
};

export default AuthApi;