import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "src/api/authApi";
import { Authenticate, EIM } from "src/enum/AuthorEnum";
import { deleteCookie, setCookie } from "src/helpper/cookie";
import { getTransId } from "src/helpper/jwt";
import { removeLocalStorage, setLocalStorage } from "src/helpper/localStorage";
import { type UserModel } from "src/model/pages/LoginModel";
import { type RootState } from "..";
export interface InitialStateAuthor {
  loadding: boolean
  username: string
  accessToken: string
  refreshToken: string
  isAuthentication: boolean
};

const initialState: InitialStateAuthor = {
  username: "",
  accessToken: "",
  refreshToken: "",
  isAuthentication: false,
  loadding: false,
};

export const clearAuthentication = () => (dispatch: any) => {
  dispatch(logout());
};

export const loginEim = createAsyncThunk(
  "authentication/eim",
  async (user: UserModel) => {
    const params = new URLSearchParams();
    params.append("client_id", EIM.CLIENT_ID);
    params.append("username", user.username);
    params.append("password", user.password);
    params.append("grant_type", EIM.PASSWORD);
    params.append("client_secret", EIM.CLIENT_SECRET);
    params.append("app_code", EIM.APP_CODE);
    params.append("app_code_eim", EIM.APP_CODE_EIM);

    const response = await AuthApi.login(params);
    return response;
  }
);

const Authorized = createSlice({
  name: "authorized",
  initialState,
  reducers: {
    getLogin: (state, _action) => {
      state.isAuthentication = true;
    },
    logout: (state) => {
      state.isAuthentication = false;
      state.username = "";
      state.accessToken = "";
      state.refreshToken = "";
      deleteCookie(Authenticate.AUTH);
      removeLocalStorage(Authenticate.REFRESH_TOKEN);
      removeLocalStorage(EIM.SITE_MAP);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEim.pending, (state, _action) => {
        state.loadding = true;
      })
      .addCase(loginEim.fulfilled, (state, action) => {
        if (!action.payload?.data) {
          state.loadding = false;
          state.isAuthentication = false;
          return;
        }
        state.loadding = false;
        state.isAuthentication = true;
        setCookie(Authenticate.AUTH, action.payload.data.token, 0.02);
        setLocalStorage({ key: Authenticate.REFRESH_TOKEN, data: action.payload.data.refreshToken });
        setLocalStorage({
          key: EIM.SITE_MAP,
          data: getTransId(action.payload.data.token),
        });
      })
      .addCase(loginEim.rejected, (state, action) => {
        state.loadding = false;
        state.isAuthentication = false;
      });
  },
});

export const getAuthorStore = (state: RootState) => state.authorized;
export const { logout, getLogin } = Authorized.actions;
export default Authorized.reducer;
