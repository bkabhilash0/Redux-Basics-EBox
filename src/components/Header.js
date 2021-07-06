import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {props.isLoggedIn ? (
            <li>
              <a href="/">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/">Login</a>
            </li>
          )}
          <li>
            <NavLink to="/settings" activeClassName={classes.active}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
