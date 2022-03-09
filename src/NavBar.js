import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand">
          <img
            src="logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          React Router Demo
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/2022/03/09">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
