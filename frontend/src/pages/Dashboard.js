import React from "react";
import KanbanBoard from "../components/Kanban/KanbanBoard";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Kanban Dashboard</h1>
      <KanbanBoard />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
};

export default Dashboard;
