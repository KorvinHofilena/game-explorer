import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Home
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Header;
