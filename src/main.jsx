import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./custom.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/HealthMe-Website">
    <App />
  </BrowserRouter>
);
