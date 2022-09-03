import React from "react";
import { createRoot } from "react-dom/client";

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { stepReducer } from "./redux/reducers";
import App from "./App.jsx";
import "./assets/App.css";

const logger = createLogger();
const rootReducers = combineReducers({ stepReducer });
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
