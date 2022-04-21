import React, {useState} from "react";
import Weather from "../component/Weather";
import "./LoginPage.css";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

function Login(props) {
    const [showLogin, toggleShowLogin] = useState(true);

    return (
        <div className="login-page-container">
            <Weather/>
            <div className="login-form-container">
                {showLogin && (
                    <>
                        <LoginForm/>
                        <div onClick={() => toggleShowLogin(!showLogin)}>Registreer gebruiker</div>

                    </>
                )}
                {!showLogin && (
                    <>
                        <RegisterForm/>
                        <div onClick={() => toggleShowLogin(!showLogin)}>Login gebruiker</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
