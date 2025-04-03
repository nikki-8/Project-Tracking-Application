import { useDrag } from "react-dnd";

const Task = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, columnId: task.columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "10px",
        margin: "8px 0",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        cursor: "grab",
      }}
    >
      <strong>{task.title}</strong>
      <p style={{ fontSize: "12px", color: "#666" }}>{task.description}</p>
    </div>
  );
};

export default Task;
