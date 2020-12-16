// React
import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// Context
import { AppContextProvider } from "./context/AppContext";

// Css
import "./styles/style.css";

// DOM
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
