import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <h3> Logoo </h3>
        </div>
        <ul className="navbar-ul">
          <li className="nav-item">
            <Link to='/login'>SIGN IN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
