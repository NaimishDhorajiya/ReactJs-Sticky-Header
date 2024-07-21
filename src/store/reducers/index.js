import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counterReducer";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
