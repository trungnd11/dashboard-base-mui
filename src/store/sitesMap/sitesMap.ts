import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "src/api/authApi";
import { EIM } from "src/enum/AuthorEnum";
import { convertPrivileges } from "src/helpper/siteMap";
import { type RootState } from "..";

interface InitState {
  loadding: boolean
  sitesMap: any[]
  privileges: any[]
};

const initialState: InitState = {
  loadding: true,
  sitesMap: [],
  privileges: [],
};

export const getSitesMap = createAsyncThunk("eim/getSitesMap", async () => {
  const response = await AuthApi.getSiteMap({ appCode: EIM.APP_CODE_EIM });
  return response;
});

const SitesMap = createSlice({
  name: "sitesMap",
  initialState,
  reducers: {
    clearSitesMap: (state) => {
      state.loadding = true;
      state.sitesMap = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSitesMap.fulfilled, (state, action) => {
      state.loadding = false;
      state.sitesMap = action.payload?.data?.sitemaps;
      state.privileges = convertPrivileges(action.payload?.data?.sitemaps[0]);
    });
  }
});

export const getSitesMapStore = (state: RootState) => state.sitesMap;
export const { clearSitesMap } = SitesMap.actions;
export default SitesMap.reducer;