import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/ListBooks">List books</Link>
      <Link to="/AddBook">Add books</Link>
    </div>
  );
};

export default Navbar;
