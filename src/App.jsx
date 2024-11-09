import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      <div>{router}</div>
    </>
  );
}

export default App;
