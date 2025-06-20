import React, { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes glow {
        from { text-shadow: 0 0 10px #58a6ff, 0 0 20px #1f6feb; }
        to { text-shadow: 0 0 20px #58a6ff, 0 0 30px #1f6feb; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const styles = {
    loaderWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0d1117",
      color: "#58a6ff",
      fontFamily: "'Orbitron', sans-serif",
      textAlign: "center",
      gap: "2rem",
    },
    logo: {
      fontSize: "2.2rem",
      fontWeight: "600",
      animation: "glow 2s ease-in-out infinite alternate",
      color: "#58a6ff",
      textShadow: "0 0 10px #58a6ff, 0 0 20px #1f6feb",
    },
    spinner: {
      width: "70px",
      height: "70px",
      border: "8px solid #30363d",
      borderTop: "8px solid #58a6ff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
  };

  return (
    <div style={styles.loaderWrapper}>
      <h1 style={styles.logo}>🎮 Game Explorer</h1>
      <div style={styles.spinner}></div>
    </div>
  );
}

export default Loader;
