import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginContext } from "../context/LoginProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { toggleLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm();

  function onFormSubmit(data) {
    loginUser(data);
  }

  function loginUser(loginData) {
    let headersList = {
      Accept: "*/*", "Content-Type": "application/json"
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}${process.env.REACT_APP_NOVI_SIGNIN}`,
      method: "POST",
      headers: headersList,
      data: loginData
    };

    axios
      .request(reqOptions)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        toggleLogin(true);
        navigate("/flights");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  }

  return (<div>

    <form className="form-container" onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="username" className="login-field">
        User name:{" "}
        <input
          type="text"
          placeholder="Enter your user name"
          {...register("username", {
            required: "Please provide a username",
            minLength: { value: 6, message: "A minimum of 6 characters is mandatory" }
          })}
        />
      </label>
      {errors.username && (<span className="login-page-error-message">{errors.username.message}</span>)}

      <label htmlFor="password" className="login-field">
        Password:{" "}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          {...register("password", {
            required: true, minLength: { value: 6, message: "A minimum of 6 characters is mandatory" }
          })}
        />
        <i
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (<FontAwesomeIcon icon="fa-regular fa-eye-slash" />) : (
            <FontAwesomeIcon icon="fa-regular fa-eye" />)}
        </i>
      </label>
      {errors.password && (<span className="login-page-error-message">{errors.password.message}</span>)}
      <button type="submit" className="login-register-button">
        Login
      </button>
    </form>
    <>
      {errorMessage && (<div className="loginpage-error">
        <p>Unable to login with provided credentials.</p>
        <p>Error message: {errorMessage}</p>
      </div>)}
    </>
  </div>);
}

export default LoginForm;
