import React, { useState } from "react";
import Weather from "../component/Weather";
import "./LoginPage.css";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

function Login() {
  const [showLogin, toggleShowLogin] = useState(true);

  return (
    <div className="login-page-container">

      <div className="login-form-container">
        {showLogin && (
          <>
            <LoginForm />
            <div onClick={() => toggleShowLogin(!showLogin)}>Registreer gebruiker</div>

          </>
        )}
        {!showLogin && (
          <>
            <RegisterForm />
            <div onClick={() => toggleShowLogin(!showLogin)}>Login gebruiker</div>
          </>
        )}
      </div>
      <Weather />
    </div>
  );
}

export default Login;
