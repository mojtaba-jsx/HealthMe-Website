import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // تغییر از BrowserRouter به HashRouter
import App from "./App.jsx";
import "./custom.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
