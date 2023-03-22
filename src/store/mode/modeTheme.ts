import { createSlice } from "@reduxjs/toolkit";
import { ModeThemeEnum } from "src/enum/modeThemeEnum";
import { setLocalStorage } from "src/helpper/localStorage";
import { type RootState } from "..";

export interface InitialStateAuthor {
  mode: "light" | "dark"
}

const initialState: InitialStateAuthor = {
  mode: "light"
};

const ModeTheme = createSlice({
  name: "modeTheme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode === "light" ? state.mode = "dark" : state.mode = "light";
      setLocalStorage({ key: ModeThemeEnum.CODE, data: state.mode === "light" ? "dark" : "light" });
    }
  }
});

export const getModeThemeStore = (state: RootState) => state.modeTheme;
export const { toggleMode } = ModeTheme.actions;
export default ModeTheme.reducer;