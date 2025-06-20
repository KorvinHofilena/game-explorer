import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FavoritesProvider } from "./contexts/FavoritesContext"; // ✅ Corrected import

function Loader() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spinPulse {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.15); }
        100% { transform: rotate(360deg) scale(1); }
      }

      @keyframes glow {
        from { text-shadow: 0 0 10px #58a6ff, 0 0 20px #1f6feb; }
        to { text-shadow: 0 0 20px #58a6ff, 0 0 30px #1f6feb; }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.98); }
        to { opacity: 1; transform: scale(1); }
      }

      .loaderWrapper {
        animation: fadeIn 0.8s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="loaderWrapper" style={styles.loaderWrapper}>
      <h1 style={styles.logo}>🎮 Game Explorer</h1>
      <div style={styles.spinner}></div>
    </div>
  );
}

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
    color: "#58a6ff",
    animation: "glow 2s ease-in-out infinite alternate",
    textShadow: "0 0 10px #58a6ff, 0 0 20px #1f6feb",
  },
  spinner: {
    width: "70px",
    height: "70px",
    border: "8px solid #30363d",
    borderTop: "8px solid #58a6ff",
    borderRadius: "50%",
    animation: "spinPulse 1.2s ease-in-out infinite",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <FavoritesProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </FavoritesProvider>
    </HashRouter>
  </React.StrictMode>
);
