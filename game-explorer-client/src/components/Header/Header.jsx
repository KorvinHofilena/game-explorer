import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/profile" className={styles.navLink}>
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
