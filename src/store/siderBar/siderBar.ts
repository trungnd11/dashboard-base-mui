import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../index";

export const initialState = {
  toggle: false,
  closeMenu: false
};

const SiderBar = createSlice({
  name: "siderBar",
  initialState,
  reducers: {
    toggleSider: (state) => {
      state.toggle = !state.toggle;
    },
    onCloseMenu: (state) => {
      state.closeMenu = !state.closeMenu;
    }
  },
});

export const getSiderBarStore = (state: RootState) => state.siderBar;
export const { toggleSider, onCloseMenu } = SiderBar.actions;
export default SiderBar.reducer;
