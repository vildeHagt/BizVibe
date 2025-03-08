import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainApp from "./MainApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
