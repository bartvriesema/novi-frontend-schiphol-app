import React from "react";
import "./FlightsPage.css";
import Weather from "../component/Weather";
import Flights from "../component/Flights";
import FlightsFilter from "../component/FlightsFilter";

function FlightsPage(props) {
  return (
    <div className="flightspage-container">
      <Weather />
      <div>
        <h1>Flights page</h1>
        <Flights />
      </div>
      <FlightsFilter />
    </div>
  );
}

export default FlightsPage;
