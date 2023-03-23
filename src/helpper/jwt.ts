import jwt_decode from "jwt-decode";
import { Authenticate } from "src/enum/AuthorEnum";
import { getCookie } from "./cookie";

export const getUsername = () => {
  const token = getCookie(Authenticate.AUTH);
  const decode: any = token && jwt_decode(token);
  return decode?.preferred_username || "";
};

export const getTransId = (token?: string) => {
  const decode: any = token && jwt_decode(token);
  return JSON.parse(decode.one_account)?.transaction_id;
};