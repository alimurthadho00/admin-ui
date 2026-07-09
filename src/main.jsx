import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);