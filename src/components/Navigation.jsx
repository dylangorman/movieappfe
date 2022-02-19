import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" class="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" class="link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" class="link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/profile" class="link">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
