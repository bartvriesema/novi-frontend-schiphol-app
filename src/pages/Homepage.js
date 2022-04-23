import React from "react";
import Flights from "../component/Flights";
import Weather from "../component/Weather";
import "./Homepage.css";

function Homepage(props) {
  return (
    <div className="homepage-container">
      <Flights />
      <Weather />
    </div>
  );
}

export default Homepage;
