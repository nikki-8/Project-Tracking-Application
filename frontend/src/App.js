import React from "react";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { KanbanProvider } from "./context/KanbanContext";
import "./styles/Global.css";

const App = () => {
  return (
    <AuthProvider>
      <KanbanProvider>
        <AppRoutes />
      </KanbanProvider>
    </AuthProvider>
  );
};

export default App;
