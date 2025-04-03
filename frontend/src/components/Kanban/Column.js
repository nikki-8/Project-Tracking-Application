import { useDrop } from "react-dnd";
import Task from "./Task";
import { sendTaskUpdate } from "../websocket";

const Column = ({ column, tasks, onTaskMove }) => {
  const [, dropRef] = useDrop(() => ({
    accept: "TASK",
    drop: (draggedTask) => {
      if (draggedTask.columnId !== column.id) {
        onTaskMove(draggedTask.id, column.id);
        sendTaskUpdate({ id: draggedTask.id, columnId: column.id });
      }
    },
  }));

  return (
    <div
      ref={dropRef}
      style={{
        width: "300px",
        padding: "10px",
        border: "2px solid black",
        backgroundColor: "#f8f9fa",
        minHeight: "250px",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{column.name}</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
