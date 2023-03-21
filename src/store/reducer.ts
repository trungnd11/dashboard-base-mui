import { combineReducers } from "@reduxjs/toolkit";
import authorized from "./author/author";
import siderBar from "./siderBar/siderBar";

export const rootReducer = combineReducers({
  authorized,
  siderBar
});
