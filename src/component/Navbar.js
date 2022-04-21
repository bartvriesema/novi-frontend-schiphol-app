import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import airplaneIcon from "../assets/airplane-logo.svg";
import "./Navbar.css";
import {LoginContext} from "../context/LoginProvider";

function Navbar(props) {
    const {isLogin, toggleLogin} = useContext(LoginContext);

    function logOut() {
        localStorage.clear();
        toggleLogin(false);
    }

    return (
        <ul className="navbar-container">
            <Link to="/">
                <li className="navbar-button">
                    <img src={airplaneIcon} alt="airplane-icon" className="navbar-icon"/>
                    Home
                </li>
            </Link>
            {isLogin && (
                <Link to="/flights">
                    <li className="navbar-button">
                        <FontAwesomeIcon icon="fa-solid fa-plane"/> Flights
                    </li>
                </Link>
            )}
            {!isLogin && (
                <Link to="/login">
                    <li className="navbar-button">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket"/> Login
                    </li>
                </Link>
            )}
            {isLogin && (
                <Link to="/">
                    <li className="navbar-button" onClick={() => logOut()}>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket"/>
                        Log out
                    </li>
                </Link>
            )}
        </ul>
    );
}

export default Navbar;
