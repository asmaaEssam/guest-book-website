import React from "react";
import Book from "../../media/imgs/book.svg"

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={Book} alt='' width= "100px"/>
          <h3> GUEST BOOK </h3>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
