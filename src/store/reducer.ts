import { combineReducers } from "@reduxjs/toolkit";
import authorized from "./author/author";

export const rootReducer = combineReducers({
  authorized,
});
