import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ showNav = true }) {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🎮 Game Explorer</h1>
      {showNav && (
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Profile
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
