import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NftProvider } from "./context/NftContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <NftProvider>
        <App />
      </NftProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
