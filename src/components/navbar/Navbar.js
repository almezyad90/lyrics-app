import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span > 
      <NavLink className="navbar-brand mb-0 h1 " to="/">
           LyricsPod
          </NavLink>
     </span>
      <ul className="nav justify-content-end">
        <li className="nav-link">
          <NavLink className="myLink" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="myLink" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
