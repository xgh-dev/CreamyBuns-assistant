import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ClientesContextProvider from "./components/contextos/ClientesContext.jsx";

import RecetarioContextProvider from "./components/contextos/RecetarioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClientesContextProvider>
      <RecetarioContextProvider>
        <App />
      </RecetarioContextProvider>
    </ClientesContextProvider>
  </StrictMode>
);
