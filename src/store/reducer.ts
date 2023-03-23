import { combineReducers } from "@reduxjs/toolkit";
import authorized from "./author/author";
import siderBar from "./siderBar/siderBar";
import modeTheme from "./mode/modeTheme";
import sitesMap from "./sitesMap/sitesMap";

export const rootReducer = combineReducers({
  authorized,
  siderBar,
  modeTheme,
  sitesMap
});
