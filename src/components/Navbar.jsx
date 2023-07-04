import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
            to=""
            end
          >
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
            to="friends"
          >
            My Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
