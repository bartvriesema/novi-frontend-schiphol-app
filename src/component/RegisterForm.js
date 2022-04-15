import React, { useState } from "react";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegisterForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  function onFormSubmit(data) {
    console.log(data);
    registerUser(data);
  }

  function registerUser(registerData) {

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}${process.env.REACT_APP_NOVI_SIGNUP}`,
      method: "POST",
      headers: headersList,
      data: registerData,
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
        <label htmlFor="email" className="login-field">
          E-mail address:{" "}
          <input
            type="email"
            placeholder="Enter your e-mail address"
            {...register("email")}
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
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
