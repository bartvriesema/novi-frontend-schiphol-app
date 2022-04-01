import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Weather from "../component/Weather";
import "./LoginPage.css";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  function onFormSubmit(data) {
    console.log(data);
  }
  return (
    <div className="login-page-container">
      <Weather />
      <form className="form-container" onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="username" className="login-field">
          User name:{" "}
          <input
            type="text"
            placeholder="Enter your user name"
            {...register("username")}
          />
        </label>
        <label htmlFor="password" className="login-field">
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password")}
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
