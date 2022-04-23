import React, { useContext } from "react";
import Flights from "../component/Flights";
import Weather from "../component/Weather";
import "./FlightsPage.css";
import { LoginContext } from "../context/LoginProvider";
import NotFoundPage from "./NotFoundPage";

function FlightsPage() {
  const { isLogin } = useContext(LoginContext);

  return (
    <>
      {!isLogin && <NotFoundPage />}

      {isLogin && (
        <div className="flightspage-container">
          <div>
            <Flights className="flight-container" />
          </div>
          <Weather />
        </div>
      )}
    </>
  );
}

export default FlightsPage;
