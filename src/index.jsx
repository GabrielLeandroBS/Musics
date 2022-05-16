import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styled";
import { GlobalStyleVendors } from "./vendors/ReactModal/styled";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <GlobalStyleVendors />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
