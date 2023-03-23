import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ThemeProvider } from "@mui/material";
import "./index.scss";
import App from "./App";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import AxiosInterceptor from "./config/AxiosInterceptor";
import { clearAuthentication } from "src/store/author/author";

const action = bindActionCreators({ clearAuthentication }, store.dispatch);
AxiosInterceptor(() => {
  action.clearAuthentication();
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
