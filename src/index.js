// React
import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// Context
import { AppContextProvider } from "./context/AppContext";

// Css
import "./styles/style.css";
import "./styles/tablet.css";
import "./styles/desktop.css";

// DOM
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
