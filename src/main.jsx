import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Ti from "./ti.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/ti" element={<Ti />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
