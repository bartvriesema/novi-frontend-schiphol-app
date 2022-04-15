import React, { useState } from "react";
import Weather from "../component/Weather";
import "./LoginPage.css";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

function Login(props) {
  const [showLogin, toggleShowLogin] = useState(false);

  return (
    <div className="login-page-container">
      <Weather />
      <div className="login-form-container">
        {showLogin && (
          <>
            <LoginForm />
            <div>Test</div>
          </>
        )}
        {!showLogin && (
          <>
            <RegisterForm />
            <div>Register test</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
