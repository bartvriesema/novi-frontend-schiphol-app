import React, { useState } from "react";
import Weather from "../component/Weather";
import "./LoginPage.css";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

function LoginPage() {
  const [showLogin, toggleShowLogin] = useState(true);

  return (<div className="login-page-container">
    <div className="loginpage-form">
      <ul className="loginpage-switcher">
        <li className={showLogin ? "loginpage-selected" : "loginpage-notselected"}
            onClick={() => toggleShowLogin(true)}>Login
        </li>
        <li className={!showLogin ? "loginpage-selected" : "loginpage-notselected"}
            onClick={() => toggleShowLogin(false)}>Register
        </li>
      </ul>

      <div className="login-form-container">
        {showLogin && (<>
          <LoginForm />
        </>)}
        {!showLogin && (<>
          <RegisterForm toggleLogin={toggleShowLogin} />
        </>)}
      </div>
    </div>
    <Weather />
  </div>);
}

export default LoginPage;
