import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalStyles"; // O arquivo que acabamos de criar
import App from "./pages/tabela/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
