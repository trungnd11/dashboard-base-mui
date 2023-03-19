import { createSlice } from "@reduxjs/toolkit";
import { Authenticate } from "src/enum/AuthorEnum";
import { deleteCookie, setCookie } from "src/helpper/cookie";
import { type UserModel } from "src/model/Usermodel";
import { type RootState } from "..";

const User: UserModel = {
  username: "admin",
  password: "123456"
};

export interface InitialStateAuthor {
  isAuthorized: boolean
  username: string
  isLoading: boolean
}

const initialState: InitialStateAuthor = {
  isAuthorized: false,
  username: "",
  isLoading: false,
};

const Authorized = createSlice({
  name: "authorized",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = true;
      if (
        action.payload.username === User.username &&
        action.payload.password === User.password
      ) {
        state.isLoading = false;
        state.isAuthorized = true;
        state.username = action.payload.username;
        setCookie(Authenticate.AUTH, action.payload.username, 1);
        return;
      }
      state.isLoading = false;
    },
    getLogin: (state, action) => {
      state.isAuthorized = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.username = "";
      deleteCookie(Authenticate.AUTH);
    },
  },
});

export const getAuthorStore = (state: RootState) => state.authorized;
export const { login, logout, getLogin } = Authorized.actions;
export default Authorized.reducer;
