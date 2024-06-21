import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducers";
import { Map } from "immutable";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/rootReducers";

// const store = configureStore(uiReducer, Map(initialState), applyMiddleware(thunk));

// Map(initialState), applyMiddleware(thunk));
const preloadedState = { ui: Map(initialState) };

const store = configureStore({
  reducer:rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  preloadedState,
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);