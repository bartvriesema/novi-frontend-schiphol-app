import React, { useEffect, useState } from "react";
import "./Login.css";
import Weather from "../component/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page-container">
      <Weather />
      <form className="form-container">
        <label htmlFor="username">
          User name:{" "}
          <input
            type="text"
            placeholder="Enter your user name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
