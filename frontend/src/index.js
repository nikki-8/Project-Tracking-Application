import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { KanbanProvider } from "./context/KanbanContext";
import "./styles/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <KanbanProvider>
        <AppRoutes />
      </KanbanProvider>
    </AuthProvider>
  </React.StrictMode>
);
