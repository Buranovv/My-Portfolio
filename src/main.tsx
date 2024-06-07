import React from "react";
import ReactDOM from "react-dom/client";

import ThemeContextProvider from "./components/context/theme/ThemeContext";
import App from "./App";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
