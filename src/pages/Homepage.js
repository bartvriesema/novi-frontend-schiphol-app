import React from "react";
import "./Homepage.css";
import Flights from "../component/Flights";

function Homepage(props) {
  return (
    <div className="homepage-container">
      <h1>Dit is de Homepage</h1>
      <Flights />
    </div>
  );
}

export default Homepage;
