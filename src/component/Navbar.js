import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import airplaneIcon from '../assets/airplane-logo.svg'


function Navbar(props) {
    return (<ul className="navbar-container">

        <Link to="/">
            <li className="navbar-button"><img src={airplaneIcon} alt="airplane-icon" className="navbar-icon"/>Home
            </li>
        </Link>
        <Link to="/login">
            <li className="navbar-button">Login</li>
        </Link>
    </ul>);
}

export default Navbar;