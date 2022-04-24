import React, { useState } from "react";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register, handleSubmit, formState: { errors }
  } = useForm();

  function onFormSubmit(data) {
    registerUser(data);
  }

  function registerUser(registerData) {
    let headersList = {
      Accept: "*/*", "Content-Type": "application/json"
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}${process.env.REACT_APP_NOVI_SIGNUP}`,
      method: "POST",
      headers: headersList,
      data: registerData
    };

    axios
      .request(reqOptions)
      .then((response) => {
        setErrorMessage("");
        setSuccessMessage(response.data.message);
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error.response.data);
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
            required: "Username is mandatory",
            minLength: { value: 6, message: "A minimum of 6 characters is mandatory" }
          })}
        />
      </label>
      {errors.username && (<span className="loginpage-error-message-error-message">
            {errors.username.message}
          </span>)}

      <label htmlFor="email" className="login-field">
        E-mail address:{" "}
        <input
          type="text"
          placeholder="E-mail address"
          {...register("email", {
            required: "E-mail address is mandatory", pattern: {
              value: /^[a-zA-Z\d.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/,
              message: "Please provide a valid e-mail address"
            }
          })}
        />
      </label>
      {errors.email && (<p className="login-page-error-message">{errors.email.message}</p>)}

      <label htmlFor="password" className="login-field">
        Password:{" "}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          {...register("password", {
            required: true, minLength: { value: 6, message: "Minimaal 6 karakters" }
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
      {errors.password && (<span className="login-page-error-message">
            {errors.password.message}
          </span>)}

      <button type="submit" className="login-register-button">
        Register
      </button>
      <>
        {successMessage && (<div className="loginpage-success">
          <p>{successMessage}</p>
          <p>Please login with your credentials</p>
        </div>)}
      </>
      <>
        {errorMessage && (<div className="loginpage-error">
          <p>Unable to register with provided information.</p>
          <p>Error message: {errorMessage}</p>
        </div>)}
      </>
    </form>


  </div>);
}

export default RegisterForm;
