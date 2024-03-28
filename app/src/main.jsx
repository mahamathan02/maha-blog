import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./containers";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
