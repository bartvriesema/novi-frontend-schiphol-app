import React from "react";
import "./Homepage.css";
import Flights from "../component/Flights";
import Weather from "../component/Weather";

function Homepage(props) {
  return (
    <div className="homepage-container">
      <Weather />
      <Flights />
    </div>
  );
}

export default Homepage;
