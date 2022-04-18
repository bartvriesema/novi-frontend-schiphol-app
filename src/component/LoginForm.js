import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginContext } from "../context/LoginProvider";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { toggleLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onFormSubmit(data) {
    loginUser(data);
  }

  function loginUser(loginData) {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}${process.env.REACT_APP_NOVI_SIGNIN}`,
      method: "POST",
      headers: headersList,
      data: loginData,
    };

    axios
      .request(reqOptions)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        toggleLogin(true);
        navigate("/flights");
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
            {...register("username", {
              required: "Gebruikersnaam mag niet leeg zijn",
              minLength: { value: 6, message: "Minimaal 6 karakters" },
            })}
          />
        </label>
        {errors.username && (
          <span className="login-error-message">{errors.username.message}</span>
        )}

        <label htmlFor="password" className="login-field">
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "Minimaal 6 karakters" },
            })}
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
        {errors.password && (
          <span className="login-error-message">{errors.password.message}</span>
        )}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
