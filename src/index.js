// React
import ReactDOM from "react-dom";

// App
import App from "./App";

// Context
import { ThemeContextProvider } from "./context/ThemeContext";

// Css
import "./styles/style.css";
import "./styles/header.css";
import "./styles/start.css";
import "./styles/footer.css";

// DOM
ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
