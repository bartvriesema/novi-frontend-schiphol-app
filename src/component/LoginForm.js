import React, { useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  function onFormSubmit(data) {
    console.log(data);
    loginUser(data);
  }

  function loginUser(loginData) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url:  `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}${process.env.REACT_APP_NOVI_SIGNIN}`,
      method: "POST",
      headers: headersList,
      data: loginData,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        console.log(response.data);
        // Forward user to logged in page
      })
      .catch((error) => {
        console.log(error.request);
        // Catch when error. Show message to user
      });
  }

  return (
    <div>
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

export default LoginForm;
