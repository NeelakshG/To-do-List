import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./index.css";
import "./fanta.css";
//access the document, then inject the app into this div
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
