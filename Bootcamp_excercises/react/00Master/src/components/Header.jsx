import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/products" className="products">
        Products
      </Link>
    </div>
  );
};

export default Header;
