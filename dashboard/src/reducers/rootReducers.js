import { combineReducers } from "redux";
import uiReducer from "./uiReducers";
import notificationReducer from './notificationReducer';
import courseReducer from "./courseReducer";
import React from "react";


const rootReducers = combineReducers({
    courses: courseReducer,
    ui: uiReducer,
    notifications: notificationReducer
})

export default rootReducers;