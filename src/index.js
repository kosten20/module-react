import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
}
body {
  background: #161516;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
