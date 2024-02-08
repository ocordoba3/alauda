import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import light from "./styles/themes/light.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
