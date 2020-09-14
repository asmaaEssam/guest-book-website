import React from "react";
import Book from "../../media/imgs/book.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <div className="logo-container">
            <img src={Book} alt="" width="100px" />
            <h3> GUEST BOOK </h3>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
