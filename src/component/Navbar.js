import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import airplaneIcon from "../assets/airplane-logo.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <ul className="navbar-container">
      <Link to="/">
        <li className="navbar-button">
          <img src={airplaneIcon} alt="airplane-icon" className="navbar-icon" />
          Home
        </li>
      </Link>
      <Link to="/flights">
        <li className="navbar-button">
          <FontAwesomeIcon icon="fa-solid fa-plane" /> Flights
        </li>
      </Link>
      <Link to="/login">
        <li className="navbar-button">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" /> Login
        </li>
      </Link>
    </ul>
  );
}

export default Navbar;
