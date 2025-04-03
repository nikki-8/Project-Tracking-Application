import React, { useEffect, useState } from "react";
import Column from "./Column";
import client, { sendTaskUpdate } from "../websocket";
import { getColumns, getTasks } from "../api/kanbanApi";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const columnsData = await getColumns();
        const tasksData = await getTasks();
        setColumns(columnsData);
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching Kanban data:", error);
      }
    };

    fetchData();

    client.onConnect = () => {
      client.subscribe("/topic/tasks", (message) => {
        const updatedTask = JSON.parse(message.body);
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      });
    };

    client.activate();
  }, []);

  const moveTask = async (taskId, newColumnId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, columnId: newColumnId } : task
      )
    );

    sendTaskUpdate({ id: taskId, columnId: newColumnId });

    try {
      await fetch(`/api/tasks/${taskId}/move`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ columnId: newColumnId }),
      });
    } catch (error) {
      console.error("Error moving task:", error);
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={tasks.filter((task) => task.columnId === column.id)}
          onTaskMove={moveTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;