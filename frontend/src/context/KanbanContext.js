import React, { createContext, useState, useEffect } from "react";
import { getColumns, getTasks } from "../api/kanbanApi";

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchKanbanData = async () => {
      try {
        const columnsData = await getColumns();
        const tasksData = await getTasks();
        setColumns(columnsData);
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching Kanban data:", error);
      }
    };

    fetchKanbanData();
  }, []);

  const moveTask = (taskId, newColumnId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, columnId: newColumnId } : task
      )
    );
  };

  return (
    <KanbanContext.Provider value={{ columns, tasks, moveTask }}>
      {children}
    </KanbanContext.Provider>
  );
};
