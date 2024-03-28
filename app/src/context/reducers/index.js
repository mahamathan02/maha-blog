import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

// rootreducer -> file

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
