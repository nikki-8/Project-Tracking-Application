export const getColumns = async () => {
    const response = await fetch("/api/columns");
    if (!response.ok) throw new Error("Failed to fetch columns");
    return response.json();
  };
  
  export const getTasks = async () => {
    const response = await fetch("/api/tasks");
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return response.json();
  };
  
  export const moveTask = async (taskId, newColumnId) => {
    const response = await fetch(`/api/tasks/${taskId}/move`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ columnId: newColumnId }),
    });
  
    if (!response.ok) throw new Error("Failed to move task");
  
    return response.json();
  };
  
  export const createTask = async (taskData) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
  
    if (!response.ok) throw new Error("Failed to create task");
  
    return response.json();
  };
  
  export const deleteTask = async (taskId) => {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });
  
    if (!response.ok) throw new Error("Failed to delete task");
  
    return response.json();
  };
  