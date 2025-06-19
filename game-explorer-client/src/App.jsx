import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  return (
    <div className={styles.app}>
      <Header showNav={!loading} />
      <main>
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route
            path="/profile"
            element={<Profile setLoading={setLoading} />}
          />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
