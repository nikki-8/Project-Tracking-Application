import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Kanban Board</h1>
      <p>Organize your tasks efficiently with our Kanban system.</p>
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/register" style={styles.button}>Register</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "18px",
    color: "white",
    background: "#007BFF",
    borderRadius: "5px",
  },
};

export default Home;
