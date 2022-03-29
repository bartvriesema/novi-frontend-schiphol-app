import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import Weather from "../component/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="login-page-container">
      <Weather />
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="login-field">
          User name:{" "}
          <input
            type="text"
            placeholder="Enter your user name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="login-field">
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-eye" />
            )}
          </i>
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
