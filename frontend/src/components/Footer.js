import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© Taskly Kanban Board. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#007BFF",
    color: "white",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
